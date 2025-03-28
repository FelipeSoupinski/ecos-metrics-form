const allMetricGroups = [
  {
    name: "Contributors and Active Developers",
    metrics:
      "M32, M38, M39, M65, M92, M166, M167, M179, M180, M181, M205, M210, M238",
    definition: "Total contributors and active developers per project",
    transformation: "Aggregation of developer count metrics",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Variety Metrics",
    metrics:
      "M13, M61, M62, M111, M112, M113, M114, M115, M126, M152, M155, M172, M201",
    definition:
      "Variety in products, projects, technologies, partners, and contributors",
    transformation: "Aggregation of variety metrics",
    aspect: "Business",
    secoIndicator: "Niche Creation",
  },
  {
    name: "Centrality and Connectedness",
    metrics: "M2, M5, M14, M15, M73, M76, M99, M132, M135, M137, M202, M239",
    definition: "Centrality and connectedness metrics in the ecosystem",
    transformation: "Aggregation of centrality metrics",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Lines of Code Metrics",
    metrics: "M22, M23, M24, M81, M219, M220, M221, M222, M223",
    definition:
      "Metrics related to changes in lines of code (added, removed, modified)",
    transformation:
      "Temporal granularity and aggregation of code changes",
    aspect: "Technical",
    secoIndicator: "Productivity",
  },
  {
    name: "Community Communication",
    metrics: "M45, M66, M83, M213, M228, M232, M235, M236, M237",
    definition:
      "Activity and responsiveness in discussion lists and communication",
    transformation: "Aggregation of communication metrics",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Bug Tracking",
    metrics: "M3, M33, M69, M91, M101, M102, M212, M233, M246",
    definition: "Activity and response time in bug tracking",
    transformation: "Aggregation of bug metrics",
    aspect: "Technical",
    secoIndicator: "Productivity",
  },
  {
    name: "Community Contribution",
    metrics: "M1, M8, M27, M52, M59, M60, M72, M206, M214",
    definition: "Metrics of community effort and contribution",
    transformation: "Aggregation of contribution metrics",
    aspect: "Social",
    secoIndicator: "Productivity",
  },
  {
    name: "Total Factor Productivity",
    metrics: "M4, M124, M144, M145, M146, M147, M197, M199",
    definition: "Total factor productivity and improvements over time",
    transformation: "Aggregation of productivity metrics",
    aspect: "Business",
    secoIndicator: "Productivity",
  },
  {
    name: "Network Resources",
    metrics: "M28, M29, M131, M149, M151, M154, M243, M244",
    definition: "Metrics related to collaboration network and resources",
    transformation: "Aggregation of network metrics",
    aspect: "Social",
    secoIndicator: "Niche Creation",
  },
  {
    name: "Project Lifecycle",
    metrics: "M182, M185, M242, M247, M250, M254, M255, M259",
    definition:
      "Metrics related to lifecycle, abandonment, and revitalization",
    transformation: "Aggregation of lifecycle metrics",
    aspect: "Technical",
    secoIndicator: "Robustness",
  },
  {
    name: "Repository Metrics",
    metrics: "M183, M184, M186, M187, M188, M189, M190, M191",
    definition: "Metrics related to repositories",
    transformation: "Aggregation of repository metrics",
    aspect: "Technical",
    secoIndicator: "Productivity",
  },
  {
    name: "Number of Commits",
    metrics: "M36, M93, M217, M224, M225, M226, M227",
    definition:
      "Total number of commits containing source code, documentation, and translation",
    transformation:
      "Temporal granularity and aggregation of similar commit metrics",
    aspect: "Technical",
    secoIndicator: "Productivity",
  },
  {
    name: "Market Share and Activity",
    metrics: "M84, M85, M138, M139, M153, M165, M207",
    definition:
      "Market share and activity as indicators of robustness",
    transformation: "Aggregation of market metrics",
    aspect: "Business",
    secoIndicator: "Robustness",
  },
  {
    name: "Financial Health",
    metrics: "M58, M95, M96, M97, M128, M129, M130",
    definition:
      "Metrics of financial health, solvency, and financial participation",
    transformation: "Aggregation of financial metrics",
    aspect: "Business",
    secoIndicator: "Robustness",
  },
  {
    name: "Ecosystem Connections",
    metrics: "M86, M88, M89, M90, M98, M116, M134",
    definition: "Connections between ecosystems and partnerships",
    transformation: "Aggregation of connection metrics",
    aspect: "Social",
    secoIndicator: "Niche Creation",
  },
  {
    name: "Downloads and Usage",
    metrics: "M42, M77, M87, M108, M174, M241",
    definition: "Number of downloads and software usage",
    transformation: "Aggregation of usage metrics",
    aspect: "Business",
    secoIndicator: "Robustness",
  },
  {
    name: "Satisfaction and Rating",
    metrics: "M74, M75, M110, M176, M177, M248",
    definition: "Satisfaction, reputation, and ratings",
    transformation: "Aggregation of satisfaction metrics",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Ecosystem Structure",
    metrics: "M16, M119, M120, M121, M195, M196",
    definition: "Structure, predictability, and persistence of the ecosystem",
    transformation: "Aggregation of structural metrics",
    aspect: "Technical",
    secoIndicator: "Robustness",
  },
  {
    name: "Extension Metrics",
    metrics: "M164, M168, M169, M170, M175, M178",
    definition: "Metrics related to extensions",
    transformation: "Aggregation of extension metrics",
    aspect: "Technical",
    secoIndicator: "Niche Creation",
  },
  {
    name: "Knowledge Creation",
    metrics: "M7, M17, M67, M68, M82",
    definition: "Creation and quality of knowledge and artifacts",
    transformation: "Aggregation of knowledge metrics",
    aspect: "Social",
    secoIndicator: "Niche Creation",
  },
  {
    name: "User Base",
    metrics: "M48, M49, M78, M80, M109",
    definition: "User base and interest",
    transformation: "Aggregation of user metrics",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Developer Experience",
    metrics: "M10, M25, M31, M37, M41",
    definition: "Developer experience and activity",
    transformation: "Aggregation of experience metrics",
    aspect: "Social",
    secoIndicator: "Productivity",
  },
  {
    name: "Files Changed",
    metrics: "M18, M19, M44, M218",
    definition:
      "Number of files changed or total files in the project",
    transformation:
      "Temporal granularity and aggregation of file metrics",
    aspect: "Technical",
    secoIndicator: "Productivity",
  },
  {
    name: "Value Creation",
    metrics: "M125, M156, M157, M200",
    definition: "Value creation in the ecosystem",
    transformation: "Aggregation of value metrics",
    aspect: "Business",
    secoIndicator: "Niche Creation",
  },
  {
    name: "New Members",
    metrics: "M30, M160, M161, M216",
    definition: "New members, developers, and customers",
    transformation: "Temporal granularity of new members",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Update and Maintenance",
    metrics: "M163, M209, M249, M251",
    definition: "Update and maintenance of modules",
    transformation: "Aggregation of maintenance metrics",
    aspect: "Technical",
    secoIndicator: "Robustness",
  },
  {
    name: "Community Health",
    metrics: "M215, M230, M253, M260",
    definition: "Community health and diversity",
    transformation: "Aggregation of community health metrics",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Costs",
    metrics: "M141, M142, M143, M263",
    definition: "Costs of change, maintenance, and operation",
    transformation: "Aggregation of cost metrics",
    aspect: "Business",
    secoIndicator: "Productivity",
  },
  {
    name: "Platform Metrics",
    metrics: "M171, M203, M204, M208",
    definition: "Findability, visibility, and platform growth",
    transformation: "Aggregation of platform metrics",
    aspect: "Business",
    secoIndicator: "Robustness",
  },
  {
    name: "Organizational Metrics",
    metrics: "M94, M127, M133, M140",
    definition: "Organizational maturity and stability",
    transformation: "Aggregation of organizational metrics",
    aspect: "Business",
    secoIndicator: "Robustness",
  },
  {
    name: "Community Activity Rate",
    metrics: "M26, M35, M229, M234",
    definition: "Community activity rate",
    transformation: "Aggregation of activity rate metrics",
    aspect: "Social",
    secoIndicator: "Productivity",
  },
  {
    name: "Activity Visualization",
    metrics: "M9, M12, M53",
    definition: "Visualizations of project and developer activity",
    transformation: "Aggregation of visualization metrics",
    aspect: "Technical",
    secoIndicator: "Productivity",
  },
  {
    name: "Security and Stability",
    metrics: "M231, M257, M258",
    definition: "Indicators of security and stability",
    transformation: "Aggregation of security metrics",
    aspect: "Technical",
    secoIndicator: "Robustness",
  },
  {
    name: "Event Metrics",
    metrics: "M43, M56, M79",
    definition: "Events and participation",
    transformation: "Aggregation of event metrics",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Web Presence",
    metrics: "M57, M63, M64",
    definition: "Web presence and visibility",
    transformation: "Aggregation of web metrics",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Developer Retention",
    metrics: "M162, M245, M264",
    definition: "Developer retention and activity",
    transformation: "Aggregation of retention metrics",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Release Activity",
    metrics: "M40, M54, M159",
    definition: "Release activity",
    transformation: "Aggregation of release metrics",
    aspect: "Technical",
    secoIndicator: "Productivity",
  },
  {
    name: "Innovation and Evolution",
    metrics: "M118, M193",
    definition: "Delivery and measurement of innovation",
    transformation: "Aggregation of innovation metrics",
    aspect: "Business",
    secoIndicator: "Niche Creation",
  },
  {
    name: "Language Support",
    metrics: "M104, M173",
    definition: "Language support",
    transformation: "Aggregation of language metrics",
    aspect: "Technical",
    secoIndicator: "Niche Creation",
  },
  {
    name: "Switching Costs",
    metrics: "M105, M106",
    definition: "Costs of switching to alternatives",
    transformation: "Aggregation of switching metrics",
    aspect: "Business",
    secoIndicator: "Robustness",
  },
  {
    name: "Developer Collaboration",
    metrics: "M6, M51",
    definition: "Collaboration between developers",
    transformation: "Aggregation of collaboration metrics",
    aspect: "Social",
    secoIndicator: "Productivity",
  },
  {
    name: "Node Metrics",
    metrics: "M47, M192",
    definition: "Node metrics and user experience",
    transformation: "Aggregation of node metrics",
    aspect: "Technical",
    secoIndicator: "Robustness",
  },
  {
    name: "Compatibility",
    metrics: "M262",
    definition: "Compatibility between components",
    transformation: "Single compatibility metric",
    aspect: "Technical",
    secoIndicator: "Robustness",
  },
  {
    name: "Q&A Metrics",
    metrics: "M240",
    definition: "Metrics of question and answer repositories, for example, Stack Overflow response rate",
    transformation: "Single support metric",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Digital Independence",
    metrics: "M256",
    definition: "Customization and independent evolution capability",
    transformation: "Single independence metric",
    aspect: "Business",
    secoIndicator: "Niche Creation",
  },
  {
    name: "Long-term Sustainability",
    metrics: "M261",
    definition: "Long-term sustainability",
    transformation: "Single sustainability metric",
    aspect: "Social",
    secoIndicator: "Robustness",
  },
  {
    name: "Code Size",
    metrics: "M211",
    definition: "Project code size",
    transformation: "Single size metric",
    aspect: "Technical",
    secoIndicator: "Productivity",
  },
];

export default allMetricGroups;
