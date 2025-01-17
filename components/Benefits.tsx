import Image from 'next/image'

export default function Benefits() {
  return (
    <section className="py-16 bg-[linear-gradient(to_right,rgba(17,24,39,0.9),rgba(17,24,39,0.8))]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl  font-bold  mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Why Choose SmartPark?</h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Save time and reduce stress
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Find parking easily in busy areas
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Guaranteed spots with online reservation
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Competitive pricing and special offers
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <Image 
              src="/smart-parking.jpeg"
              alt="SmartPark Benefits" 
              width={500} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

