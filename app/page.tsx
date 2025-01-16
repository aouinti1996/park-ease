'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function MapIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
      <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
      >
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
        <line x1="9" x2="9" y1="3" y2="18" />
        <line x1="15" x2="15" y1="6" y2="21" />
      </svg>
  )
}

export default function HomePage() {
  const router = useRouter()
  const [location, setLocation] = useState('')
  const [country, setCountry] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (location && country) {
      router.push(`/search?location=${encodeURIComponent(location)}&country=${encodeURIComponent(country)}`)
    }
  }

  return (
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <Image
              src="/heroSection.webp"
              alt="Smart Parking System"
              fill
              className="object-cover"
              priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
        </div>

        <div className="relative pt-20 pb-32 sm:pt-32 sm:pb-40">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Smart Parking Solutions
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Find and reserve parking spots in real-time. Experience hassle-free parking with our smart booking system.
              </p>

              <form onSubmit={handleSearch} className="mt-8 flex flex-col sm:flex-row gap-4">
                <Select
                    value={country}
                    onValueChange={setCountry}
                >
                  <SelectTrigger className="w-full sm:w-[180px] bg-white/10 border-white/20 text-white">
                    <SelectValue placeholder="Select country" />
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
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />

                <Button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-8"
                >
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-900 py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <Image
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpenji.co%2Fgraphic-design-copyright%2F&psig=AOvVaw3nj6KFPh3IPacwdq1KyeWX&ust=1737128936814000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC50NvL-ooDFQAAAAAdAAAAABAT"
                    alt="Modern Parking Facility"
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">Modern Facilities</h3>
                <p className="text-gray-400">State-of-the-art parking facilities with smart technology integration.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <Image
                    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fpenji.co%2Fgraphic-design-copyright%2F&psig=AOvVaw3nj6KFPh3IPacwdq1KyeWX&ust=1737128936814000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNC50NvL-ooDFQAAAAAdAAAAABAT"
                    alt="Smart Parking System"
                    width={400}
                    height={300}
                    className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">Easy Booking</h3>
                <p className="text-gray-400">Reserve your spot in advance with our simple booking system.</p>
              </div>
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="h-[300px] bg-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
                  <MapIcon className="w-16 h-16 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Real-time Navigation</h3>
                <p className="text-gray-400">Get turn-by-turn directions to your reserved parking spot.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

