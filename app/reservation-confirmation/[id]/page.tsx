'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { QRCodeSVG } from 'qrcode.react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Icons } from '@/components/ui/icons'

interface ReservationDetails {
  id: string
  parkingName: string
  spotNumber: string
  startTime: string
  endTime: string
  totalCost: number
}

export default function ReservationConfirmationPage({ params }: { params: { id: string } }) {
  const [reservation, setReservation] = useState<ReservationDetails | null>(null)
  const router = useRouter()

  useEffect(() => {
    // In a real application, you would fetch the reservation details from your API
    // For this example, we'll use mock data
    const mockReservation: ReservationDetails = {
      id: params.id,
      parkingName: 'Central City Parking',
      spotNumber: 'A-123',
      startTime: '2023-06-15T14:00:00',
      endTime: '2023-06-15T16:00:00',
      totalCost: 10.00
    }
    setReservation(mockReservation)
  }, [params.id])

  const handlePrint = () => {
    window.print()
  }

  if (!reservation) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen px-4">
      <Card className="w-full max-w-2xl overflow-hidden">
        <div className="relative h-40 bg-gradient-to-r from-green-400 to-blue-500">
          <Image
            src="/parking-success.svg"
            alt="Parking Success Illustration"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
        </div>
        <CardHeader>
          <div className="w-20 h-20 rounded-full bg-green-100 mx-auto -mt-10 flex items-center justify-center">
            <Icons.checkCircle className="h-12 w-12 text-green-500" />
          </div>
          <CardTitle className="text-3xl font-bold text-center mt-4">Reservation Confirmed!</CardTitle>
          <CardDescription className="text-center text-lg">
            Your parking spot has been successfully reserved.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Reservation Details</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Parking Location</p>
                <p className="font-medium">{reservation.parkingName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Spot Number</p>
                <p className="font-medium">{reservation.spotNumber}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Start Time</p>
                <p className="font-medium">{new Date(reservation.startTime).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">End Time</p>
                <p className="font-medium">{new Date(reservation.endTime).toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Cost</p>
                <p className="font-medium">${reservation.totalCost.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-4">Your QR Code</h3>
            <QRCodeSVG value={`https://parkease.com/verify/${reservation.id}`} size={200} />
            <p className="mt-2 text-sm text-gray-500">Show this QR code when you arrive at the parking location</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center space-x-4">
          <Button onClick={handlePrint} className="bg-blue-500 hover:bg-blue-600">
            <Icons.printer className="mr-2 h-4 w-4" />
            Print Confirmation
          </Button>
          <Button onClick={() => router.push('/')} variant="outline">
            Back to Home
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

