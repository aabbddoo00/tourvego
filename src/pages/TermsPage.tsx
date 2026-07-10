import { LegalPageShell } from '@/components/legal/LegalPageShell'

const sections = [
  {
    title: '1. Agreement to terms',
    paragraphs: [
      'These Terms of Use (“Terms”) govern your access to and use of the TourVego website and comparison tools. By using TourVego, you agree to these Terms. If you do not agree, please do not use the site.',
    ],
  },
  {
    title: '2. What TourVego is',
    paragraphs: [
      'TourVego is a comparison platform for travel experiences such as tours, tickets, attractions, and activities. We help you compare listed prices and features across third-party booking platforms.',
      'TourVego is not a travel agency and does not sell tickets, process payments, or confirm bookings. When you choose an offer, you leave TourVego and complete the booking on the provider’s website under that provider’s terms.',
    ],
  },
  {
    title: '3. Eligibility',
    paragraphs: [
      'You must be at least the age of majority in your jurisdiction (or have parental/guardian consent where required) to use TourVego. You agree to use the site only for lawful purposes and in accordance with these Terms.',
    ],
  },
  {
    title: '4. Third-party bookings and content',
    paragraphs: [
      'Offers, prices, availability, ratings, and features shown on TourVego may come from or reflect third-party platforms. That information can change without notice and may not always be complete or current.',
      'You are responsible for reviewing the final price, inclusions, cancellation rules, and other terms on the provider’s site before purchasing. TourVego is not a party to any contract between you and a booking provider.',
    ],
  },
  {
    title: '5. No booking guarantee',
    paragraphs: [
      'We do not guarantee that any listed price, feature, or availability will remain accurate through checkout. We also do not guarantee that a provider will accept your booking or that an experience will meet your expectations.',
      'Any dispute related to a booking, refund, ticket validity, or customer service must be handled with the provider that processed your purchase.',
    ],
  },
  {
    title: '6. Acceptable use',
    paragraphs: [
      'You agree not to misuse TourVego, including by attempting to disrupt the site, scrape content in an abusive way, reverse engineer our systems, or use the site to violate any law or third-party rights.',
    ],
  },
  {
    title: '7. Intellectual property',
    paragraphs: [
      'TourVego branding, site design, and original content are owned by TourVego or its licensors. You may not copy, modify, or redistribute our materials except as allowed by law or with our prior written permission.',
      'Third-party names, logos, and trademarks belong to their respective owners and are used for identification and comparison purposes only.',
    ],
  },
  {
    title: '8. Disclaimer of warranties',
    paragraphs: [
      'TourVego is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the site will be uninterrupted, error-free, or free of harmful components.',
    ],
  },
  {
    title: '9. Limitation of liability',
    paragraphs: [
      'To the fullest extent permitted by law, TourVego and its operators will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, data, or goodwill, arising from your use of the site or from bookings made with third parties.',
      'Our total liability for any claim arising out of or relating to the site will not exceed the greater of (a) the amount you paid us directly for access to TourVego in the 12 months before the claim (if any), or (b) USD $50.',
    ],
  },
  {
    title: '10. Indemnity',
    paragraphs: [
      'You agree to indemnify and hold harmless TourVego and its operators from claims, damages, losses, and expenses (including reasonable legal fees) arising from your misuse of the site or your violation of these Terms.',
    ],
  },
  {
    title: '11. Changes to the service or terms',
    paragraphs: [
      'We may update TourVego or these Terms from time to time. When we update the Terms, we will revise the “Last updated” date. Continued use after changes means you accept the updated Terms.',
    ],
  },
  {
    title: '12. Contact',
    paragraphs: [
      'Questions about these Terms can be sent to support@tourvego.com. For booking issues, contact the platform where you completed your purchase.',
    ],
  },
]

export function TermsPage() {
  return (
    <LegalPageShell
      breadcrumb="Terms"
      label="Legal"
      title={
        <>
          Terms of <span className="text-teal">Use</span>
        </>
      }
      subtitle="The rules for using TourVego as a comparison platform for travel experiences across third-party booking sites."
      updated="July 10, 2026"
      sections={sections}
    />
  )
}
