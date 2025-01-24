const allMetrics = [
 {
   "id": "M1",
   "name": "Amount of Inquires or Feature Requests",
   "definition": "Number of queries or feedback received by the OSS community. Contributions can be corrective, adaptive, perfective, or preventive."
 },
 {
   "id": "M2",
   "name": "Betweenness Centrality",
   "definition": "Reflects the number of shortest paths passing through a specific node."
 },
 {
   "id": "M3",
   "name": "Bug Tracking Activity",
   "definition": "Number of comments created in the project's bug tracker and total number of actions in the bug tracker."
 },
 {
   "id": "M4",
   "name": "Buildup of Assets",
   "definition": "Total factor productivity over time. Can be measured using individual company data."
 },
 {
   "id": "M5",
   "name": "Centrality",
   "definition": "Number of member relations in cliques. Number of individual network relations of a partner. The most central partner is the most persistent."
 },
 {
   "id": "M6",
   "name": "Cluster of Collaborating Developers",
   "definition": "Nodes are developers and edges between them represent projects in which they collaborated. Both make modifications to the project at least a certain number of times."
 },
 {
   "id": "M7",
   "name": "Code Vocabulary Map",
   "definition": "Summary of terms used in the project's source code. The vocabulary map is a tool for developers who want to get an overview of the project's domain language."
 },
 {
   "id": "M8",
   "name": "Community Effort",
   "definition": "The combined effort of all members belonging to the community."
 },
 {
   "id": "M9",
   "name": "Contributor Activity Graph",
   "definition": "The distribution of contributors at the ecosystem level."
 },
 {
   "id": "M10",
   "name": "Contributor Commit Rate",
   "definition": "Average between first and last commit."
 },
 {
   "id": "M11",
   "name": "Date of Last Commit",
   "definition": "Date of the last commit of a project/community."
 },
 {
   "id": "M12",
   "name": "Developer Activity Diagrams",
   "definition": "Provides an overview of daily activity of contributors within an ecosystem."
 },
 {
   "id": "M13",
   "name": "Distribution over the Species",
   "definition": "Measure of variety for niche creation factor. The equality of partner division over species."
 },
 {
   "id": "M14",
   "name": "Ecosystem Cohesion",
   "definition": "Number of relations present in a subgroup/maximum possible relation between all nodes in the subgroup."
 },
 {
   "id": "M15",
   "name": "Ecosystem Connectedness",
   "definition": "Number of relations as a proportion of the theoretically maximum number of relations in the entire ecosystem."
 },
 {
   "id": "M16",
   "name": "Ecosystem Entropy",
   "definition": "Measure of disorder that can be seen as similar to measuring the existence of order or disorder among participating software components, software products, or software organizations."
 },
 {
   "id": "M17",
   "name": "Expertise View Contributor",
   "definition": "Visualization of a contributor's expertise based on file extensions (number and type of files changed within a month)."
 },
 {
   "id": "M18",
   "name": "Files Changed",
   "definition": "Number of files that were changed."
 },
 {
   "id": "M19",
   "name": "Files per Version",
   "definition": "Number of files per version."
 },
 {
   "id": "M20",
   "name": "Geographical Distribution",
   "definition": "Geographical distribution of community members."
 },
 {
   "id": "M21",
   "name": "Job Advertisements",
   "definition": "Number of job advertisements in the project/community."
 },
 {
   "id": "M22",
   "name": "Lines Added",
   "definition": "Lines added."
 },
 {
   "id": "M23",
   "name": "Lines Changed",
   "definition": "Lines changed."
 },
 {
   "id": "M24",
   "name": "Lines Removed",
   "definition": "Lines removed."
 },
 {
   "id": "M25",
   "name": "Maximum Number of Commits of a Developer",
   "definition": "The size and density of a contributor in a project."
 },
 {
   "id": "M26",
   "name": "Member Activity Rate",
   "definition": "Activity rate where 1 means a single person performs all the work."
 },
 {
   "id": "M27",
   "name": "Member Effort",
   "definition": "The effort of member m in community c."
 },
 {
   "id": "M28",
   "name": "Network Resources",
   "definition": "Measure for productivity delivery innovation factor."
 },
 {
   "id": "M29",
   "name": "Networks Node Connection",
   "definition": "Connections between species or central and non-central partners."
 },
 {
   "id": "M30",
   "name": "New Members",
   "definition": "Count of the number of new members at any point in time."
 },
 {
   "id": "M31",
   "name": "Number of Active Projects",
   "definition": "Number of active projects."
 },
 {
   "id": "M32",
   "name": "Number of Authors",
   "definition": "Number of authors for projects. An author can change files in a project."
 },
 {
   "id": "M33",
   "name": "Number of Bug Fixers",
   "definition": "Number of bug fixers in the community."
 },
 {
   "id": "M34",
   "name": "Number Committers",
   "definition": "Number of committers per project."
 },
 {
   "id": "M35",
   "name": "Number of Activity Communities",
   "definition": "The number of activity communities in which member m is involved."
 },
 {
   "id": "M36",
   "name": "Number of Commits",
   "definition": "Total number of commits containing source code, documentation, and translation."
 },
 {
   "id": "M37",
   "name": "Number of Community Project",
   "definition": "Number of projects built on the platform of a community."
 },
 {
   "id": "M38",
   "name": "Number of Contributors",
   "definition": "Total contributors per project."
 },
 {
   "id": "M39",
   "name": "Number of Core Developers",
   "definition": "Core developer contributes most of the code and oversees the design and evolution of the project."
 },
 {
   "id": "M40",
   "name": "Number of Developer Releases",
   "definition": "Number of releases in which a developer was active in a project."
 },
 {
   "id": "M41",
   "name": "Number of Developer Projects",
   "definition": "Number of projects of a developer."
 },
 {
   "id": "M42",
   "name": "Number of Downloads",
   "definition": "Number of downloads from the community's official portal or mirrors."
 },
 {
   "id": "M43",
   "name": "Number of Event People",
   "definition": "The number of people participating in project events and meetings provides direct information about community activity."
 },
 {
   "id": "M44",
   "name": "Number of Files",
   "definition": "Files during the life of projects."
 },
 {
   "id": "M45",
   "name": "Number of Mailing List Users",
   "definition": "Number of users subscribed to the project's discussion list."
 },
 {
   "id": "M46",
   "name": "Number of Members",
   "definition": "The number of active members involved in community c."
 },
 {
   "id": "M47",
   "name": "Number of Nodes and Edge",
   "definition": "Number of nodes and edges."
 },
 {
   "id": "M48",
   "name": "Number of Passive User",
   "definition": "Passive users in the community."
 },
 {
   "id": "M49",
   "name": "Number of Readers",
   "definition": "Number of readers in the community."
 },
 {
   "id": "M50",
   "name": "Number of Scientific Publications",
   "definition": "Number of scientific publications mentioning the community."
 },
 {
   "id": "M51",
   "name": "Outdegree of Keystone Actors",
   "definition": "Defined as someone who has many developers to work with and also plays a major role in the software ecosystem."
 },
 {
   "id": "M52",
   "name": "Principal Member Activity",
   "definition": "The main activity of member m for a given time t. Community c for which m performed the greatest effort."
 },
 {
   "id": "M53",
   "name": "Project Activity Diagrams",
   "definition": "Allows identifying project evolution by comparing six metrics calculating the distribution of contributor involvement."
 },
 {
   "id": "M54",
   "name": "Project Developer Experience",
   "definition": "Total number of releases in which the developer was active."
 },
 {
   "id": "M55",
   "name": "Reciprocity of the Ecosystem",
   "definition": "No definition provided."
 },
 {
   "id": "M56",
   "name": "Relation between Categorical Event and Developer Participation",
   "definition": "Relationship between categorical event and developer participation."
 },
 {
   "id": "M57",
   "name": "Social Media Hits",
   "definition": "Number of hits the project gets on social media."
 },
 {
   "id": "M58",
   "name": "Solvency",
   "definition": "Measure of value creation for niche creation."
 },
 {
   "id": "M59",
   "name": "Temporal Community Effort",
   "definition": "The combined effort of all members belonging to community c during time period t."
 },
 {
   "id": "M60",
   "name": "Total Effort of Members",
   "definition": "Total effort made by a given member m in a set of communities C."
 },
 {
   "id": "M61",
   "name": "Variety in Products",
   "definition": "Offered by the partner depends on alliances with other partners."
 },
 {
   "id": "M62",
   "name": "Variety of Partners",
   "definition": "Covariance with market indicates the variety of different partners a partner has."
 },
 {
   "id": "M63",
   "name": "Visibility",
   "definition": "Tells us something about the centrality of a partner in the market. Partner's popularity."
 },
 {
   "id": "M64",
   "name": "Web Page Requests",
   "definition": "Total requests for the OSS community's web page."
 },
 {
   "id": "M65",
   "name": "Active Contributors",
   "definition": "Number of active developers contributing to the ecosystem measured through commits, patches, and other activities."
 },
 {
   "id": "M66",
   "name": "Activity on Email Lists",
   "definition": "Activity and interactions on the project's email lists."
 },
 {
   "id": "M67",
   "name": "Added Knowledge about Ecosystem",
   "definition": "Indicates that contributors are adding knowledge such as aggregated information from blog posts and manuals."
 },
 {
   "id": "M68",
   "name": "Artifact Quality",
   "definition": "Indicates if the project was built to last through the quality of artifacts produced."
 },
 {
   "id": "M69",
   "name": "Bug Fix Time",
   "definition": "The time required to resolve problems reported in the ecosystem."
 },
 {
   "id": "M70",
   "name": "Capital Contributors and Donations",
   "definition": "Indicators of acceptance by commercial organizations showing that the project is likely not to disappear soon."
 },
 {
   "id": "M71",
   "name": "Commercial Patronage",
   "definition": "Indicates acceptance by commercial organizations demonstrating project sustainability."
 },
 {
   "id": "M72",
   "name": "Contributions from Non-developers",
   "definition": "Contributions coming from members who are not developers of the project."
 },
 {
   "id": "M73",
   "name": "Contributor Connectedness",
   "definition": "Indicates how well connected a developer is in the project."
 },
 {
   "id": "M74",
   "name": "Contributor Ratings and Reputation",
   "definition": "Describes how well the developer is contributing and performing within the ecosystem."
 },
 {
   "id": "M75",
   "name": "Contributor Satisfaction",
   "definition": "Level of satisfaction of contributors with the project."
 },
 {
   "id": "M76",
   "name": "Core Network Consistence",
   "definition": "Indicators of how well connected the parts of the network are."
 },
 {
   "id": "M77",
   "name": "Download of New Projects",
   "definition": "Indicates that new projects still find a welcoming community."
 },
 {
   "id": "M78",
   "name": "End-user Interest",
   "definition": "Level of interest demonstrated by end users in the project."
 },
 {
   "id": "M79",
   "name": "Events",
   "definition": "Events organized around the ecosystem where stakeholders are gathered."
 },
 {
   "id": "M80",
   "name": "Interest: Page Views Search Statistics",
   "definition": "Page views, search statistics, and other indicators of interest."
 },
 {
   "id": "M81",
   "name": "KLOC/time Period Added",
   "definition": "Lines of code added or changed over a time period."
 },
 {
   "id": "M82",
   "name": "Knowledge and Artifact Creation",
   "definition": "Creation of knowledge and artifacts by contributors such as manuals, translations, marketing materials, etc."
 },
 {
   "id": "M83",
   "name": "Mailing List Responsiveness",
   "definition": "The liveliness of the discussion list indicating how many people are contributing and using the project."
 },
 {
   "id": "M84",
   "name": "Market Share",
   "definition": "Market share as an indicator of project robustness."
 },
 {
   "id": "M85",
   "name": "Multiple Markets",
   "definition": "Indicates if the project is used in different markets."
 },
 {
   "id": "M86",
   "name": "Multi-homers",
   "definition": "Developers who participate in multiple ecosystems."
 },
 {
   "id": "M87",
   "name": "New Downloads",
   "definition": "Number of new downloads indicating adoption by end users."
 },
 {
   "id": "M88",
   "name": "New Partnerships",
   "definition": "New partnerships established in the ecosystem."
 },
 {
   "id": "M89",
   "name": "New Patents",
   "definition": "Patent activity indicating that the project is becoming more productive."
 },
 {
   "id": "M90",
   "name": "New Related Projects",
   "definition": "Projects that are part of the ecosystem such as the launch of a new plugin."
 },
 {
   "id": "M91",
   "name": "New Tickets",
   "definition": "Number of new tickets opened indicating how problems are reported."
 },
 {
   "id": "M92",
   "name": "Number of Active Developers",
   "definition": "Quantity of developers actively working on the project."
 },
 {
   "id": "M93",
   "name": "Number of Commits",
   "definition": "Total commits containing source code, documentation, and translations."
 },
 {
   "id": "M94",
   "name": "Organizational Maturity",
   "definition": "Indicates that the project is likely well managed."
 },
 {
   "id": "M95",
   "name": "Partner Equity",
   "definition": "Net equity of partners in the ecosystem."
 },
 {
   "id": "M96",
   "name": "Partner Profit Share",
   "definition": "Profit share of ecosystem partners."
 },
 {
   "id": "M97",
   "name": "Partner Revenue Share",
   "definition": "Revenue share of ecosystem partners."
 },
 {
   "id": "M98",
   "name": "Partnerships and Embeddedness",
   "definition": "Partnerships indicate a strong project well embedded in the community."
 },
 {
   "id": "M99",
   "name": "Project Connectedness/Cohesion",
   "definition": "Connectivity between members and consistency of the core network."
 },
 {
   "id": "M100",
   "name": "Project Findability",
   "definition": "Ability to find projects related to the ecosystem."
 },
 {
   "id": "M101",
   "name": "Response Times in Bug Trackers",
   "definition": "Response times in bug trackers."
 },
 {
   "id": "M102",
   "name": "Response Times in Forums",
   "definition": "Response times in community forums."
 },
 {
   "id": "M103",
   "name": "Spin Offs and Forks",
   "definition": "Number of spin-offs and forks indicating developer interest."
 },
 {
   "id": "M104",
   "name": "Supported Natural Language",
   "definition": "Availability in different languages."
 },
 {
   "id": "M105",
   "name": "Switching Costs to Alternatives",
   "definition": "Costs of switching to other solutions."
 },
 {
   "id": "M106",
   "name": "Switching Costs to other SECOs",
   "definition": "Indicates how difficult it is to switch to another ecosystem."
 },
 {
   "id": "M107",
   "name": "Total Number of Activity Projects",
   "definition": "Number of active projects indicator of strength and power in numbers."
 },
 {
   "id": "M108",
   "name": "Usage",
   "definition": "Use of the project indicating its importance to end users."
 },
 {
   "id": "M109",
   "name": "User Loyalty and Usage",
   "definition": "Indicate how a project can remain robust in the future."
 },
 {
   "id": "M110",
   "name": "User Satisfaction or Ratings",
   "definition": "User satisfaction and ratings."
 },
 {
   "id": "M111",
   "name": "Variation in Contributor Type",
   "definition": "Shows that a project is mature and allows different types of contributors."
 },
 {
   "id": "M112",
   "name": "Variation in Project Applications",
   "definition": "Variety in project applications."
 },
 {
   "id": "M113",
   "name": "Variety in Projects",
   "definition": "Indicates that there are many niches, platforms, domains, etc."
 },
 {
   "id": "M114",
   "name": "Variety in Development Technologies",
   "definition": "Variety in development technologies used."
 },
 {
   "id": "M115",
   "name": "Variety in Supported Technologies",
   "definition": "Variety in technologies supported by the project."
 },
 {
   "id": "M116",
   "name": "Outbound links to Other SECOs",
   "definition": "Indicates how well the ecosystem is connected to other ecosystems."
 },
 {
   "id": "M117",
   "name": "Continuity of Use Experience and Use Cases",
   "definition": "Continuity in use experience and use cases."
 },
 {
   "id": "M118",
   "name": "Delivery of Innovation",
   "definition": "Delivery of innovation."
 },
 {
   "id": "M119",
   "name": "Limited Obsolescence",
   "definition": "Limited obsolescence."
 },
 {
   "id": "M120",
   "name": "Persistence of Structure",
   "definition": "Persistence of structure."
 },
 {
   "id": "M121",
   "name": "Predictability",
   "definition": "Predictability."
 },
 {
   "id": "M122",
   "name": "Productivity Improvement Over Time",
   "definition": "Productivity improvement over time."
 },
 {
   "id": "M123",
   "name": "Survival Rates",
   "definition": "Survival rates."
 },
 {
   "id": "M124",
   "name": "Total Factor Productivity",
   "definition": "Total factor productivity."
 },
 {
   "id": "M125",
   "name": "Value Creation",
   "definition": "Value creation."
 },
 {
   "id": "M126",
   "name": "Variety",
   "definition": "Variety in the ecosystem."
 },
 {
   "id": "M127",
   "name": "Number of Startups and Bankrupt Companies",
   "definition": "Number of new companies and bankrupt companies over multiple years."
 },
 {
   "id": "M128",
   "name": "Z-score",
   "definition": "Bankruptcy model to test the credibility and solvency of individual partners based on 5 financial indices."
 },
 {
   "id": "M129",
   "name": "ZETA Model",
   "definition": "Bankruptcy score classification model based on return on assets, earnings stability, debt service, cumulative profitability, liquidity, capitalization, and company size."
 },
 {
   "id": "M130",
   "name": "Liquidity",
   "definition": "Indicates whether a partner is able to meet short-term obligations."
 },
 {
   "id": "M131",
   "name": "Number of Relations and Agents",
   "definition": "Number of relations and number of agents measured per year subject to structural changes."
 },
 {
   "id": "M132",
   "name": "Connectedness",
   "definition": "Number of relations the partner has."
 },
 {
   "id": "M133",
   "name": "Group Stability",
   "definition": "Measure based on the cultural homogeneity of the group considering connectivity and diversity."
 },
 {
   "id": "M134",
   "name": "Outbound Links",
   "definition": "Outbound links from the ecosystem to other ecosystems measured over the years."
 },
 {
   "id": "M135",
   "name": "Ecosystem Connectedness",
   "definition": "Ecosystem connectivity measured by the number of connections."
 },
 {
   "id": "M136",
   "name": "Cluster Participation",
   "definition": "Count of participation in clusters or number of clicks for an individual company."
 },
 {
   "id": "M137",
   "name": "Centrality",
   "definition": "The more central a company is in the ecosystem, the more persistent it is."
 },
 {
   "id": "M138",
   "name": "Market Share",
   "definition": "Market share for each technology measured over multiple consecutive years."
 },
 {
   "id": "M139",
   "name": "Product Market Share",
   "definition": "Market share of products or product groups traded by individual companies."
 },
 {
   "id": "M140",
   "name": "Technology Education Spending",
   "definition": "Total spent on technology-related education within the ecosystem."
 },
 {
   "id": "M141",
   "name": "Costs of Change and Upgrade",
   "definition": "Costs of change and upgrade to keep up with new technologies."
 },
 {
   "id": "M142",
   "name": "Labor Stability",
   "definition": "Measure of labor stability within the ecosystem."
 },
 {
   "id": "M143",
   "name": "Maintenance Costs",
   "definition": "Maintenance costs per product or technology by individual supplier."
 },
 {
   "id": "M144",
   "name": "Total Factor Productivity",
   "definition": "Efficiency of the relationship between quantity of labor and capital employed and value added created."
 },
 {
   "id": "M145",
   "name": "TFP with ROI",
   "definition": "Total factor productivity analysis with return on investment."
 },
 {
   "id": "M146",
   "name": "TFP Over Time",
   "definition": "Total factor productivity over time."
 },
 {
   "id": "M147",
   "name": "TFP with ROI Over Time",
   "definition": "Total factor productivity analysis with ROI over time."
 },
 {
   "id": "M148",
   "name": "Asset Buildup",
   "definition": "Company growth and asset accumulation over time."
 },
 {
   "id": "M149",
   "name": "Network Effectiveness",
   "definition": "Effectiveness of network processes based on relationships between companies."
 },
 {
   "id": "M150",
   "name": "Number of Patents",
   "definition": "Number of patents registered by industry segment related to the total number of relations."
 },
 {
   "id": "M151",
   "name": "Network Resources",
   "definition": "Network resources found in the company's direct network."
 },
 {
   "id": "M152",
   "name": "Variety Scores",
   "definition": "Variety scores comparing Euclidean distances relative to the overall ecosystem average."
 },
 {
   "id": "M153",
   "name": "Market Activity",
   "definition": "Measures of number of markets in which the company operates along with domain overlap."
 },
 {
   "id": "M154",
   "name": "Alliance Network",
   "definition": "Alliances with other manufacturers and their relationship to performance."
 },
 {
   "id": "M155",
   "name": "Partner Variety",
   "definition": "Variety of partners based on customer proximity and novelty of knowledge."
 },
 {
   "id": "M156",
   "name": "Ecosystem Value Creation",
   "definition": "Measures of revenue or profit growth caused by newly introduced technologies."
 },
 {
   "id": "M157",
   "name": "Technology Value",
   "definition": "Value of new technologies expressed in added value or company revenue."
 },
 {
   "id": "M158",
   "name": "Solvency",
   "definition": "Growth of equity over debt representing the value the company creates over time."
 },
 {
   "id": "M159",
   "name": "New Releases per Month",
   "definition": "Number of new extension releases per month."
 },
 {
   "id": "M160",
   "name": "New Developers per Month",
   "definition": "Number of new developers joining the ecosystem per month."
 },
 {
   "id": "M161",
   "name": "New Customers per Month",
   "definition": "Number of new customers adopting the platform per month."
 },
 {
   "id": "M162",
   "name": "Leavers per Month",
   "definition": "Number of customers leaving the platform per month."
 },
 {
   "id": "M163",
   "name": "Distribution of Last Updates",
   "definition": "Distribution of the last updates of extensions over the years."
 },
 {
   "id": "M164",
   "name": "Number of Extensions",
   "definition": "Total number of extensions available in the ecosystem."
 },
 {
   "id": "M165",
   "name": "Market Share",
   "definition": "Market share of the platform."
 },
 {
   "id": "M166",
   "name": "Unique Developers",
   "definition": "Number of unique developers in the ecosystem."
 },
 {
   "id": "M167",
   "name": "Unique Developers by Partner Category",
   "definition": "Distribution of developers by partner category."
 },
 {
   "id": "M168",
   "name": "Certified Extensions",
   "definition": "Number of extensions certified by the platform."
 },
 {
   "id": "M169",
   "name": "Extensions Developed by Partners",
   "definition": "Number of extensions developed by partners."
 },
 {
   "id": "M170",
   "name": "Rated Extensions",
   "definition": "Number of extensions that received ratings."
 },
 {
   "id": "M171",
   "name": "Platform Findability",
   "definition": "Ease of finding the platform through searches."
 },
 {
   "id": "M172",
   "name": "Variety of Categories",
   "definition": "Variety of extension categories available."
 },
 {
   "id": "M173",
   "name": "Average Supported Languages",
   "definition": "Average number of languages supported by extensions."
 },
 {
   "id": "M174",
   "name": "Download Count",
   "definition": "Number of downloads of extensions."
 },
 {
   "id": "M175",
   "name": "Extension Price",
   "definition": "Price of extensions."
 },
 {
   "id": "M176",
   "name": "Popularity Score",
   "definition": "Popularity score based on installations and references."
 },
 {
   "id": "M177",
   "name": "Extension Rating",
   "definition": "Rating received by extensions."
 },
 {
   "id": "M178",
   "name": "Contributors per Extension",
   "definition": "Number of developers who contributed to an extension."
 },
 {
   "id": "M179",
   "name": "Active Developers in Past Year",
   "definition": "Sum of all unique repository owners updated in the last year."
 },
 {
   "id": "M180",
   "name": "Active Developers of Unique Repositories",
   "definition": "Sum of all unique owners of non-fork repositories updated in the last year."
 },
 {
   "id": "M181",
   "name": "Active Developers per Time Segment",
   "definition": "Weekly sum of unique repository owners divided by total developers in the year."
 },
 {
   "id": "M182",
   "name": "Creation Date",
   "definition": "Repository creation date."
 },
 {
   "id": "M183",
   "name": "Multi-platform Repositories",
   "definition": "Count of repositories supporting multiple PaaS."
 },
 {
   "id": "M184",
   "name": "Number of Forks",
   "definition": "Sum of all forks made of repositories."
 },
 {
   "id": "M185",
   "name": "Push Date",
   "definition": "Date of last push/update."
 },
 {
   "id": "M186",
   "name": "Total Number of Followers",
   "definition": "Sum of all followers for each repository of the PaaS."
 },
 {
   "id": "M187",
   "name": "Total Repositories",
   "definition": "Total number of repositories containing the PaaS keyword."
 },
 {
   "id": "M188",
   "name": "Unique Programming Languages",
   "definition": "Total number of unique programming languages used for each PaaS."
 },
 {
   "id": "M189",
   "name": "Unique Repositories",
   "definition": "Total number of original (non-fork) repositories."
 },
 {
   "id": "M190",
   "name": "Update Ratio",
   "definition": "Proportion of repositories updated at least once after creation."
 },
 {
   "id": "M191",
   "name": "Updated Repositories",
   "definition": "Number of repositories updated at least once after creation."
 },
 {
   "id": "M192",
   "name": "Continuity of Use Experience and Use Cases",
   "definition": "Consumers of ecosystem products will gradually evolve in response to new technology introduction rather than being radically transformed. Existing capabilities and tools will be leveraged to perform new operations enable."
 },
 {
   "id": "M193",
   "name": "Delivery of Innovation",
   "definition": "Does the ecosystem effectively deliver new technologies, processes, or ideas to its members? Does it reduce the employment costs of these novelties compared to direct adoption and propagate access broadly throughout the ecosystem in a way that improves the classic productivity of ecosystem members?"
 },
 {
   "id": "M194",
   "name": "Limited Obsolescence",
   "definition": "There is no dramatic abandonment of obsolete capacity in response to a disturbance. Most of the installed base or investment in technology or components finds continuous use after dramatic changes in the ecosystem environment."
 },
 {
   "id": "M195",
   "name": "Persistence of Structure",
   "definition": "Changes in relationships between ecosystem members are contained; generally the ecosystem structure is not affected by external shocks. Most connections between companies or between technologies remain."
 },
 {
   "id": "M196",
   "name": "Predictability",
   "definition": "The change in ecosystem structure is not only contained, it is predictably localized. The location of change in ecosystem structure will be different for different shocks, but a predictable core usually remains unchanged."
 },
 {
   "id": "M197",
   "name": "Productivity Improvement Over Time",
   "definition": "Do ecosystem members and those using their products show increases in productivity measures over time? Are they able to produce the same products or complete the same tasks at progressively lower costs?"
 },
 {
   "id": "M198",
   "name": "Survival Rates",
   "definition": "Ecosystem participants enjoy high survival rates either over time or in relation to comparable ecosystems."
 },
 {
   "id": "M199",
   "name": "Total Factor Productivity",
   "definition": "Leveraging techniques used in traditional economic productivity analysis, ecosystems can be compared by the productivity of their participants in converting production factors into useful work."
 },
 {
   "id": "M200",
   "name": "Value Creation",
   "definition": "The overall value of new options created in the ecosystem."
 },
 {
   "id": "M201",
   "name": "Variety",
   "definition": "The number of new options, technological blocks, categories, products, and/or businesses being created within the ecosystem in a given period of time."
 },
 {
   "id": "M202",
   "name": "Centrality of the Platform",
   "definition": "Measure indicating how central and connected the platform is in terms of modules, support, forums, events, documentation, and support availability."
 },
 {
   "id": "M203",
   "name": "Findability of the Ecosystem",
   "definition": "Analysis of visibility and ease of finding the platform and its modules through Google trends and search results."
 },
 {
   "id": "M204",
   "name": "Growth of the Platform",
   "definition": "Growth of the number of modules and unique developers over time."
 },
 {
   "id": "M205",
   "name": "Identification of the Contributors",
   "definition": "Total number of developers and average number of modules per developer."
 },
 {
   "id": "M206",
   "name": "Level of Contribution per Community User",
   "definition": "Measure of the contribution level of each user in the community through the number of topics and posts in forums."
 },
 {
   "id": "M207",
   "name": "Market Share Analysis",
   "definition": "Analysis of platform market share in percentage terms."
 },
 {
   "id": "M208",
   "name": "Perceived Ecosystem Health",
   "definition": "Stakeholders' perception of ecosystem health through survey."
 },
 {
   "id": "M209",
   "name": "Up-to-dateness of Modules",
   "definition": "Percentage of modules that were updated in a given period."
 },
 {
   "id": "M210",
   "name": "Number of Contributors",
   "definition": "Number of code contributors obtained through versioning logs."
 },
 {
   "id": "M211",
   "name": "Project Code Size",
   "definition": "Size of the project code."
 },
 {
   "id": "M212",
   "name": "Number of Open Problems",
   "definition": "Number of open problem reports."
 },
 {
   "id": "M213",
   "name": "Mailing List",
   "definition": "Activity in discussion lists."
 },
 {
   "id": "M214",
   "name": "Frequency of Contributors",
   "definition": "Frequency of individual contributions obtained through versioning logs."
 },
 {
   "id": "M215",
   "name": "Heterogeneity",
   "definition": "Diversity of community composition measured through email and web address analysis to identify affiliations."
 },
 {
   "id": "M216",
   "name": "Regeneration",
   "definition": "Community's capacity for growth and renewal observed through historical analysis of developers' first and last contributions."
 },
 {
   "id": "M217",
   "name": "Number of Commits per Day",
   "definition": "Number of commits made per day in the community."
 },
 {
   "id": "M218",
   "name": "Files Changed per Day",
   "definition": "Total number of files modified per day."
 },
 {
   "id": "M219",
   "name": "Lines Added per Day",
   "definition": "Total number of lines of code added per day."
 },
 {
   "id": "M220",
   "name": "Lines Removed per Day",
   "definition": "Total number of lines of code removed per day."
 },
 {
   "id": "M221",
   "name": "Average Files Changed per Commit",
   "definition": "Average number of files modified per commit."
 },
 {
   "id": "M222",
   "name": "Average Lines Added per Commit",
   "definition": "Average number of lines of code added per commit."
 },
 {
   "id": "M223",
   "name": "Average Lines Removed per Commit",
   "definition": "Average number of lines of code removed per commit."
 },
 {
   "id": "M224",
   "name": "Number of Commits per Month",
   "definition": "Number of commits per month in the project's source code repository."
 },
 {
   "id": "M225",
   "name": "Number of Commits for Top Committers",
   "definition": "Number of commits made by top committers (those with the highest number of contributions) over time."
 },
 {
   "id": "M226",
   "name": "Proportion of Commits per Affiliation Over Time",
   "definition": "Proportion of commits by affiliation (company/organization) of contributors over time."
 },
 {
   "id": "M227",
   "name": "Total Number of Commits and Contribution by Inter-project Committers",
   "definition": "Total number of commits and contribution by committers participating in both studied projects."
 },
 {
   "id": "M228",
   "name": "Number of Messages in Developer- and User Mailing Lists",
   "definition": "Number of messages in project developers' and users' mailing lists."
 },
 {
   "id": "M229",
   "name": "Activity",
   "definition": "The percentage of users with at least one antivirus product running actively with current signatures."
 },
 {
   "id": "M230",
   "name": "Diversity",
   "definition": "The diversity of the antivirus ecosystem was characterized based on its richness, degree of concentration and dominance. Richness can be defined as the total number of antivirus providers within the ecosystem."
 },
 {
   "id": "M231",
   "name": "Stability",
   "definition": "The percentage of users by status who have a different antivirus status compared to the previous month."
 },
 {
   "id": "M232",
   "name": "Communication and Use Intensity",
   "definition": "If a project has a healthy community, there are indications of a strong relationship between some measures, such as the number of downloads compared to mailing list posts and active developer interaction in (different) mailing lists."
 },
 {
   "id": "M233",
   "name": "Open Issues, Service Delays",
   "definition": "Bugs and problems are listed in the bug tracking system, but fixes are not made in a timely manner."
 },
 {
   "id": "M234",
   "name": "Proportions",
   "definition": "The proportions of community activity, for example: the volume of posts in the discussion list, bug status changes per time interval, updates in SVN."
 },
 {
   "id": "M235",
   "name": "Number of Messages in Developer- and User Mailing Lists",
   "definition": "The number of messages in developers' and users' mailing lists."
 },
 {
   "id": "M236",
   "name": "Percentage of Messages Contributed by the Core Developers for the Developer- and User Mailing Lists",
   "definition": "Percentage of messages contributed by core developers for the developers' and users' mailing lists."
 },
 {
   "id": "M237",
   "name": "Percentage of Messages Contributed by Providers for the Developer- and User Mailing Lists",
   "definition": "Percentage of messages contributed by providers for the developers' and users' mailing lists."
 },
 {
   "id": "M238",
   "name": "Number of Contributors",
   "definition": "Total contributors per project."
 },
 {
   "id": "M239",
   "name": "Package Centrality Trend",
   "definition": "Refers to the variation in importance and influence of a package within a software ecosystem over time."
 },
 {
   "id": "M240",
   "name": "StackOverflow Response Rate",
   "definition": "The response rate measures the ratio between the number of answered questions and the number of unanswered questions in a specific dataset or context."
 },
 {
   "id": "M241",
   "name": "Library Usage",
   "definition": "The number of times a specific library is used by client projects within the Maven software ecosystem."
 },
 {
   "id": "M242",
   "name": "Library Decay",
   "definition": "The decline of the library refers to the decrease in library usage (LU) over time, indicating a decline in popularity or use of a specific library within the Maven software ecosystem."
 },
 {
   "id": "M243",
   "name": "Contributor Relationship",
   "definition": "The relationship between contributors is defined as the total of mutual interactions between two users within a software ecosystem, where an interaction occurs when a user participates in an issue or pull request after another user, establishing a connection between them."
 },
 {
   "id": "M244",
   "name": "Network Strength",
   "definition": "Network strength refers to the overall robustness and connectivity of the social network within a software ecosystem, indicating the level of interactivity and collaboration among contributors."
 },
 {
   "id": "M245",
   "name": "Community Activity",
   "definition": "The level of activity related to open-source software component development in the OSS community."
 },
 {
   "id": "M246",
   "name": "Issue Resolution",
   "definition": "This measure quantifies the effectiveness of problem resolution in a software ecosystem by analyzing the number of issues closed in a specific period."
 },
 {
   "id": "M247",
   "name": "Truck Factor Developers Detachment",
   "definition": "Measures the impact of key developers leaving a software project and the subsequent survival or abandonment of the project."
 },
 {
   "id": "M248",
   "name": "Consumer Satisfaction",
   "definition": "The degree to which customers are satisfied with the products or services provided by the software ecosystem."
 },
 {
   "id": "M249",
   "name": "Maintenance Activity Level",
   "definition": "Metric that quantifies the frequency with which a GitHub project is being maintained, indicating the level of maintenance activity."
 },
 {
   "id": "M250",
   "name": "Inactive Projects",
   "definition": "Projects that have stopped evolving and become inactive or abandoned due to lack of developer activity and/or low user interest."
 },
 {
   "id": "M251",
   "name": "Maintainability Index",
   "definition": "A metric used to evaluate the ease of maintenance and evolution of a software project over time, indicating the quality and sustainability of the project."
 },
 {
   "id": "M252",
   "name": "Competitiveness",
   "definition": "When the ecosystem niche has a market leader, a smaller competitor has lower chances of survival."
 },
 {
   "id": "M253",
   "name": "Community Fragmentation",
   "definition": "An indicator that measures the degree of division or dispersion within a software development community, resulting in lower cohesion and collaboration among members."
 },
 {
   "id": "M254",
   "name": "Usage Decline",
   "definition": "Indicator that measures the reduction in frequency or amount of use of a particular technology, programming language, framework, or software over time."
 },
 {
   "id": "M255",
   "name": "Usage Decline",
   "definition": "Measures the reduction in user base, update frequency, technical support, and active community of a specific software over time."
 },
 {
   "id": "M256",
   "name": "Digital Independence",
   "definition": "Ability of a company or organization to customize, adapt, and evolve its software according to specific and changing business needs, without relying on standardized solutions or expensive technical support."
 },
 {
   "id": "M257",
   "name": "Security Indicator",
   "definition": "Security vulnerabilities caused by lack of security updates in static ecosystems."
 },
 {
   "id": "M258",
   "name": "Instability Indicator",
   "definition": "Libraries can become unstable or incompatible with the rest of the codebase, causing bugs or other problems."
 },
 {
   "id": "M259",
   "name": "Abandoned Software Reuse",
   "definition": "Indicator that measures the ability and success of revitalizing software that was considered obsolete or abandoned, through open-source initiatives and community collaboration."
 },
 {
   "id": "M260",
   "name": "Developer Community Sustainability",
   "definition": "Measures the health and robustness of the developer community contributing to an open-source software project. It evaluates the level of active participation, diversity of contributors, regularity of updates and security patches, and the community's ability to maintain and evolve the software over time."
 },
 {
   "id": "M261",
   "name": "Long-term Software Sustainability",
   "definition": "Capacity of software to remain functional, secure, and relevant over a period of 30 years or more, considering the economic, legal, policy, and technical challenges involved in maintenance."
 },
 {
   "id": "M262",
   "name": "Incompatibility",
   "definition": "Inability of software or hardware components to work together due to differences in specifications, interfaces, or communication protocols."
 },
 {
   "id": "M263",
   "name": "Operational Costs",
   "definition": "Expenses of ongoing operation of a software or hardware system. This includes expenses with technical support, regular maintenance, software updates, energy costs, server hosting, staff, among others."
 },
 {
   "id": "M264",
   "name": "Developer Evasion Rate",
   "definition": "Rate of developer turnover in a software team or software ecosystem in a given period of time."
 }
];

export default allMetrics;
