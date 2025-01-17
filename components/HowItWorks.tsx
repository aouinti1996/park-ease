'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { fadeInUp, staggerContainer } from '@/lib/utils'

export default function HowItWorks() {
  const steps = [
    { title: 'Search for parking', icon: '🔍', description: 'Enter your destination to find available spots' },
    { title: 'Reserve online', icon: '📱', description: 'Choose your spot and book it in advance' },
    { title: 'Park easily', icon: '🚗', description: 'Follow directions  and park stress-free' },
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,_rgba(59,130,246,0.1),transparent)]" />
      
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="container mx-auto px-4 relative z-10"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
        >
          How It Works
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              className="transform transition-all duration-300"
            >
              <Card className="bg-gray-900/50 border-gray-800 backdrop-blur-sm">
                <CardContent className="flex flex-col items-center p-6">
                  <div className="text-4xl mb-4 transform transition-all duration-300 hover:scale-110">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">
                    {step.title}
                  </h3>
                  <p className="text-center text-gray-400">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

