import image from "@/public/Rectangle 14.png"
import image2 from "@/public/Rectangle 17.png"
import image3 from "@/public/Rectangle 20.png"
import image4 from "@/public/Rectangle 21.png"
import image5 from "@/public/Rectangle 22.png"

export interface Project {
  title: string
  slug: string
  category: string
  image: any
  client: string
  description: string
  technologies: string[]
  challenge: string
  solution: string
  results: string[]
  externalLink?: string
}

const projects: Project[] = [
  {
    title: "Green House Gardening",
    slug: "green-house-gardening",
    category: "Design",
    image: image,
    client: "Green House",
    description: "An illustrated website for a gardening service with interactive plant care guides.",
    technologies: ["Figma", "Illustrator", "React"],
    challenge: "Creating a playful yet informative design that appeals to both casual and serious gardeners.",
    solution: "We developed a colorful illustrated design with intuitive navigation and interactive elements.",
    results: ["50% increase in user engagement", "30% increase in service inquiries"],
    externalLink: "https://example.com/gardening",
  },
  {
    title: "Future Construction",
    slug: "future-construction",
    category: "Development",
    image: image2,
    client: "BuildTech Inc",
    description: "A futuristic website for a construction technology company showcasing their innovations.",
    technologies: ["Three.js", "Next.js", "GSAP"],
    challenge: "Presenting complex construction technology in an engaging, futuristic way.",
    solution: "We created an immersive 3D experience with interactive models of their construction robots.",
    results: ["200% increase in time spent on site", "Featured in 3 industry publications"],
    externalLink: "https://example.com/construction",
  },
  {
    title: "Global.io Dashboard",
    slug: "global-io-dashboard",
    category: "Development",
    image: image3,
    client: "Global Logistics",
    description: "A comprehensive logistics dashboard for tracking shipments and fleet management.",
    technologies: ["React", "D3.js", "Node.js"],
    challenge: "Visualizing complex logistics data in a user-friendly interface.",
    solution: "We designed an intuitive dashboard with real-time updates and interactive maps.",
    results: ["40% reduction in response time", "65% improvement in logistics efficiency"],
    externalLink: "https://example.com/dashboard",
  },
  {
    title: "Analytics Platform",
    slug: "analytics-platform",
    category: "Digital Marketing",
    image: image4,
    client: "DataViz Corp",
    description: "A comprehensive analytics platform for marketing performance tracking.",
    technologies: ["Vue.js", "Chart.js", "Firebase"],
    challenge: "Creating a visually appealing yet data-dense interface for marketing analytics.",
    solution: "We developed a customizable dashboard with intuitive data visualization components.",
    results: ["85% user satisfaction rate", "Reduced reporting time by 60%"],
    externalLink: "https://example.com/analytics",
  },
  {
    title: "Lifestyle Magazine",
    slug: "lifestyle-magazine",
    category: "Design",
    image: image5,
    client: "Modern Living",
    description: "A digital magazine focusing on fashion, lifestyle, and accessibility.",
    technologies: ["InDesign", "Photoshop", "WordPress"],
    challenge: "Creating a sophisticated digital magazine experience that works across all devices.",
    solution: "We designed a clean, typography-focused layout with seamless article transitions.",
    results: ["25K subscribers in first month", "13K social shares per article"],
    externalLink: "https://example.com/lifestyle",
  },
  {
    title: "E-commerce Platform Redesign",
    slug: "ecommerce-redesign",
    category: "Development",
    image: image,
    client: "Fashion Retailer",
    description: "Complete redesign and development of an e-commerce platform for a fashion retailer.",
    technologies: ["Next.js", "Tailwind CSS", "Shopify API"],
    challenge: "The client's existing e-commerce site was outdated and not optimized for mobile devices.",
    solution: "We redesigned the entire shopping experience with a focus on speed and mobile responsiveness.",
    results: ["40% increase in conversion rate", "65% reduction in page load time"],
    externalLink: "https://example.com/ecommerce",
  },
  {
    title: "SEO Optimization Campaign",
    slug: "seo-campaign",
    category: "SEO",
    image: image2,
    client: "Tech Startup",
    description: "Comprehensive SEO strategy to improve organic traffic and search rankings.",
    technologies: ["Google Analytics", "SEMrush", "Ahrefs"],
    challenge: "Improving search visibility in a highly competitive tech niche.",
    solution: "We implemented a data-driven SEO strategy focusing on technical optimization and content.",
    results: ["150% increase in organic traffic", "First page rankings for 20+ target keywords"],
    externalLink: "https://example.com/seo",
  },
]

export function getAllProjects(): Project[] {
  return projects
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug)
}
