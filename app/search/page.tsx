'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface ParkingSpot {
  id: string
  name: string
  image: string
  price: number
  available: number
  total: number
  distance: string
}

const parkingSpots: ParkingSpot[] = [
  {
    id: '1',
    name: 'Central Parking',
    image: '/heroSection.webp',
    price: 5,
    available: 15,
    total: 50,
    distance: '0.3 miles'
  },
  {
    id: '2',
    name: 'City Center Garage',
    image: '/heroSection.webp',
    price: 8,
    available: 25,
    total: 100,
    distance: '0.5 miles'
  }
]

export default function SearchPage({
  searchParams
}: {
  searchParams: { location: string; country: string }
}) {
  const router = useRouter()
  const [sortBy, setSortBy] = useState('distance')
  const [priceRange, setPriceRange] = useState('all')

  const handleSpotSelect = (spotId: string) => {
    router.push(`/parking/${spotId}`)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 space-y-4">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-1 block">Sort By</label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="distance">Distance</SelectItem>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="availability">Availability</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-1 block">Price Range</label>
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Price range..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="low">Under $5/hour</SelectItem>
                    <SelectItem value="medium">$5-$10/hour</SelectItem>
                    <SelectItem value="high">Over $10/hour</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </div>

        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-6">
            Parking near {searchParams.location}
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {parkingSpots.map((spot) => (
              <Card key={spot.id} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={spot.image || "/placeholder.svg"}
                    alt={spot.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{spot.name}</h3>
                      <p className="text-sm text-gray-500">{spot.distance} away</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">${spot.price}/hr</p>
                      <p className="text-sm text-gray-500">
                        {spot.available} spots available
                      </p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{
                        width: `${(spot.available / spot.total) * 100}%`,
                      }}
                    />
                  </div>
                  <Button
                    onClick={() => handleSpotSelect(spot.id)}
                    className="w-full bg-blue-500 hover:bg-blue-600"
                  >
                    Select Spot
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

