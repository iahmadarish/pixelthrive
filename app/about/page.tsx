import Hero from "@/components/hero"
import Image from "next/image"
import teamimage from "@/public/team.png"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4">
      <Hero
        title="About PIXELTHRIVE"
        subtitle="Crafting digital excellence since 2020"
        buttonText="Our Services"
        buttonLink="/services"
        image={teamimage}
      />

      <section className="py-16 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              PIXELTHRIVE was founded with a simple mission: to help businesses thrive in the digital world through
              creative and effective solutions.
            </p>
            <p className="text-gray-700 mb-4">
              Our team of experts combines AI with creative vision to deliver outstanding results for
              our clients across various industries.
            </p>
            <p className="text-gray-700">
              We believe in building long-term relationships with our clients, understanding their unique needs, and
              delivering solutions that exceed expectations.
            </p>
          </div>
          <div className="relative h-80 w-full">
            <Image
              src={teamimage}
              alt="PIXELTHRIVE Team"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                We constantly explore new technologies and creative approaches to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-700">
                We are committed to excellence in everything we do, ensuring the highest quality in all our
                deliverables.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Collaboration</h3>
              <p className="text-gray-700">
                We work closely with our clients, fostering transparent communication and collaborative partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
