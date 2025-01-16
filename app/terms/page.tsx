import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Terms of Service</h1>
      <Card>
        <CardHeader>
          <CardTitle>1. Acceptance of Terms</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            By accessing or using the ParkEase service, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our service.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>2. Description of Service</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            ParkEase provides a platform for users to find and reserve parking spaces. We do not own or operate any parking facilities.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>3. User Responsibilities</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            Users are responsible for providing accurate information when making reservations and for adhering to the rules and regulations of the parking facilities they use.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>4. Payments and Refunds</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            All payments are processed securely. Refunds are subject to the cancellation policy of each individual parking facility.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>5. Limitation of Liability</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            ParkEase is not responsible for any damages or losses incurred while using our service or while parked at a facility booked through our platform.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

