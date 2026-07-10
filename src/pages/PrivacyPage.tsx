import { LegalPageShell } from '@/components/legal/LegalPageShell'

const sections = [
  {
    title: '1. Overview',
    paragraphs: [
      'This Privacy Policy explains how TourVego (“we”, “us”, or “our”) collects, uses, and shares information when you use our website and comparison tools. TourVego is a comparison platform for travel experiences. We do not process bookings ourselves; bookings are completed on third-party provider websites.',
    ],
  },
  {
    title: '2. Information we collect',
    paragraphs: [
      'We may collect information you provide directly and information collected automatically when you use TourVego.',
    ],
    bullets: [
      'Contact details you send us (such as your email address when you contact support)',
      'Usage data such as pages visited, clicks, device type, browser type, and approximate location derived from IP address',
      'Cookies and similar technologies used for site functionality and analytics',
      'Search and comparison interactions on the site (for example destination or experience pages you view)',
    ],
  },
  {
    title: '3. How we use information',
    paragraphs: [
      'We use information to operate, improve, and secure TourVego, and to communicate with you when needed.',
    ],
    bullets: [
      'Provide and maintain the comparison experience',
      'Understand how travelers use destinations, experiences, and compare pages',
      'Respond to support requests',
      'Detect, prevent, and address technical or security issues',
      'Comply with legal obligations',
    ],
  },
  {
    title: '4. Sharing of information',
    paragraphs: [
      'We do not sell your personal information. We may share limited information with service providers who help us run the website (for example hosting or analytics), under appropriate safeguards.',
      'When you click through to book on a third-party platform (such as GetYourGuide, Viator, or Klook), that platform’s own privacy policy applies to any information you provide there. TourVego does not control those sites.',
    ],
  },
  {
    title: '5. Cookies',
    paragraphs: [
      'We may use cookies and similar technologies to remember preferences, keep the site working, and understand aggregate traffic. You can control cookies through your browser settings. Disabling some cookies may affect site functionality.',
    ],
  },
  {
    title: '6. Data retention',
    paragraphs: [
      'We retain information only as long as needed for the purposes described in this policy, unless a longer period is required by law. Support emails and related records may be kept for a reasonable period to resolve issues and improve our service.',
    ],
  },
  {
    title: '7. Your choices',
    paragraphs: [
      'Depending on your location, you may have rights to access, correct, delete, or restrict certain personal information, or to object to certain processing. To make a request, email support@tourvego.com. We may need to verify your request before responding.',
    ],
  },
  {
    title: '8. Children’s privacy',
    paragraphs: [
      'TourVego is not directed to children under 13 (or the equivalent minimum age in your jurisdiction). We do not knowingly collect personal information from children. If you believe a child has provided us information, contact us and we will take appropriate steps.',
    ],
  },
  {
    title: '9. International users',
    paragraphs: [
      'TourVego may be accessed from different countries. Information may be processed in locations where we or our service providers operate. By using the site, you understand that your information may be transferred to and processed in those locations.',
    ],
  },
  {
    title: '10. Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. When we do, we will revise the “Last updated” date on this page. Continued use of TourVego after changes means you accept the updated policy.',
    ],
  },
  {
    title: '11. Contact',
    paragraphs: [
      'If you have questions about this Privacy Policy or our practices, contact us at support@tourvego.com.',
    ],
  },
]

export function PrivacyPage() {
  return (
    <LegalPageShell
      breadcrumb="Privacy"
      label="Legal"
      title={
        <>
          Privacy <span className="text-teal">Policy</span>
        </>
      }
      subtitle="How TourVego collects, uses, and protects information when you compare travel experiences on our site."
      updated="July 10, 2026"
      sections={sections}
    />
  )
}
