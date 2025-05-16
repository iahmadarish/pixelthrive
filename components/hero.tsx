"use client"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface HeroProps {
    buttonText: string
    buttonLink: string
    title?: string
    subtitle?: string
    image:any
}

export default function Hero({ buttonText, buttonLink, title, subtitle, image }: HeroProps) {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Text animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    // Image animation variants
    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                delay: 0.3,
                ease: "easeOut"
            }
        }
    };

    // Button animation variants
    const buttonVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            scale: 1.05,
            backgroundColor: "#4338ca", // indigo-700
            transition: { duration: 0.2 }
        }
    };

    return (
        <section className="relative h-screen w-full overflow-hidden bg-white">
            <div
                className="absolute inset-0 bg-gradient-to-br from-white via-white to-white"
                style={{
                    transform: `translateY(${scrollPosition * 0.1}px)`,
                    transition: 'transform 0.1s ease-out'
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
                    {/* Left Column - Creative Agency Text */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        className="flex flex-col justify-center"
                    >
                        <div className="relative mb-6">
                            <motion.h1
                                className="text-7xl md:text-8xl tracking-[16px] mb-8 font-black text-transparent bg-clip-text bg-gradient-to-r from-black via-[#2c0101] to-[#013100] leading-tight"
                                style={{
                                    transform: `translateY(${-scrollPosition * 0.2}px)`,
                                    transition: 'transform 0.1s ease-out'
                                }}
                            >
                                {title}
                            </motion.h1>
                            <p className="mb-8">
                                {subtitle}
                            </p>

                            <Link
                                href={buttonLink}
                                className="inline-block bg-black text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
                            >
                                {buttonText}
                            </Link>
                            <div className="absolute right-0 top-1/4 w-64 h-32 rounded-full bg-indigo-200 blur-xl opacity-30"></div>
                        </div>
                    </motion.div>

                    {/* Right Column - Details and Image */}
                    <div className="flex flex-col space-y-8">


                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={imageVariants}
                            className="relative w-full mb-4 h-full md:h-80 rounded-lg overflow-hidden "
                            style={{
                                transform: `translateY(${-scrollPosition * 0.15}px)`,
                                transition: 'transform 0.1s ease-out'
                            }}
                        >
                            {image && (
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={image}
                                        alt="Hero Background"
                                        fill
                                        className="object-cover opacity-100"
                                    />
                                </div>
                            )}
                        </motion.div>



                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={textVariants}
                        >
                            <p className="text-lg text-gray-800 py-8">
                                We are a forward-thinking creative agency specializing in innovative software, web, and app development solutions.
                            </p>

                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={buttonVariants}
                                whileHover="hover"
                            >

                            </motion.div>
                        </motion.div>


                    </div>
                </div>
            </div>


        </section>
    )
}