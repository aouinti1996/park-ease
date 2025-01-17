import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How do I reserve a parking spot?",
      answer: "Simply enter your destination in the app, choose an available spot, and confirm your booking. You'll receive a confirmation with all the details you need."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay for seamless and secure transactions."
    },
    {
      question: "Can I cancel my reservation?",
      answer: "Yes, you can cancel your reservation up to 1 hour before the scheduled start time for a full refund."
    },
    {
      question: "Is my parking spot guaranteed?",
      answer: "Once you've made a reservation, your spot is guaranteed for the duration of your booking."
    },
    {
      question: "How do I extend my parking time?",
      answer: "You can easily extend your parking time through the app, subject to availability. Just go to your active reservations and select the 'Extend' option."
    },
    {
      question: "What if I arrive late to my reserved spot?",
      answer: "We provide a 15-minute grace period for all reservations. If you're running later than that, please contact our customer support for assistance."
    }
  ]

  return (
    <section className="py-16 bg-[linear-gradient(to_right,rgba(17,24,39,0.9),rgba(17,24,39,0.8))]" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl  font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-white">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-gray-500">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

