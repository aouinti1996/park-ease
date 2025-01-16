'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { PaymentConfirmation } from '@/components/PaymentConfirmation'

interface ParkingDetails {
  id: string
  name: string
  image: string
  price: number
  available: number
  total: number
  address: string
}

const mockParkingDetails: Record<string, ParkingDetails> = {
  '1': {
    id: '1',
    name: 'Central Parking',
    image: '/heroSection.webp',
    price: 5,
    available: 15,
    total: 50,
    address: '123 Main St, City Center'
  },
  '2': {
    id: '2',
    name: 'City Center Garage',
    image: '/heroSection.webp',
    price: 8,
    available: 25,
    total: 100,
    address: '456 Park Ave, Downtown'
  }
}

export default function ParkingDetailsPage({ params }: { params: { id: string } }) {
  const [selectedSpot, setSelectedSpot] = useState<string | null>(null)
  const [showPayment, setShowPayment] = useState(false)
  
  const parking = mockParkingDetails[params.id]
  
  if (!parking) {
    return <div>Parking not found</div>
  }

  const parkingSpots = Array.from({ length: parking.total }, (_, i) => ({
    id: `${i + 1}`,
    isOccupied: i >= parking.available
  }))

  const handleSpotSelect = (spotId: string) => {
    setSelectedSpot(spotId)
  }

  const handleReserve = () => {
    if (selectedSpot) {
      setShowPayment(true)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-blue-800">{parking.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="relative h-64 mb-4">
                <Image
                  src={parking.image || "/placeholder.svg"}
                  alt={parking.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <p className="text-lg mb-2"><strong>Address:</strong> {parking.address}</p>
              <p className="text-lg mb-2">
                <strong>Available Spots:</strong> {parking.available} / {parking.total}
              </p>
              <p className="text-lg mb-4"><strong>Price:</strong> ${parking.price}/hour</p>
              {selectedSpot && (
                <Button
                  onClick={handleReserve}
                  className="w-full bg-blue-500 hover:bg-blue-600"
                >
                  Reserve Spot #{selectedSpot}
                </Button>
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-blue-700">Select a Parking Spot</h3>
              <div className="grid grid-cols-5 gap-2">
                {parkingSpots.map((spot) => (
                  <button
                    key={spot.id}
                    onClick={() => !spot.isOccupied && handleSpotSelect(spot.id)}
                    className={`
                      aspect-square rounded-md flex items-center justify-center text-sm font-medium
                      ${spot.isOccupied 
                        ? 'bg-red-200 text-red-800 cursor-not-allowed'
                        : spot.id === selectedSpot
                          ? 'bg-blue-500 text-white'
                          : 'bg-green-200 text-green-800 hover:bg-green-300'
                      }
                    `}
                    disabled={spot.isOccupied}
                  >
                    {spot.id}
                  </button>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Green spots are available, red spots are occupied
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {showPayment && (
        <PaymentConfirmation
          parkingId={parking.id}
          spotNumber={selectedSpot!}
          hours={1}
          price={parking.price}
          onConfirm={() => {
            // Handle successful payment
            setShowPayment(false)
          }}
          onCancel={() => setShowPayment(false)}
        />
      )}
    </div>
  )
}

