"use client";

import { motion } from "framer-motion";
import ServiceCard from "./service-card";
import { getAllServices } from "@/lib/services";

interface ServicesListProps {
  showAll: boolean;
}

export default function ServicesList({ showAll }: ServicesListProps) {
  const services = getAllServices();
  const displayServices = showAll ? services : services.slice(0, 6);
  
  // Color schemes to match the design
const colorSchemes: ("green" | "light-green" | "dark" | "light-gray")[] = [
  "light-gray",  // Web Design
  "light-green", // SEO
  "dark",        // Video Editing
  "light-gray",  // Graphics Design
  "light-green", // Content Creation
  "dark"         // Mobile App Development
];

  // Container animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className="grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 gap-x-8 gap-y-20"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
    >
      {displayServices.map((service, index) => (
        <ServiceCard
          key={service.slug}
          title={service.title}
          description={service.shortDescription}
          icon={service.icon}
          slug={service.slug}
          colorScheme={colorSchemes[index % colorSchemes.length]}
        />
      ))}
    </motion.div>
  );
}