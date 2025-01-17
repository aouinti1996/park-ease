'use client'

import {motion} from 'framer-motion'
import Image from 'next/image'
import {useState} from 'react'
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select"
import {fadeInUp, staggerContainer} from '@/lib/utils'
import HowItWorks from '@/components/HowItWorks'
import Benefits from '@/components/Benefits'
import About from '@/components/About'
import FAQ from '@/components/FAQ'
import Testimonials from '@/components/Testimonials'

export default function Home() {
    const [location, setLocation] = useState('')
    const [country, setCountry] = useState('')

    return (
        <div className="min-h-screen bg-gray-950">
            <section className="relative min-h-[90vh] flex items-center">
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_rgba(59,130,246,0.1),transparent)] z-0"/>
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,24,39,0.9),rgba(17,24,39,0.8))] z-10"/>

                {/* Content */}
                <div className="container mx-auto px-4 relative z-20">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <motion.h1
                            variants={fadeInUp}
                            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
                        >
                            Smart Parking Solutions
                        </motion.h1>
                        <motion.p
                            variants={fadeInUp}
                            className="text-xl md:text-2xl text-gray-300 mb-8"
                        >
                            Find and reserve parking spots in real-time. Experience hassle-free parking
                            with our smart booking system.
                        </motion.p>

                        <motion.div
                            variants={fadeInUp}
                            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
                        >
                            <Select value={country} onValueChange={setCountry}>
                                <SelectTrigger className="bg-gray-900/50 border-gray-700 text-white">
                                    <SelectValue placeholder="Select country"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="us">United States</SelectItem>
                                    <SelectItem value="uk">United Kingdom</SelectItem>
                                    <SelectItem value="ca">Canada</SelectItem>
                                    <SelectItem value="au">Australia</SelectItem>
                                </SelectContent>
                            </Select>

                            <Input
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="Enter location or address"
                                className="  bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-400"
                            />

                            <Button
                                className="bg-blue-600 hover:bg-blue-700 text-white transition-all transform hover:scale-105"
                            >
                                Search
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Background Image */}
                <Image
                    src="/placeholder.svg"
                    alt="City Background"
                    fill
                    className="object-cover -z-10"
                    priority
                />
            </section>

            <HowItWorks/>
            <Benefits/>
            <About/>
            <FAQ/>
            <Testimonials/>

        </div>
    )
}

