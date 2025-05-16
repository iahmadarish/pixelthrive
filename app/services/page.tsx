import Hero from "@/components/hero"
import ServicesList from "@/components/services-list"

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4">
      <Hero
        title="Our Services"
        subtitle="Comprehensive digital solutions for your business needs"
        buttonText="Contact Us"
        buttonLink="/contact"
      />

      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
        <ServicesList showAll={true} />
      </section>
    </div>
  )
}
