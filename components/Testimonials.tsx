import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah L.",
      image: "/placeholder.svg",
      text: "SmartPark has been a game-changer for my daily commute. No more circling the block for parking!"
    },
    {
      name: "Michael R.",
      image: "/placeholder.svg",
      text: "I love how easy it is to find and book parking spots with SmartPark. It's saved me so much time and stress."
    },
    {
      name: "Emily T.",
      image: "/placeholder.svg",
      text: "The real-time availability feature is fantastic. I always know exactly where I can park before I even leave home."
    }
  ]

  return (
    <section className="py-16 bg-[radial-gradient(circle_at_70%_70%,_rgba(59,130,246,0.1),transparent)]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl  font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Image 
                    src={testimonial.image || "/placeholder.svg"} 
                    alt={testimonial.name} 
                    width={50} 
                    height={50} 
                    className="rounded-full mr-4"
                  />
                  <h3 className="font-semibold text-blue-700">{testimonial.name}</h3>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

