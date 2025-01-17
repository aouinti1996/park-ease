export interface Parking {
  id: number
  name: string
  address: string
  availableSpots: number
  price: number
}

const parkings: Parking[] = [
  { id: 1, name: "Parking Central", address: "123 Rue Principale", availableSpots: 50, price: 2 },
  { id: 2, name: "Parking de la Gare", address: "45 Avenue de la Gare", availableSpots: 30, price: 3 },
  { id: 3, name: "Parking du Marché", address: "78 Place du Marché", availableSpots: 20, price: 1.5 },
]

export async function getParkings(): Promise<Parking[]> {
  // Simuler un délai de réseau
  await new Promise(resolve => setTimeout(resolve, 1000))
  return parkings
}

