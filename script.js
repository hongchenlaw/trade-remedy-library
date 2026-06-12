const countryGrid = document.querySelector("#countryGrid");
const referenceGrid = document.querySelector("#referenceGrid");
const searchInput = document.querySelector("#searchInput");
const countrySelect = document.querySelector("#countrySelect");
const langButtons = document.querySelectorAll(".lang-button");
const translatableNodes = document.querySelectorAll("[data-i18n]");

let activeLang = "en";
let selectedCountry = "all";
const measureSelections = {};

const uiText = {
  en: {
    all: "All",
    allCountries: "All countries",
    sectionSelectLabel: "Select section",
    noMatch: "No jurisdiction matches this search yet.",
    officialSource: "Official source",
    typicalPath: "Typical investigation path",
    estimatedSchedule: "Estimated time schedule",
    headings: {
      introduction: "Brief introduction and definition",
      requirements: "Requirements for imposing duty measures",
      outcomes: "Possible outcomes",
      authority: "Investigation authority",
      procedure: "Procedure and estimated time schedule",
      laws: "Laws and regulations used in the investigation",
      comments: "Challenges and advantages"
    },
    pathTable: {
      stage: "Stage",
      action: "Typical action"
    },
    table: {
      stage: "Stage",
      time: "Estimated time",
      action: "Main action"
    }
  },
  zh: {
    all: "全部",
    allCountries: "全部国家",
    sectionSelectLabel: "选择章节",
    noMatch: "暂无匹配的司法辖区。",
    officialSource: "官方来源",
    typicalPath: "典型调查路径",
    estimatedSchedule: "预计时间表",
    headings: {
      introduction: "简要介绍和定义",
      requirements: "采取税收措施的条件",
      outcomes: "可能结果",
      authority: "调查机关",
      procedure: "程序和预计时间表",
      laws: "调查适用的法律法规",
      comments: "挑战和优势"
    },
    pathTable: {
      stage: "阶段",
      action: "典型事项"
    },
    table: {
      stage: "阶段",
      time: "预计时间",
      action: "主要事项"
    }
  }
};

const pageText = {
  en: {
    nav: "International Trade Remedy",
    heroEyebrow: "International Trade Remedy Practice",
    heroTitle: "A practical law library for international trade remedy.",
    heroCopy:
      "Built for exporters, in-house counsel, trade associations, and legal teams who need a clear first map of each jurisdiction's practice, procedure, authority, legal basis, and participation risks.",
    explore: "Explore Countries",
    scopeLabel: "Scope",
    scopeTitle: "Simple, official-source oriented, and friendly to non-specialists.",
    scopeCopy:
      "This first version summarizes selected major jurisdictions and links to official authorities wherever possible. It is a learning and orientation tool, not a substitute for checking the latest statute, regulation, notice, or case record in a live investigation.",
    countryPractice: "Country Practice",
    libraryTitle: "Jurisdiction Library",
    libraryCopy:
      "Select one country, then choose anti-dumping, countervailing, or safeguard inside the country card.",
    countrySelectLabel: "Explore Countries",
    searchLabel: "Search",
    searchPlaceholder: "Country, law, authority, exporter issue",
    lawsLabel: "Laws And Regulations",
    lawsTitle: "Official Legal Materials To Check First",
    lawsCopy:
      "Use these as starting points before reviewing the latest notices, questionnaires, and case-specific instructions.",
    footer:
      "Prepared for Hong Chen. Content is for professional orientation and should be checked against current official sources.",
    top: "Back to top"
  },
  zh: {
    nav: "国际贸易救济",
    heroEyebrow: "国际贸易救济实务",
    heroTitle: "国际贸易救济实用法律资料库。",
    heroCopy:
      "本资料库面向出口商、企业法务、行业协会和律师团队，帮助使用者快速了解各司法辖区的实务、程序、调查机关、法律依据和参与风险。",
    explore: "浏览国家",
    scopeLabel: "范围",
    scopeTitle: "简明、准确、重视官方来源，并便于非专业读者理解。",
    scopeCopy:
      "本版本概述若干主要司法辖区，并尽可能链接至官方机关资料。其功能是学习和初步判断，不替代对最新法律、法规、公告或具体案件记录的核查。",
    countryPractice: "国家/地区实务",
    libraryTitle: "司法辖区资料库",
    libraryCopy: "请选择一个国家，然后在该国家卡片中选择反倾销、反补贴或保障措施章节。",
    countrySelectLabel: "浏览国家",
    searchLabel: "搜索",
    searchPlaceholder: "国家、法律、机关、出口商问题",
    lawsLabel: "法律法规",
    lawsTitle: "优先查阅的官方法律资料",
    lawsCopy: "在研究最新公告、问卷和具体案件要求前，可先以这些资料作为入口。",
    footer: "为Hong Chen制作。内容用于专业参考，具体案件应核查最新官方来源。",
    top: "返回顶部"
  }
};

const typicalInvestigationPath = {
  en: [
    ["Petition or application", "Domestic industry files evidence of dumping, subsidization, injury, causal link, or import surge."],
    ["Initiation and questionnaires", "The authority opens the case, identifies interested parties, and issues exporter, importer, and producer questionnaires."],
    ["Sampling, responses, and verification", "Exporters prepare data on sales, costs, subsidies, and corporate structure. Verification tests accuracy and completeness."],
    ["Preliminary determination", "Authorities may impose provisional duties, accept undertakings, or continue collecting evidence."],
    ["Hearing and comments", "Parties comment on disclosure, defend methodology, raise public interest issues, and challenge injury analysis."],
    ["Final determination and review", "Final duties may be imposed, terminated, reviewed, appealed, or examined in sunset and administrative reviews."]
  ],
  zh: [
    ["申请或立案申请", "国内产业提交倾销、补贴、损害、因果关系或进口激增证据。"],
    ["立案和问卷", "主管机关启动案件，确定利害关系方，并发放出口商、进口商和生产商问卷。"],
    ["抽样、答卷和核查", "出口商准备销售、成本、补贴和公司结构资料；核查用于检验资料准确性和完整性。"],
    ["初步裁定", "主管机关可能采取临时税、接受承诺，或继续收集证据。"],
    ["听证和评论", "各方就披露内容发表评论，维护方法论，提出公共利益问题，并挑战损害分析。"],
    ["终裁和复审", "可能征收最终税、终止调查、进入复审、上诉或日落复审。"]
  ]
};

function localizePage() {
  document.documentElement.lang = activeLang === "zh" ? "zh-CN" : "en";
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = pageText[activeLang][key];
  });

  const placeholder = pageText[activeLang].searchPlaceholder;
  searchInput.placeholder = placeholder;
  renderCountryOptions();
}

function collectText(value) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(collectText).join(" ");
  if (typeof value === "object") return Object.values(value).map(collectText).join(" ");
  return "";
}

function matchesSearch(item, query) {
  if (!query) return true;
  return collectText(item).toLowerCase().includes(query.toLowerCase());
}

function renderCountryOptions() {
  countrySelect.innerHTML = [
    `<option value="all">${uiText[activeLang].allCountries}</option>`,
    ...jurisdictions.map((item) => `<option value="${item.id}">${item.country[activeLang]}</option>`)
  ].join("");
  countrySelect.value = selectedCountry;
}

function selectedMeasures(item) {
  const selectedMeasure = measureSelections[item.id] || "all";
  return selectedMeasure === "all" ? item.measures : item.measures.filter((measure) => measure === selectedMeasure);
}

function visibleJurisdictions() {
  const query = searchInput.value.trim();
  return jurisdictions.filter(
    (item) =>
      (selectedCountry === "all" || item.id === selectedCountry) &&
      selectedMeasures(item).length &&
      matchesSearch(item, query)
  );
}

function renderPathTable(rows) {
  return `
    <div class="schedule-wrap">
      <table class="schedule-table path-table">
        <thead>
          <tr>
            <th>${uiText[activeLang].pathTable.stage}</th>
            <th>${uiText[activeLang].pathTable.action}</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row, index) => `
                <tr>
                  <td><span class="stage-number">${index + 1}</span>${row[0]}</td>
                  <td>${row[1]}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderScheduleTable(rows) {
  return `
    <div class="schedule-wrap">
      <table class="schedule-table">
        <thead>
          <tr>
            <th>${uiText[activeLang].table.stage}</th>
            <th>${uiText[activeLang].table.time}</th>
            <th>${uiText[activeLang].table.action}</th>
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              (row) => `
                <tr>
                  <td>${row[0]}</td>
                  <td>${row[1]}</td>
                  <td>${row[2]}</td>
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderMeasureSection(item, measure) {
  const details = item.details[measure][activeLang];
  const schedule = item.details[measure].schedule[activeLang];
  const headings = uiText[activeLang].headings;
  const pathRows = typicalInvestigationPath[activeLang];

  return `
    <section class="measure-section">
      <h4>${measureLabels[measure][activeLang]}</h4>
      <dl>
        <div>
          <dt>${headings.introduction}</dt>
          <dd>${details.introduction}</dd>
        </div>
        <div>
          <dt>${headings.requirements}</dt>
          <dd>${details.requirements}</dd>
        </div>
        <div>
          <dt>${headings.outcomes}</dt>
          <dd>${details.outcomes}</dd>
        </div>
        <div>
          <dt>${headings.authority}</dt>
          <dd><a href="${item.authorityUrl}" target="_blank" rel="noreferrer">${item.authority[activeLang]}</a></dd>
        </div>
        <div>
          <dt>${headings.procedure}</dt>
          <dd>
            <div class="procedure-tables">
              <div>
                <h5>${uiText[activeLang].typicalPath}</h5>
                ${renderPathTable(pathRows)}
              </div>
              <div>
                <h5>${uiText[activeLang].estimatedSchedule}</h5>
                ${renderScheduleTable(schedule)}
              </div>
            </div>
          </dd>
        </div>
        <div>
          <dt>${headings.laws}</dt>
          <dd>${item.laws[activeLang]} <a href="${item.lawsUrl}" target="_blank" rel="noreferrer">${uiText[activeLang].officialSource}</a></dd>
        </div>
        <div>
          <dt>${headings.comments}</dt>
          <dd>${details.comments}</dd>
        </div>
      </dl>
    </section>
  `;
}

function renderCountries() {
  const visibleItems = visibleJurisdictions();

  countryGrid.innerHTML = "";

  if (!visibleItems.length) {
    countryGrid.innerHTML = `<p class="empty-state">${uiText[activeLang].noMatch}</p>`;
    return;
  }

  visibleItems.forEach((item) => {
    const measures = selectedMeasures(item);
    const selectedMeasure = measureSelections[item.id] || "all";
    const card = document.createElement("article");
    card.className = "country-card";
    card.innerHTML = `
      <div class="card-head">
        <div>
          <span class="region">${item.region[activeLang]}</span>
          <h3>${item.country[activeLang]}</h3>
        </div>
        <label class="card-select">
          <span>${uiText[activeLang].sectionSelectLabel}</span>
          <select class="measure-select" data-country="${item.id}">
            <option value="all">${uiText[activeLang].all}</option>
            ${item.measures.map((measure) => `<option value="${measure}">${measureLabels[measure][activeLang]}</option>`).join("")}
          </select>
        </label>
      </div>
      <div class="measure-list">
        ${measures.map((measure) => renderMeasureSection(item, measure)).join("")}
      </div>
    `;
    card.querySelector(".measure-select").value = selectedMeasure;
    card.querySelector(".measure-select").addEventListener("change", (event) => {
      measureSelections[item.id] = event.target.value;
      renderCountries();
    });
    countryGrid.appendChild(card);
  });
}

function renderReferences() {
  const visibleItems = visibleJurisdictions();
  referenceGrid.innerHTML = visibleItems
    .map(
      (item) => `
        <a class="reference-item" href="${item.lawsUrl}" target="_blank" rel="noreferrer">
          <strong>${item.country[activeLang]}</strong>
          <span>${item.laws[activeLang]}</span>
        </a>
      `
    )
    .join("");
}

function renderAll() {
  localizePage();
  renderCountries();
  renderReferences();
}

countrySelect.addEventListener("change", () => {
  selectedCountry = countrySelect.value;
  renderCountries();
  renderReferences();
});

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    langButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeLang = button.dataset.lang;
    renderAll();
  });
});

searchInput.addEventListener("input", () => {
  renderCountries();
  renderReferences();
});

renderAll();
