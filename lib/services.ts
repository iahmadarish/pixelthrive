import react from "@/public/react.png"
import graphics from "@/public/graphics.png"
import threed from "@/public/threed.webp"
import social from "@/public/social.png"
import uix from "@/public/uix.webp"
import app from "@/public/app.png"

export interface Service {
  title: string
  slug: string
  icon: any
  shortDescription: string
  subtitle: string
  description: string
  deliverables: string[]
  process: string[]
}

const services: Service[] = [
  {
    title: "Website Design & Development",
    slug: "web-design-development",
    icon: react,
    shortDescription: "Custom websites that are responsive, fast, and optimized for conversions.Engaging video content that tells your story and captivates your audience.",
    subtitle: "Stunning websites that drive results",
    description:
      "We create custom websites that not only look great but also perform exceptionally well. Our websites are responsive, fast-loading, and designed with user experience and conversion optimization in mind. Whether you need a simple landing page or a complex e-commerce platform, we have the expertise to deliver.",
    deliverables: [
      "Custom website design tailored to your brand",
      "Responsive layout that works on all devices",
      "SEO-friendly structure and content",
      "Integration with CMS for easy content management",
      "E-commerce functionality (if required)",
      "Performance optimization for fast loading times",
      "Analytics setup to track website performance",
    ],
    process: [
      "Requirements gathering and planning",
      "Wireframing and prototyping",
      "Design approval",
      "Development and coding",
      "Testing and quality assurance",
      "Launch and deployment",
    ],
  },
  {
    title: "Graphics Design",
    slug: "graphics-design",
    icon: graphics,
    shortDescription: "Eye-catching visual designs that strengthen your brand identity. Engaging video content that tells your story and captivates your audience.",
    subtitle: "Visual designs that capture attention",
    description:
      "Our graphic design services help you communicate your message effectively through compelling visuals. From logos and brand identity to marketing materials and social media graphics, we create designs that resonate with your target audience and strengthen your brand presence.",
    deliverables: [
      "Logo design and brand identity",
      "Marketing materials (brochures, flyers, posters)",
      "Social media graphics and templates",
      "Packaging design",
      "Infographics and data visualization",
      "Print-ready files in various formats",
      "Brand style guide",
    ],
    process: [
      "Brand discovery and research",
      "Concept development",
      "Initial design presentations",
      "Revisions and refinement",
      "Finalization and delivery",
      "File preparation for various media",
    ],
  },
  {
    title: "3D/2D Video Creation",
    slug: "video-creation",
    icon: threed,
    shortDescription: "Engaging video content that tells your story and captivates your audience. Engaging video content that tells your story and captivates your audience.",
    subtitle: "Captivating videos that tell your story",
    description:
      "Video is one of the most powerful mediums for storytelling and engagement. Our video creation services include both 2D and 3D animations, motion graphics, explainer videos, product demonstrations, and more. We help you communicate complex ideas in an engaging and memorable way.",
    deliverables: [
      "2D and 3D animations",
      "Motion graphics and visual effects",
      "Explainer videos and tutorials",
      "Product demonstrations",
      "Corporate videos and presentations",
      "Social media video content",
      "Video editing and post-production",
    ],
    process: [
      "Script development and storyboarding",
      "Style frames and concept art",
      "Animation and production",
      "Sound design and voice-over",
      "Revisions and refinement",
      "Final delivery in required formats",
    ],
  },
  {
    title: "Social Marketing",
    slug: "social-marketing",
    icon: social,
    shortDescription: "Strategic social media campaigns that build community and drive engagement. Engaging video content that tells your story and captivates your audience.",
    subtitle: "Social strategies that connect and convert",
    description:
      "Our social marketing services help you build a strong presence on social media platforms where your audience spends their time. We develop and execute strategies that increase brand awareness, engage your community, and drive conversions through organic content and paid advertising.",
    deliverables: [
      "Social media strategy development",
      "Content calendar and planning",
      "Original content creation",
      "Community management and engagement",
      "Paid social media advertising",
      "Performance tracking and analytics",
      "Monthly reporting and strategy adjustments",
    ],
    process: [
      "Social media audit and competitor analysis",
      "Strategy development",
      "Content planning and creation",
      "Campaign setup and execution",
      "Community management",
      "Analysis and optimization",
    ],
  },
  {
    title: "UI/UX Design",
    slug: "ui-ux-design",
    icon: uix,
    shortDescription: "User-centered design that creates intuitive and enjoyable digital experiences. Engaging video content that tells your story and captivates your audience.",
    subtitle: "Intuitive interfaces that users love",
    description:
      "Our UI/UX design services focus on creating digital experiences that are both visually appealing and easy to use. We follow a user-centered design approach, conducting research and testing to ensure that your digital products meet user needs and business objectives.",
    deliverables: [
      "User research and persona development",
      "Information architecture and user flows",
      "Wireframing and prototyping",
      "Visual design and UI components",
      "Interactive prototypes for testing",
      "Design systems and style guides",
      "Usability testing and iteration",
    ],
    process: [
      "User research and discovery",
      "Information architecture",
      "Wireframing and low-fidelity prototypes",
      "Visual design and UI development",
      "Interactive prototyping",
      "Usability testing and refinement",
    ],
  },
  {
    title: "App Development",
    slug: "app-development",
    icon: app,
    shortDescription: "Custom mobile applications that extend your digital presence to all devices. Engaging video content that tells your story and captivates your audience.",
    subtitle: "Mobile solutions that empower your business",
    description:
      "We develop custom mobile applications for iOS and Android platforms that help you reach your audience wherever they are. Our app development process focuses on creating intuitive, high-performance applications that solve real problems for your users and add value to your business.",
    deliverables: [
      "Native iOS and Android applications",
      "Cross-platform applications",
      "Progressive Web Apps (PWAs)",
      "Backend development and API integration",
      "App Store optimization and submission",
      "Ongoing maintenance and updates",
      "Analytics integration and performance monitoring",
    ],
    process: [
      "Requirements gathering and planning",
      "UI/UX design for mobile",
      "Development and coding",
      "Testing across devices",
      "Beta testing and feedback collection",
      "App store submission and launch",
    ],
  },
]

export function getAllServices(): Service[] {
  return services
}

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug)
}
