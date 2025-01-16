'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function ParkingSearch() {
  const [location, setLocation] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/?location=${encodeURIComponent(location)}`)
  }

  return (
    <form onSubmit={handleSearch} className="mb-4">
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Entrez une adresse"
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Rechercher
      </button>
    </form>
  )
}

