
"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  slug: string;
  colorScheme?: "light-green" | "dark" | "light-gray" | "green";
}

export default function ServiceCard({ 
  title, 
  description, 
  icon, 
  slug,
  colorScheme = "light-gray" 
}: ServiceCardProps) {
  // Color schemes based on the design
  const colorStyles = {
    "light-green": "bg-lime-300",
    "dark": "bg-gray-900 text-white",
    "light-gray": "bg-gray-100",
    "green": "bg-lime-300",
  };

  // Title background styles
  const titleStyles = {
    "light-green": "bg-lime-300",
    "dark": "bg-gray-900 text-white",
    "light-gray": "bg-lime-300",
    "green": "bg-lime-300",
  };

  // Button styles
  const buttonStyles = {
    "light-green": "bg-gray-900 text-white",
    "dark": "bg-gray-900 text-white border border-white",
    "light-gray": "bg-gray-900 text-white",
    "green": "bg-gray-900 text-white",
  };

  return (
    <motion.div 
      className={`rounded-lg overflow-hidden shadow-md ${colorStyles[colorScheme]}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="p-6  h-full">
        <div className="mb-">
          <span className={`inline-block text-2xl px-4 py- rounded-md font-bold ${titleStyles[colorScheme]}`}>
            {title}
          </span>
        </div>
        
        <div className="">

          {icon && (
            <div className="mb-6 flex items-center gap-x-4">
              <p className="md:lg:xl:text-xl md:block hidden ">{description}</p>
              <Image 
                src={icon} 
                alt={`${title} icon`} 
                width={250} 
                height={150} 
                className="object-contain md:lg:xl:py-0 py-10" 
              />
            </div>
          )}
        </div>
        
        <motion.div 
          className="mt-auto"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          <Link className="flex text-2xl items-center gap-x-4 " href={`/services/${slug}`}>
            <motion.button 
              className={`flex items-center justify-center w-10 h-10 rounded-full ${buttonStyles[colorScheme]}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
          
            </motion.button>
                Learn more
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}