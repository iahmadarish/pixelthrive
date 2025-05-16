"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { getAllProjects, type Project } from "@/lib/projects"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ProjectShowcase() {
  const allProjects = getAllProjects()
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects)
  const [activeCategory, setActiveCategory] = useState<string>("all")

  // Extract unique categories
  const categories = ["all", ...Array.from(new Set(allProjects.map((project) => project.category)))]

  const filterProjects = (category: string) => {
    setActiveCategory(category)
    if (category === "all") {
      setFilteredProjects(allProjects)
    } else {
      setFilteredProjects(allProjects.filter((project) => project.category === category))
    }
  }

  // Set "See More" card as the last item
  const projectsWithSeeMore = [...filteredProjects]
  if (filteredProjects.length > 0) {
    // Only add "See More" if we have projects
    projectsWithSeeMore.splice(5, 0, {
      title: "See Our More Projects",
      slug: "see-more",
      category: "more",
      image: "/images/see-more.jpg",
      client: "",
      description: "Lorem ipsum dolor sit amet consectetur. Mol estie duis enim id nunc tempor feu a.",
      technologies: [],
      challenge: "",
      solution: "",
      results: [],
      externalLink: "/projects",
    })
  }

  return (
    <div className="max-w-7xl py-32 mx-auto px-4">
      <div className="flex flex-col mb-10">
        <motion.h2
          className="text-4xl lg:xl:md:text-7xl  font-bold mb-8 flex items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-transparent bg-clip-text bg-linear-to-r from-[#01021d] to-[#0b0f80] leading-tight tracking-wider ">
          BEST PROJECT
          </p>
        </motion.h2>

        <motion.div
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => filterProjects(category)}
              className={`px-4 py-2 rounded-full border ${
                activeCategory === category
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-300 hover:border-gray-500"
              } transition-all duration-300`}
            >
              {category === "all" ? "All" : category}
            </button>
          ))}
        </motion.div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {projectsWithSeeMore.map((project, index) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden ${project.slug === "see-more" ? "bg-black text-white flex flex-col justify-center p-8" : ""}`}
            >
              {project.slug === "see-more" ? (
                <Link href="/" className="h-full w-full">
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-medium mb-4">
                      See Our
                      <br />
                      More Projects
                    </h3>
                    <p className="text-gray-400 mb-8">{project.description}</p>
                    <div className="flex justify-end">
                      <ArrowRight size={32} className="text-white" />
                    </div>
                  </div>
                </Link>
              ) : (
                <Link
                  href={project.externalLink || `/projects/${project.slug}`}
                  target={project.externalLink ? "_blank" : "_self"}
                  className="block h-full w-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </Link>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 italic"
      >
        <p className="text-lg md:text-xl max-w-3xl ">
          "Our project showcase highlights a diverse range of successful solutions we’ve crafted across industries. From sleek mobile apps and strategic branding to impactful marketing campaigns and cutting-edge web development, each project reflects our commitment to quality, innovation, and results."
        </p>
      </motion.div>
    </div>
  )
}
