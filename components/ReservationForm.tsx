'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function ReservationForm({ parkingId }: { parkingId: string }) {
  const [hours, setHours] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ parkingId, hours }),
      })

      if (!response.ok) {
        throw new Error('Failed to reserve parking')
      }

      const data = await response.json()
      setResult(data.message)
    } catch (error) {
      setResult('An error occurred while reserving the parking spot.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="hours" className="text-blue-800">Number of Hours</Label>
        <Input
          id="hours"
          type="number"
          min="1"
          value={hours}
          onChange={(e) => setHours(parseInt(e.target.value))}
          required
          className="mt-1"
        />
      </div>
      <Button type="submit" disabled={isLoading} className="w-full bg-blue-600 hover:bg-blue-700">
        {isLoading ? 'Reserving...' : 'Reserve Parking'}
      </Button>
      {result && <p className="mt-4 text-sm text-blue-800 font-medium">{result}</p>}
    </form>
  )
}

