'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

interface PaymentConfirmationProps {
  parkingId: string
  spotNumber: string
  hours: number
  price: number
  onCancel: () => void
}

export function PaymentConfirmation({
  parkingId,
  spotNumber,
  hours,
  price,
  onCancel,
}: PaymentConfirmationProps) {
  const [isProcessing, setIsProcessing] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsProcessing(false)
    setShowConfirmation(true)
  }

  const handleConfirm = () => {
    // Generate a random reservation ID for this example
    const reservationId = Math.random().toString(36).substr(2, 9)
    router.push(`/reservation-confirmation/${reservationId}`)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Complete Your Reservation</CardTitle>
          <CardDescription>
            Please enter your payment details to confirm your parking spot
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="card-number">Card Number</Label>
              <Input
                id="card-number"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input
                  id="cvc"
                  placeholder="123"
                  required
                />
              </div>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Parking Spot</span>
                <span>#{spotNumber}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Duration</span>
                <span>{hours} hours</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>${(hours * price).toFixed(2)}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-4">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Pay Now'}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Successful!</DialogTitle>
            <DialogDescription>
              Your parking spot has been reserved successfully. You will receive a confirmation email shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <Button onClick={handleConfirm} className="w-full">
              View Reservation Details
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

