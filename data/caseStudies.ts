// ---------------------------------------------------------------------------
// ROYAL CYBER — OPTIMIZELY CUSTOMER CASE STUDIES
// ---------------------------------------------------------------------------
// Portfolio of Royal Cyber delivery outcomes on the Optimizely platform. The
// /casestudy page is a dashboard grid of summary cards; each card links to a
// dedicated detail page at /casestudy/<slug>. Content is written in business
// language and sourced from the Optimizely Practice case-study deck.
// Keep the interface shape stable so the pages compile unchanged.
// ---------------------------------------------------------------------------

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  n: string;
  slug: string;
  logo?: string;
  sandboxUrl?: string;
  productionUrl?: string;
  customer: string;
  industry: string;
  location: string;
  product: string;
  capability: string;
  journey: string;
  summary: string;
  about: string;
  challenge: string;
  objectives: string[];
  solution: string[];
  outcomes: string[];
  highlights: string[];
  metrics: CaseMetric[];
  services: string[];
}

export interface CaseStudiesData {
  org: string;
  title: string;
  heading: string;
  intro: string;
  generated: string;
  items: CaseStudy[];
}

export const caseStudies: CaseStudiesData = {
  org: "Royal Cyber",
  title: "Optimizely Customer Case Studies",
  heading: "Proven Optimizely outcomes across healthcare, commerce and experimentation",
  intro:
    "A portfolio of Royal Cyber engagements delivered on the Optimizely platform — spanning content management, B2B commerce and experimentation. Each case maps the business objective to the solution delivered and the value created.",
  generated: "July 13, 2026",
  items: [
    {
      n: "01",
      slug: "novant-health",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpQcBY5rXuK9JhlCcEN7_YvzuT_J7byERg3iA9INFIwuvbcDrjRgGqYMHj&s=10",
      sandboxUrl: "",
      productionUrl: "https://www.novanthealth.org/",
      customer: "Novant Health",
      industry: "Healthcare",
      location: "Winston-Salem, North Carolina, USA",
      product: "Optimizely CMS",
      capability: "Digital Experience",
      journey: "Digital Experience Journey",
      summary:
        "Modernizing a patient-first digital experience on Optimizely CMS for a multi-region health system.",
      about:
        "Novant Health is an integrated healthcare system headquartered in Winston-Salem, North Carolina, delivering care across hospitals and outpatient facilities in multiple states. Serving millions of patients annually, the organization prioritizes patient-centered digital engagement and seamless access to healthcare information.",
      challenge:
        "Novant Health needed to modernize a fragmented digital presence into a scalable, patient-friendly content platform — streamlining publishing across care units, service lines and regional teams, while making critical patient information faster to update and easier to find.",
      objectives: [
        "Modernize the digital experience on Optimizely CMS to deliver a scalable, patient-friendly content platform.",
        "Streamline content creation and publishing across multiple care units, service lines and regional teams.",
        "Enable faster updates to critical patient information — locations, providers, medical services and care guidance.",
        "Improve findability and navigation for patients seeking appointments, providers and healthcare resources.",
        "Establish a flexible architecture to support future personalization, marketing campaigns and multi-site expansion.",
      ],
      solution: [
        "Implemented Optimizely CMS with a modular content architecture, enabling teams to assemble pages quickly from reusable components.",
        "Designed a centralized content-governance model with controlled workflows and approvals across departments.",
        "Improved site performance and search through optimized page layouts, taxonomy structures and integrated provider/location search.",
        "Built a scalable foundation for future personalization, analytics and multi-region rollout without re-architecting the platform.",
        "Empowered marketing and clinical teams with training, documentation and self-service tools to reduce IT dependency and accelerate content velocity.",
      ],
      outcomes: [
        "A scalable, component-based platform that shortens time-to-publish across the network.",
        "Faster, more reliable updates to patient-critical information.",
        "Improved patient findability and navigation to providers, locations and services.",
        "A future-ready foundation for personalization and multi-site growth.",
      ],
      highlights: [
        "Scalable content platform",
        "Faster patient updates",
        "Improved findability",
      ],
      metrics: [],
      services: [
        "Optimizely CMS",
        "Modular content architecture",
        "Content governance & workflows",
        "Search & taxonomy",
      ],
    },
    {
      n: "02",
      slug: "white-cap",
      logo: "https://www.torque-expo.com/sites/stagtorqueexpo/files/styles/media_image/public/wp-content/uploads/2021/08/whitecap-1024x768-1-2.png?itok=psacARap",
      sandboxUrl: "https://dev-omni.whitecap.com/en-us",
      productionUrl: "https://www.whitecap.com/",
      customer: "White Cap",
      industry: "B2B Distribution — Construction Supplies",
      location: "Georgia, USA",
      product: "Optimizely B2B Commerce Cloud",
      capability: "B2B Commerce",
      journey: "Builder Commerce Journey",
      summary:
        "A unified, multi-brand B2B commerce experience with punchout procurement and faster time-to-market.",
      about:
        "Based in Georgia, USA, White Cap is one of the nation's largest suppliers of power tools and specialty materials to professional concrete contractors.",
      challenge:
        "White Cap set out to launch commerce storefronts on Optimizely B2B Commerce Cloud that share layouts across brands, connect directly to buyers' procurement systems via punchout, and manage both B2B and B2C efficiently within a single, unified checkout.",
      objectives: [
        "Implement commerce storefronts on Optimizely B2B Commerce Cloud with shared layouts and per-brand branding.",
        "Implement a punchout facility to connect the seller system with buyers' procurement platforms via Optimizely B2B.",
        "Enhance customer service with rich pre-purchase and post-purchase information online.",
        "Support both static and dynamic content and manage B2B and B2C efficiently.",
        "Deliver a seamless, end-to-end builder experience within a unified checkout process.",
      ],
      solution: [
        "Adopted a build-versus-buy strategy on Optimizely B2B Commerce to flexibly adapt, integrate and scale digital commerce.",
        "Leveraged a cloud-based model that automates upgrades and boosts performance, reducing reliance on internal IT teams.",
        "Accelerated product-data integration between PIM and eCommerce using the WIS messaging platform.",
        "Adopted standardized, out-of-the-box components to significantly accelerate time-to-market across multiple brand storefronts.",
        "Implemented a configurable punchout facility to seamlessly integrate seller and buyer procurement platforms.",
      ],
      outcomes: [
        "Faster launch of multiple branded storefronts from a shared foundation.",
        "Direct, low-friction procurement through punchout integration.",
        "Reduced IT overhead via cloud automation and standardized components.",
        "Streamlined PIM-to-commerce product-data flow.",
      ],
      highlights: [
        "Multi-brand storefronts",
        "Punchout procurement",
        "Faster time-to-market",
      ],
      metrics: [],
      services: [
        "Optimizely B2B Commerce Cloud",
        "Punchout integration",
        "PIM integration (WIS)",
        "Out-of-the-box components",
      ],
    },
    {
      n: "03",
      slug: "je-dunn-construction",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLV5oiBG-3PhdVo0RoTTuS0AF2ZqHoDPAbpAeE6h8yHw&s",
      sandboxUrl: "https://jedunn.commerce.insitesandbox.com/",
      productionUrl: "https://shop.bluehatrentals.com/",
      customer: "JE Dunn Construction",
      industry: "Construction — General Contracting",
      location: "26 offices across the United States",
      product: "Optimizely Commerce",
      capability: "Commerce + Data & AI",
      journey: "Commerce Journey",
      summary:
        "AI-assisted product data and Power BI data-quality reporting on a modern commerce platform.",
      about:
        "Founded in 1924, JE Dunn Construction is the eighth-largest domestic general building contractor in the United States, operating from offices in 26 locations.",
      challenge:
        "JE Dunn needed to stand up commerce with shared layouts and distinct branding, clean up and automate product and category data, and apply AI to data generation — while managing B2B and B2C efficiently and delivering a seamless, unified experience.",
      objectives: [
        "Implement a commerce site on Optimizely with shared layouts and per-brand branding.",
        "Clean up product data and automate product and category data import.",
        "Apply AI to product and category data generation.",
        "Support static and dynamic content and manage B2B and B2C efficiently.",
        "Deliver a seamless, end-to-end experience within a unified process.",
      ],
      solution: [
        "Delivered a 9-touchpoint review spanning UI/UX and catalog clean-up.",
        "Leveraged a cloud-based approach that automates upgrades and boosts performance, reducing reliance on internal IT teams.",
        "Built a Power BI dashboard to track product and category data completeness.",
        "Adopted standardized, out-of-the-box components to accelerate time-to-market across brands.",
        "Generated cross-sell product carousels based on order history.",
      ],
      outcomes: [
        "Cleaner, more complete catalog data with automated import.",
        "Clear data-completeness visibility through Power BI reporting.",
        "Faster multi-brand rollout with standardized components.",
        "Higher basket value through order-history-driven cross-sell.",
      ],
      highlights: [
        "AI-assisted catalog data",
        "Power BI data quality",
        "Order-based cross-sell",
      ],
      metrics: [
        { value: "9", label: "Touchpoint UX & catalog review" },
      ],
      services: [
        "Optimizely Commerce",
        "AI data generation",
        "Power BI reporting",
        "Catalog automation",
      ],
    },
    {
      n: "04",
      slug: "cornerstone-brands",
      logo: "https://images.seeklogo.com/logo-png/45/1/cornerstone-building-brands-logo-png_seeklogo-452183.png",
      sandboxUrl: "",
      productionUrl: "https://www.cornerstonebuildingbrands.com/",
      customer: "Cornerstone Building Brands",
      industry: "Building Products — Manufacturing",
      location: "North America",
      product: "Optimizely CMS & B2B Commerce",
      capability: "Commerce + CMS Forms",
      journey: "Commerce Journey",
      summary:
        "A guided, multi-step Build Quote Assistant that simplifies complex quoting for buyers.",
      about:
        "Cornerstone Building Brands is a premier exterior building solutions provider committed to creating value for customers and communities. With an unrelenting customer focus and a strong emphasis on quality and performance, its products and solutions serve both the residential and commercial markets across North America.",
      challenge:
        "Cornerstone's quote creation was limited to free-text field entry, making it difficult for buyers to visualize their selections and product features. The goal was a commerce experience with shared layouts and distinct branding, plus a guided quoting journey that manages B2B and B2C efficiently.",
      objectives: [
        "Implement a commerce site on Optimizely B2B Commerce Cloud with shared layouts and per-brand branding.",
        "Replace limited free-text quote entry with a guided experience that helps users visualize selections and product features.",
        "Support static and dynamic content and manage B2B and B2C efficiently.",
        "Deliver a seamless, end-to-end experience within a unified process.",
      ],
      solution: [
        "Used Optimizely CMS to create a form with multiple steps in the Build Quote Assistant.",
        "Gave CMS editors the flexibility to add or remove information at each step of the form.",
        "Supported varied input types — images, text fields and dropdowns with selectable options — to guide the end user.",
      ],
      outcomes: [
        "A guided, visual quoting journey that reduces buyer friction.",
        "Editor-controlled, configurable form steps without developer involvement.",
        "Richer product visualization during selection.",
      ],
      highlights: [
        "Guided Build Quote Assistant",
        "Editor-configurable steps",
        "Visual product selection",
      ],
      metrics: [],
      services: [
        "Optimizely CMS",
        "B2B Commerce Cloud",
        "Multi-step forms",
      ],
    },
    {
      n: "05",
      slug: "rent-a-center",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-UJv_bB1-d8qCp2uc8xRiJY0uygoNRd35Iy0BEj1Nbg&s",
      sandboxUrl: "",
      productionUrl: "https://www.rentacenter.com/en-us",
      customer: "Rent-A-Center",
      industry: "Retail — Rent-to-Own",
      location: "United States",
      product: "Optimizely Web Experimentation",
      capability: "Experimentation & CRO",
      journey: "A/B Testing Journey",
      summary:
        "Measurable conversion uplift on the product detail page through disciplined A/B testing.",
      about:
        "Rent-A-Center (RAC) is one of the largest rent-to-own companies in the United States, offering furniture, appliances, electronics and computers through flexible, no-credit-needed payment options across thousands of retail locations and online.",
      challenge:
        "RAC wanted to improve engagement and conversion on the product detail page by removing friction in the customer journey and increasing click-through on the primary call-to-action — driving more product web orders, approval web leads and reservation conversions.",
      objectives: [
        "Improve user engagement and conversion on the product detail page by identifying friction points in the customer journey.",
        "Increase click-through rate on the primary CTA to drive product web orders, approval web leads and reservation conversions.",
        "Validate the hypothesis that a simpler UI layout with a more prominent CTA would reduce friction and improve measurable conversions.",
      ],
      solution: [
        "Designed and executed an end-to-end A/B test in Optimizely — two variants against the original control over a two-week period, with a 50/50 traffic split across 215,000+ visitors.",
        "Variation #1 featured a simplified UI layout with clearer, more prominent CTA placement — delivering +2.7% product web orders, +4.3% FOC conversion and +1.7% reservation conversion.",
        "Variation #2 tested an alternate design approach, achieving +0.63% FOC conversion and +2.18% reservation conversion.",
        "Rolled the winning variant (Variation #1) out to all users, directly contributing to higher revenue, improved user experience and measurable conversion uplift across all key metrics.",
      ],
      outcomes: [
        "A data-validated design decision rolled out to 100% of users.",
        "Measurable conversion uplift across orders, approvals and reservations.",
        "Reduced product-page friction and stronger CTA performance.",
        "Higher revenue contribution from the winning variant.",
      ],
      highlights: [
        "+2.7% product web orders",
        "+4.3% FOC conversion",
        "215K+ visitors tested",
      ],
      metrics: [
        { value: "+2.7%", label: "Product web orders" },
        { value: "+4.3%", label: "FOC conversion" },
        { value: "+1.7%", label: "Reservation conversion" },
        { value: "215K+", label: "Visitors tested" },
      ],
      services: [
        "Optimizely Web Experimentation",
        "A/B testing",
        "Conversion rate optimization",
      ],
    },
  ],
};
