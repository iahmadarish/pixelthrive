"use client";
import Hero from "@/components/hero"
import ServicesList from "@/components/services-list"
import WorkProgress from "@/components/work-progress"
import ProjectShowcase from "@/components/project-showcase"
import { motion } from "framer-motion";
import ProposalQuote from "@/components/proposalquote";
import homeimage from "@/public/gradient.webp"


export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero
        title="CREATIVE AGENCY"
        subtitle="We create stunning digital experiences that drive results"
        buttonText="Get Started"
        buttonLink="/services"
        image={homeimage}
      />

    <section className="py-26 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div 
          className="inline-block px-6 py-2 bg-lime-300 rounded-md mb-6"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 600, damping: 20 }}
        >
          <h2 className="text-2xl font-bold">Services</h2>
        </motion.div>
        
        <p className="text-lg mb-12 max-w-3xl">
          At our digital marketing agency, we offer a range of services to
          help businesses grow and succeed online. These services include:
        </p>
      </motion.div>
      
      <ServicesList showAll={false} />
      
      <motion.div 
        className="mt-12 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <motion.button
          className="px-8 py-3 bg-lime-300 rounded-md font-bold hover:bg-lime-400 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View All Services
        </motion.button>
      </motion.div>
    </section>

{/* business proposal section  */}

      <ProposalQuote/>

      <section className="py-16 bg-">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Work Process</h2>
          <WorkProgress />
        </div>
      </section>

      <section className="mt-16">
        <ProjectShowcase />
      </section>
    </div>
  )
}
