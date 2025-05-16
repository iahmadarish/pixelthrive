"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Sidebar animation variant
  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      x: 20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.2 }
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto py-5 px-4">
        <div className="flex items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="flex items-center font-bold text-xl md:text-2xl">
              <span className="text-blue-900 mr-1">PIXELTHRIVE</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link href="/" className="text-gray-800 hover:text-black transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-black transition-colors">
              About Us
            </Link>
          </nav>

          {/* Quote Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="/quote"
              className="border border-black text-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition-colors"
            >
              Request a quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <button className="text-black" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Sidebar */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              {/* Backdrop overlay */}
              <motion.div 
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
              />
              
              {/* Sidebar */}
              <motion.div
                className="fixed top-0 right-0 bottom-0 w-3/4 max-w-xs bg-black text-white z-50 flex flex-col"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sidebarVariants}
              >
                <div className="flex justify-end p-4">
                  <button onClick={toggleMenu} aria-label="Close menu">
                    <X size={24} className="text-white" />
                  </button>
                </div>
                
                <div className="flex flex-col p-4 space-y-6">
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/"
                      className="block py-2 text-white hover:text-gray-300 transition-colors text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/services"
                      className="block py-2 text-white hover:text-gray-300 transition-colors text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Services
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/about"
                      className="block py-2 text-white hover:text-gray-300 transition-colors text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Link
                      href="/quote"
                      className="block border border-white text-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition-colors text-center mt-6"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Request a quote
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}