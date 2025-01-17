export default function About() {
  return (
    <section className="py-16 bg-[radial-gradient(circle_at_70%_70%,_rgba(59,130,246,0.1),transparent)]" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl  font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">About SmartPark</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="mb-4 text-white">
            SmartPark was born out of a simple idea: make parking easier for everyone. Our mission is to revolutionize 
            the way people find and book parking spaces in urban areas.
          </p>
          <p className="mb-4 text-white">
            Founded by a team of tech enthusiasts and urban planners, we set out to solve the daily frustrations of 
            city parking. Our app combines real-time data, user-friendly design, and smart algorithms to help you 
            find the perfect parking spot, every time.
          </p>
          <p className="text-white">
            Whether you're a daily commuter, occasional city visitor, or business traveler, SmartPark is designed 
            to make your parking experience smooth, stress-free, and efficient.
          </p>
        </div>
      </div>
    </section>
  )
}

