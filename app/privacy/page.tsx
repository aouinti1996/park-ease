import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Privacy Policy</h1>
      <Card>
        <CardHeader>
          <CardTitle>1. Information We Collect</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We collect personal information that you provide to us, such as your name, email address, and payment information when you use our service.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>2. How We Use Your Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We use your information to provide and improve our service, process payments, and communicate with you about your reservations and account.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>3. Information Sharing and Disclosure</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We do not sell your personal information. We may share your information with parking facility operators as necessary to facilitate your reservations.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>4. Data Security</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction or damage.
          </p>
        </CardContent>
      </Card>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>5. Your Rights</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            You have the right to access, correct, or delete your personal information. Please contact us if you wish to exercise these rights.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

