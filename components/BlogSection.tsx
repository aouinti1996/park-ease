import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"

export default function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of Smart Parking",
      excerpt: "Explore how IoT and AI are revolutionizing urban parking solutions.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "5 Tips for Stress-Free City Parking",
      excerpt: "Learn how to navigate busy urban areas and find parking with ease.",
      image: "/placeholder.svg",
      link: "#"
    },
    {
      title: "Sustainable Parking: The Green Revolution",
      excerpt: "Discover how smart parking solutions are contributing to eco-friendly cities.",
      image: "/placeholder.svg",
      link: "#"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-800">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardContent className="p-0">
                <Image 
                  src={post.image || "/placeholder.svg"} 
                  alt={post.title} 
                  width={400} 
                  height={200} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link href={post.link} className="text-blue-600 hover:underline">
                    Read More
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

