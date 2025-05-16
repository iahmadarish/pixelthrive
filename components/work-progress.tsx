"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const workSteps = [
  {
    number: "01",
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    content:
      "We conduct thorough research on your industry, competitors, and target audience to develop a comprehensive strategy tailored to your specific business needs and goals.",
  },
  {
    number: "03",
    title: "Implementation",
    content:
      "Our team executes the strategy with precision, implementing all planned elements while maintaining constant communication with you throughout the process.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    content:
      "We continuously monitor the performance of your campaigns and make data-driven optimizations to ensure maximum effectiveness and return on investment.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    content:
      "Regular detailed reports are provided to keep you informed about the progress and results of our work, with clear insights and recommendations.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    content:
      "We believe in constant improvement, regularly reviewing strategies and implementing new approaches to keep your business ahead of the competition.",
  },
]

export default function WorkProgress() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div className="max-w-7xl mx-auto space-y-9 px-4 md:px-0">
      {workSteps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`rounded-3xl overflow-hidden ${openIndex === index ? "bg-[#c1ff72]" : "bg-gray-100"}`}
        >
          <button
            className="flex justify-between items-center w-full p-6 text-left"
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
          >
            <div className="flex items-center gap-6">
              <span className="text-4xl font-bold">{step.number}</span>
              <span className="text-xl font-medium">{step.title}</span>
            </div>
            <div className="rounded-full border border-black w-10 h-10 flex items-center justify-center">
              {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
            </div>
          </button>

          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6 pt-0">
                  <div className="border-t border-black/20 pt-4">
                    <p className="text-gray-800">{step.content}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
