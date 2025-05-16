import { notFound } from "next/navigation";
import Hero from "@/components/hero";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs(); 
  return slugs.map((slug: string) => ({ slug }));
}

export default async function ServiceDetailsPage({ params }: PageProps) {
  const service = await getServiceBySlug(params.slug); 

  if (!service) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4">
      <Hero
        title={service.title}
        subtitle={service.subtitle}
        buttonText="Get a Quote"
        buttonLink="/contact"
        image
      />

      <section className="py-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Overview</h2>
            <div className="prose max-w-none">
              <p>{service.description}</p>
            </div>

            <h2 className="text-2xl font-bold mt-12 mb-6">What We Deliver</h2>
            <ul className="space-y-4">
              {service.deliverables.map((item: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 text-green-500">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Our Process</h3>
            <ol className="space-y-4">
              {service.process.map((step: string, index: number) => (
                <li key={index} className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-800 font-bold mr-3">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
