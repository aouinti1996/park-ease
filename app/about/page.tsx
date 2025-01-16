import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">About ParkEase</h1>
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            At ParkEase, our mission is to revolutionize the way people find and reserve parking spaces. We understand the frustration of circling blocks in search of a spot, and we're here to make that a thing of the past.
          </p>
          <p className="mb-4">
            Our platform connects drivers with available parking spaces in real-time, saving time, reducing stress, and minimizing the environmental impact of prolonged searches for parking.
          </p>
          <p>
            We're committed to creating smarter, more efficient cities by optimizing parking resources and improving the overall urban experience for everyone.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Our Team</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            ParkEase was founded by a team of urban planners, software engineers, and parking industry experts who saw an opportunity to leverage technology to solve a common urban challenge.
          </p>
          <p>
            Our diverse team brings together expertise in mobile app development, IoT technology, data analysis, and customer service to create a seamless parking experience for our users.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

