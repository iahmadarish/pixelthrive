"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"

export default function ProposalQuote() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const openPopup = () => setIsPopupOpen(true)
  const closePopup = () => setIsPopupOpen(false)

  return (
    <>
      <div
        className={`relative my-32 bg-gray-100 rounded-3xl p-10 flex justify-between items-center max-w-7xl mx-auto overflow-hidden ${isPopupOpen ? "blur-sm" : ""}`}
      >
        {/* Left content */}
        <div className="max-w-md z-10">
          <h2 className="text-3xl font-bold mb-4">Let's make things happen</h2>
          <p className="text-gray-700 mb-6">
            Contact us today to learn more about how our digital marketing services can help your business grow and
            succeed online.
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white rounded-md px-6 py-5" onClick={openPopup}>
            Get your free proposal
          </Button>
        </div>

        {/* Right decorative elements */}
        <div className="relative h-48 w-48">
          {/* Star burst shape */}
          <div className="absolute top-0 right-0">
            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M60 0L70 50L120 60L70 70L60 120L50 70L0 60L50 50L60 0Z"
                stroke="black"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </div>

          {/* Black circle with eyes */}
          <div className="absolute top-16 left-4 w-20 h-20 bg-black rounded-full flex items-center justify-center">
            <div className="w-4 h-6 bg-white rounded-full mx-1"></div>
            <div className="w-4 h-6 bg-white rounded-full mx-1"></div>
          </div>

          {/* Spiral around the circle */}
          <div className="absolute top-8 left-0 w-28 h-28">
            <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="56" cy="56" rx="55" ry="30" stroke="black" strokeWidth="1" transform="rotate(0 56 56)" />
              <ellipse cx="56" cy="56" rx="45" ry="25" stroke="black" strokeWidth="1" transform="rotate(45 56 56)" />
              <ellipse cx="56" cy="56" rx="35" ry="20" stroke="black" strokeWidth="1" transform="rotate(90 56 56)" />
            </svg>
          </div>

          {/* Green diamond */}
          <div className="absolute bottom-0 left-8">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="0" width="28" height="28" transform="rotate(45 20 0)" fill="#ADFF2F" />
            </svg>
          </div>

          {/* Gray star */}
          <div className="absolute right-0 bottom-8">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 0L25 15L40 20L25 25L20 40L15 25L0 20L15 15L20 0Z" fill="#D3D3D3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={closePopup}></div>
          <div className="bg-white rounded-lg p-8 shadow-2xl w-full max-w-md z-10 relative">
            <button onClick={closePopup} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">Get Your Free Proposal</h3>

            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  placeholder="Write your name or Your Company name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  placeholder="Write your proposal subject"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <Textarea
                  id="description"
                  placeholder="Please write the details you want"
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 rounded-md font-medium"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
