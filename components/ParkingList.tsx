import { getParkings } from '@/lib/parkings'

export default async function ParkingList() {
  const parkings = await getParkings()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {parkings.map((parking) => (
        <div key={parking.id} className="border p-4 rounded">
          <h2 className="text-xl font-semibold">{parking.name}</h2>
          <p>Adresse : {parking.address}</p>
          <p>Places disponibles : {parking.availableSpots}</p>
          <p>Prix : {parking.price}€/heure</p>
          <button
            onClick={() => {/* Logique de réservation */}}
            className="bg-green-500 text-white p-2 rounded mt-2"
          >
            Réserver
          </button>
        </div>
      ))}
    </div>
  )
}

