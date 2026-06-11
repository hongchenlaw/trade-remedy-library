const measureLabels = {
  "Anti-dumping": { en: "Anti-dumping", zh: "反倾销" },
  Countervailing: { en: "Countervailing", zh: "反补贴" },
  Safeguard: { en: "Safeguard", zh: "保障措施" }
};

const sharedSchedules = {
  "Anti-dumping": {
    en: [
      ["Petition / application", "Day 0", "Domestic industry files evidence of dumping, injury, and causation."],
      ["Initiation review", "Usually within 20-45 days", "Authority decides whether the application contains enough evidence to open a case."],
      ["Questionnaire stage", "About 30-45 days after initiation", "Exporters, importers, and producers submit sales, cost, production, and injury information."],
      ["Preliminary determination", "About day 60-160", "Authority may impose provisional duties or securities if early findings are affirmative."],
      ["Disclosure / hearing", "After preliminary findings", "Interested parties comment on facts, methodology, injury, and causation."],
      ["Final determination", "Often 6-18 months from initiation", "Final duties may be imposed, the case may be terminated, or later reviews may follow."]
    ],
    zh: [
      ["申请/立案申请", "第0日", "国内产业提交倾销、损害及因果关系证据。"],
      ["立案审查", "通常20至45日内", "主管机关审查申请是否具备足够证据以启动调查。"],
      ["问卷阶段", "立案后约30至45日", "出口商、进口商和生产商提交销售、成本、生产及损害资料。"],
      ["初裁", "约第60至160日", "如初步认定成立，主管机关可能采取临时税或保证金。"],
      ["披露/听证", "初裁后", "利害关系方就事实、方法、损害和因果关系发表评论。"],
      ["终裁", "通常自立案起6至18个月", "可能征收最终反倾销税、终止调查，或进入后续复审。"]
    ]
  },
  Countervailing: {
    en: [
      ["Petition / application", "Day 0", "Domestic industry alleges subsidized imports, injury, and causation."],
      ["Initiation review", "Usually within 20-45 days", "Authority reviews subsidy program allegations, standing, injury evidence, and import data."],
      ["Government and exporter questionnaires", "About 30-45 days after initiation", "Foreign government and exporters report subsidy programs, benefits, sales, and production data."],
      ["Preliminary determination", "About day 60-160", "Authority may calculate provisional subsidy margins and require cash deposits or securities."],
      ["Verification and comments", "After questionnaire responses", "Authority tests subsidy evidence and parties comment on benefit, specificity, injury, and causation."],
      ["Final determination", "Often 6-18 months from initiation", "Final countervailing duties may be imposed, adjusted, reviewed, or the case may be terminated."]
    ],
    zh: [
      ["申请/立案申请", "第0日", "国内产业主张进口产品获得补贴并造成损害。"],
      ["立案审查", "通常20至45日内", "主管机关审查补贴项目、申请资格、损害证据和进口数据。"],
      ["政府及出口商问卷", "立案后约30至45日", "外国政府和出口商报告补贴项目、利益、销售及生产资料。"],
      ["初裁", "约第60至160日", "主管机关可能计算临时补贴幅度并要求保证金或临时措施。"],
      ["核查和评论", "问卷答复后", "主管机关核查补贴证据，各方就利益、专向性、损害和因果关系发表意见。"],
      ["终裁", "通常自立案起6至18个月", "可能征收最终反补贴税、调整、复审或终止调查。"]
    ]
  },
  Safeguard: {
    en: [
      ["Application / self-initiation", "Day 0", "Industry or authority identifies increased imports and serious injury concerns."],
      ["Initiation and notice", "Early stage", "Authority defines the product, period of investigation, interested parties, and timetable."],
      ["Questionnaires and injury record", "First several months", "Producers, importers, users, and exporters submit import, production, price, and market evidence."],
      ["Hearing and public interest review", "Mid-investigation", "Parties address serious injury, causation, adjustment plan, and downstream impact."],
      ["Recommendation", "After evidence review", "Authority recommends whether safeguard measures are necessary and what form they should take."],
      ["Final measure / review", "Usually within statutory deadline", "Measures may be tariffs, tariff-rate quotas, quotas, or no measure; duration and liberalization rules apply."]
    ],
    zh: [
      ["申请/自行启动", "第0日", "产业或主管机关发现进口激增并可能造成严重损害。"],
      ["立案和公告", "早期阶段", "主管机关确定产品范围、调查期、利害关系方和时间表。"],
      ["问卷和损害记录", "前几个月", "生产商、进口商、用户和出口商提交进口、产量、价格和市场证据。"],
      ["听证和公共利益审查", "调查中期", "各方就严重损害、因果关系、产业调整计划和下游影响发表意见。"],
      ["建议", "证据审查后", "主管机关建议是否需要保障措施以及措施形式。"],
      ["最终措施/复审", "通常在法定期限内", "可能采取关税、关税配额、数量限制或不采取措施，并适用期限和逐步放宽规则。"]
    ]
  }
};

const measureTemplates = {
  "Anti-dumping": {
    en: {
      introduction:
        "An anti-dumping investigation examines whether imported goods are sold below normal value and whether those dumped imports cause injury to the domestic industry.",
      requirements:
        "Authorities normally require dumping, material injury or threat of injury, and a causal link between the dumped imports and the injury.",
      outcomes:
        "Possible outcomes include termination, no duty, provisional measures, undertakings, final anti-dumping duties, exporter-specific rates, and later administrative, interim, expiry, or sunset reviews.",
      comments:
        "Chinese exporters usually gain from early cooperation, complete sales and cost data, and clear product-scope arguments. Main challenges are short deadlines, verification, adverse facts available, and methodology disputes."
    },
    zh: {
      introduction:
        "反倾销调查审查进口产品是否低于正常价值销售，以及该等倾销进口是否对国内产业造成损害。",
      requirements:
        "主管机关通常需要认定倾销、实质损害或损害威胁，以及倾销进口与损害之间的因果关系。",
      outcomes:
        "可能结果包括终止调查、不征税、临时措施、价格承诺、最终反倾销税、出口商单独税率，以及行政复审、期中复审、日落复审等后续程序。",
      comments:
        "中国出口商的优势在于尽早配合、提供完整销售和成本数据并提出清晰的产品范围抗辩；挑战在于期限短、核查要求高、不利事实风险和方法论争议。"
    }
  },
  Countervailing: {
    en: {
      introduction:
        "A countervailing investigation examines whether imported goods benefit from countervailable government subsidies and whether subsidized imports injure the domestic industry.",
      requirements:
        "Authorities normally require a financial contribution or income/price support, a benefit to the recipient, specificity, injury or threat of injury, and causation.",
      outcomes:
        "Possible outcomes include termination, no measure, provisional countervailing duty, final countervailing duty, subsidy undertakings where available, company-specific subsidy rates, and later reviews.",
      comments:
        "Chinese exporters need coordinated company and government responses, a complete subsidy-program map, and evidence showing no benefit or no specificity. Challenges include affiliate tracing, grants, tax programs, land-use issues, and verification across multiple entities."
    },
    zh: {
      introduction:
        "反补贴调查审查进口产品是否获得可反补贴的政府补贴，以及该等受补贴进口是否对国内产业造成损害。",
      requirements:
        "主管机关通常需要认定财政资助或收入/价格支持、受益、专向性、损害或损害威胁，以及因果关系。",
      outcomes:
        "可能结果包括终止调查、不采取措施、临时反补贴税、最终反补贴税、在适用情况下的承诺、企业单独补贴率以及后续复审。",
      comments:
        "中国出口商需要企业与政府协同答复，完整梳理补贴项目，并证明不存在利益或专向性；挑战包括关联方追溯、补助、税收项目、土地使用问题和多主体核查。"
    }
  },
  Safeguard: {
    en: {
      introduction:
        "A safeguard investigation examines whether increased imports, regardless of dumping or subsidy, cause or threaten serious injury to a domestic industry.",
      requirements:
        "Authorities normally require increased imports, serious injury or threat of serious injury, causation, and often consideration of public interest, adjustment plans, and WTO notification or consultation requirements.",
      outcomes:
        "Possible outcomes include no measure, provisional safeguard, tariff increase, tariff-rate quota, quota, adjustment plan, compensation discussions, retaliation risk, extension, liberalization, or termination.",
      comments:
        "Chinese exporters can work with importers and downstream users to show market need, lack of serious injury, or alternative causes. The challenge is that safeguard measures may apply globally rather than only to one country."
    },
    zh: {
      introduction:
        "保障措施调查审查进口产品是否因进口增加而对国内产业造成或威胁造成严重损害，不以倾销或补贴为前提。",
      requirements:
        "主管机关通常需要认定进口增加、严重损害或严重损害威胁、因果关系，并经常考虑公共利益、产业调整计划以及WTO通知或磋商要求。",
      outcomes:
        "可能结果包括不采取措施、临时保障措施、提高关税、关税配额、数量限制、产业调整计划、补偿磋商、报复风险、延长、逐步放宽或终止。",
      comments:
        "中国出口商可联合进口商和下游用户证明市场需求、无严重损害或存在其他损害原因；主要挑战是保障措施通常可能全球适用，而非仅针对某一国家。"
    }
  }
};

const countryProfiles = [
  {
    id: "australia",
    country: { en: "Australia", zh: "澳大利亚" },
    region: { en: "Asia-Pacific", zh: "亚太" },
    authority: {
      en: "Anti-Dumping Commission; responsible Minister makes final decisions",
      zh: "反倾销委员会；相关部长作出最终决定"
    },
    authorityUrl: "https://www.industry.gov.au/anti-dumping-commission",
    laws: {
      en:
        "Customs Act 1901; Customs Tariff (Anti-Dumping) Act 1975; Customs Tariff (Anti-Dumping) Regulation 2013; Customs Regulation 2015; Customs Regulation (International Obligations) 2015; Customs Administration Act 1985; Ministerial Directions; WTO agreements; Anti-Dumping Commission manuals and guidelines.",
      zh:
        "《1901年海关法》；《1975年海关税则（反倾销）法》；《2013年海关税则（反倾销）条例》；《2015年海关条例》；《2015年海关条例（国际义务）》；《1985年海关行政法》；部长指令；WTO协定；反倾销委员会手册和指南。"
    },
    lawsUrl:
      "https://www.industry.gov.au/anti-dumping-commission/about-anti-dumping-commission/key-legislation-directions-and-policy",
    overrides: {
      "Anti-dumping": {
        en: {
          introduction:
            "An Australian anti-dumping investigation determines whether imported goods are exported to Australia at dumped prices, normally below normal value, and whether those imports cause material injury to an Australian industry producing like goods. The purpose is to restore fair trading conditions, not to punish exporters.",
          requirements:
            "The Commission examines dumping, material injury, and causation, including export price, normal value, sales, profits, market share, productivity, price effects, cash flow, inventories, and employment. Injury caused by other factors should not be attributed to dumped imports.",
          outcomes:
            "The investigation may be terminated, proceed without measures, lead to provisional securities, or result in final duties imposed by the Minister. Duties may be fixed, ad valorem, floor-price based, or combined, and exporter-specific rates may apply.",
          comments:
            "Australia can be relatively favorable for cooperative Chinese exporters because it does not automatically apply the same strict non-market economy approach used in some jurisdictions. The main risks are incomplete data, short response deadlines, verification, and facts available."
        },
        zh: {
          introduction:
            "澳大利亚反倾销调查审查进口产品是否以倾销价格出口至澳大利亚，通常即低于正常价值，并审查该等进口是否对生产同类产品的澳大利亚产业造成实质损害。其目的在于恢复公平贸易条件，而非惩罚出口商。",
          requirements:
            "反倾销委员会审查倾销、实质损害和因果关系，包括出口价格、正常价值、销售、利润、市场份额、生产率、价格影响、现金流、库存和就业等因素。其他因素造成的损害不应归因于倾销进口。",
          outcomes:
            "调查可能被终止、继续但不采取措施、采取临时保证金，或由部长决定征收最终税。税种可为固定税、从价税、底价机制或组合方式，并可能适用出口商单独税率。",
          comments:
            "对积极配合的中国出口商而言，澳大利亚可能相对有利，因为其通常不会自动适用某些司法辖区的严格非市场经济方法。主要风险在于资料不完整、答卷期限短、核查和可得事实。"
        },
        schedule: {
          en: [
            ["Application filed", "Day 0", "Australian industry files the application."],
            ["Initiation decision", "Within 20 days", "Commission decides whether there are grounds to start."],
            ["Questionnaire responses", "Usually within 37 days after initiation", "Exporters and importers submit volume, cost, price, and market information."],
            ["Preliminary affirmative determination", "At or after day 60", "Provisional securities may be imposed if sufficient grounds exist."],
            ["Statement of Essential Facts", "By about day 110", "Commission discloses key facts and proposed recommendation basis."],
            ["Comments on SEF", "20 days after SEF", "Interested parties submit comments and rebuttal."],
            ["Final report to Minister", "By about day 155", "Commissioner gives findings and recommendation."],
            ["Ministerial decision", "After final report", "Minister decides whether final measures should be imposed."]
          ],
          zh: [
            ["提交申请", "第0日", "澳大利亚产业提交申请。"],
            ["立案决定", "20日内", "委员会决定是否有理由启动调查。"],
            ["问卷答复", "立案后通常37日内", "出口商和进口商提交数量、成本、价格和市场信息。"],
            ["初步肯定裁定", "第60日或之后", "如有充分依据，可能采取临时保证金。"],
            ["基本事实说明", "约第110日前", "委员会披露关键事实和拟建议依据。"],
            ["对基本事实说明评论", "披露后20日内", "利害关系方提交评论和反驳意见。"],
            ["提交部长最终报告", "约第155日前", "委员提交调查结果和建议。"],
            ["部长决定", "最终报告后", "部长决定是否采取最终措施。"]
          ]
        }
      }
    }
  },
  {
    id: "canada",
    country: { en: "Canada", zh: "加拿大" },
    region: { en: "North America", zh: "北美" },
    authority: { en: "Canada Border Services Agency and Canadian International Trade Tribunal", zh: "加拿大边境服务署和加拿大国际贸易法庭" },
    authorityUrl: "https://www.cbsa-asfc.gc.ca/sima-lmsi/menu-eng.html",
    laws: {
      en: "Special Import Measures Act; Special Import Measures Regulations; Canadian International Trade Tribunal Act and Rules; Customs Tariff safeguard provisions; WTO agreements.",
      zh: "《特别进口措施法》；《特别进口措施条例》；《加拿大国际贸易法庭法》及规则；《海关税则》保障措施条款；WTO协定。"
    },
    lawsUrl: "https://laws-lois.justice.gc.ca/eng/acts/S-15/"
  },
  {
    id: "eu",
    country: { en: "European Union", zh: "欧盟" },
    region: { en: "Europe", zh: "欧洲" },
    authority: { en: "European Commission, Directorate-General for Trade", zh: "欧盟委员会贸易总司" },
    authorityUrl: "https://policy.trade.ec.europa.eu/enforcement-and-protection/trade-defence_en",
    laws: {
      en: "Regulation (EU) 2016/1036; Regulation (EU) 2016/1037; EU safeguard regulations; Commission notices and questionnaires; WTO agreements.",
      zh: "欧盟第2016/1036号反倾销基本条例；第2016/1037号反补贴基本条例；欧盟保障措施条例；委员会公告和问卷；WTO协定。"
    },
    lawsUrl: "https://eur-lex.europa.eu/"
  },
  {
    id: "india",
    country: { en: "India", zh: "印度" },
    region: { en: "Asia-Pacific", zh: "亚太" },
    authority: { en: "Directorate General of Trade Remedies, Department of Commerce", zh: "印度商务部贸易救济总局" },
    authorityUrl: "https://www.dgtr.gov.in/",
    laws: {
      en: "Customs Tariff Act 1975; anti-dumping rules; countervailing duty rules; safeguard duty and quantitative restriction rules; DGTR trade notices; WTO agreements.",
      zh: "《1975年海关税则法》；反倾销规则；反补贴税规则；保障税及数量限制规则；DGTR贸易公告；WTO协定。"
    },
    lawsUrl: "https://www.dgtr.gov.in/acts-rules"
  },
  {
    id: "uk",
    country: { en: "United Kingdom", zh: "英国" },
    region: { en: "Europe", zh: "欧洲" },
    authority: { en: "Trade Remedies Authority; Secretary of State decides in specified cases", zh: "贸易救济署；特定案件由国务大臣作出决定" },
    authorityUrl: "https://www.trade-remedies.service.gov.uk/",
    laws: {
      en: "Taxation (Cross-border Trade) Act 2018; Trade Remedies regulations on dumping, subsidization, injury, and safeguards; Trade Act 2021; TRA guidance; WTO agreements.",
      zh: "《2018年税收（跨境贸易）法》；关于倾销、补贴、损害和保障措施的贸易救济条例；《2021年贸易法》；TRA指南；WTO协定。"
    },
    lawsUrl: "https://www.legislation.gov.uk/"
  },
  {
    id: "us",
    country: { en: "United States", zh: "美国" },
    region: { en: "North America", zh: "北美" },
    authority: { en: "U.S. Department of Commerce and U.S. International Trade Commission", zh: "美国商务部和美国国际贸易委员会" },
    authorityUrl: "https://www.trade.gov/us-antidumping-and-countervailing-duties",
    laws: {
      en: "Tariff Act of 1930, especially Title VII; 19 U.S.C.; 19 CFR parts 201, 207, and 351; section 201 safeguard provisions; Commerce and ITC practice notices; WTO agreements.",
      zh: "《1930年关税法》特别是第VII篇；美国法典第19编；联邦法规第19编第201、207、351部分；201条保障措施规定；商务部和ITC实践公告；WTO协定。"
    },
    lawsUrl: "https://www.ecfr.gov/current/title-19"
  },
  {
    id: "brazil",
    country: { en: "Brazil", zh: "巴西" },
    region: { en: "Latin America", zh: "拉丁美洲" },
    authority: {
      en: "Department of Trade Remedies and Public Interest, Ministry of Development, Industry, Trade and Services",
      zh: "巴西发展、工业、贸易和服务部贸易救济及公共利益部门"
    },
    authorityUrl: "https://www.gov.br/mdic/pt-br/assuntos/comercio-exterior/defesa-comercial-e-interesse-publico",
    laws: {
      en: "Decree No. 8,058/2013 for anti-dumping; countervailing and safeguard rules; Brazilian foreign trade regulations; public interest rules; WTO agreements.",
      zh: "第8,058/2013号反倾销法令；反补贴和保障措施规则；巴西外贸法规；公共利益规则；WTO协定。"
    },
    lawsUrl: "https://www.gov.br/mdic/pt-br/assuntos/comercio-exterior/defesa-comercial-e-interesse-publico/legislacao"
  },
  {
    id: "south-africa",
    country: { en: "South Africa", zh: "南非" },
    region: { en: "Africa", zh: "非洲" },
    authority: { en: "International Trade Administration Commission of South Africa", zh: "南非国际贸易管理委员会" },
    authorityUrl: "https://www.itac.org.za/",
    laws: {
      en: "International Trade Administration Act; Anti-Dumping Regulations; Countervailing Regulations; safeguard provisions; customs implementation rules; ITAC guidance; WTO agreements.",
      zh: "《国际贸易管理法》；反倾销条例；反补贴条例；保障措施条款；海关实施规则；ITAC指南；WTO协定。"
    },
    lawsUrl: "https://www.itac.org.za/pages/services/trade-remedies"
  }
];

const measureOrder = ["Anti-dumping", "Countervailing", "Safeguard"];

const jurisdictions = countryProfiles.map((profile) => ({
  ...profile,
  measures: measureOrder,
  details: Object.fromEntries(
    measureOrder.map((measure) => {
      const base = measureTemplates[measure];
      const override = profile.overrides?.[measure] || {};
      return [
        measure,
        {
          en: { ...base.en, ...override.en },
          zh: { ...base.zh, ...override.zh },
          schedule: override.schedule || sharedSchedules[measure]
        }
      ];
    })
  )
}));
