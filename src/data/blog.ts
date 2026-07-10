export interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: 'compare-before-you-book',
    title: 'Why comparing experience prices saves more than you think',
    excerpt:
      'The same tour can differ by $20–$40 across platforms. Here’s how a quick side-by-side check changes what you pay.',
    category: 'Tips',
    author: 'TourVego Team',
    date: '2026-06-12',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&h=700&fit=crop&q=80',
    content: [
      'Travelers often book the first ticket they find — especially for popular attractions like the Colosseum, Louvre, or Burj Khalifa. The problem is simple: the same experience can appear at different prices on GetYourGuide, Viator, Klook, and other platforms.',
      'Those gaps are not always about quality. They can come from package differences, timed-entry tiers, seasonal promotions, or what is included (skip the line, guided option, free cancellation).',
      'TourVego exists to make that comparison obvious. Instead of opening five tabs, you see listed prices and key features in one place — then book on the provider that fits your budget and needs.',
      'A good habit: check the lowest price, then scan features. Sometimes paying a few dollars more for free cancellation or a better time slot is the smarter choice.',
      'Before you confirm, always verify the final price and terms on the booking platform. Rates can change, and the provider page is the source of truth for checkout.',
    ],
  },
  {
    id: 'paris-experiences-worth-comparing',
    title: 'Paris experiences worth comparing before summer',
    excerpt:
      'Louvre, Eiffel Tower, Seine cruises, and Versailles — which offers to compare first when planning a Paris trip.',
    category: 'Destinations',
    author: 'Maya Chen',
    date: '2026-05-28',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&h=700&fit=crop&q=80',
    content: [
      'Paris is packed with must-do experiences, and almost every one of them is sold on multiple platforms. That makes it a perfect city for comparison shopping.',
      'Start with the Louvre and Eiffel Tower. Timed entry and summit access options vary widely, and “best price” is not always the same as “best value” if you need a specific slot.',
      'Seine evening cruises are another category where prices swing. Look at duration, inclusions, and cancellation rules — not only the from-price.',
      'If you have a full day, Versailles packages differ by transport, guided access, and garden entry. Comparing those details early avoids last-minute surprises.',
      'Use TourVego to shortlist offers, then book directly with the platform you prefer. Keep screenshots or confirmation emails handy for entry day.',
    ],
  },
  {
    id: 'skip-the-line-explained',
    title: 'Skip the line, explained: when it is worth paying more',
    excerpt:
      'Not every skip-the-line ticket is equal. Learn what the label usually means — and when a standard ticket is enough.',
    category: 'Guides',
    author: 'Omar Farid',
    date: '2026-05-10',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&h=700&fit=crop&q=80',
    content: [
      '“Skip the line” is one of the most common labels on attraction tickets — and one of the most misunderstood. It rarely means you walk past every queue with zero waiting.',
      'Often it means you skip the ticket-purchase line and go to a reserved entry lane. Security checks can still take time, especially at major sites.',
      'It is usually worth it for high-demand attractions at peak hours: Colosseum, Vatican Museums, Sagrada Familia, or Burj Khalifa sunset slots.',
      'It may be less critical for early-morning visits, shoulder season, or smaller attractions where wait times are already short.',
      'When you compare on TourVego, check whether skip-the-line is included alongside other features like mobile tickets and free cancellation. That combination often defines true value.',
    ],
  },
  {
    id: 'free-cancellation-checklist',
    title: 'A free-cancellation checklist for flexible travel plans',
    excerpt:
      'Plans change. Here’s what to look for when comparing offers that promise free cancellation.',
    category: 'Tips',
    author: 'TourVego Team',
    date: '2026-04-22',
    readTime: '3 min read',
    image:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&h=700&fit=crop&q=80',
    content: [
      'Free cancellation is one of the most useful features when your itinerary is still flexible — flights shift, weather changes, or a friend joins late.',
      'Not every “free cancellation” policy is identical. Some require canceling 24 hours ahead; others are more generous. Always read the provider terms before booking.',
      'On TourVego, we highlight whether an offer typically includes free cancellation so you can compare that feature next to price.',
      'If two platforms are close in price, choose the one with clearer cancellation terms. Flexibility can be worth more than a small discount.',
      'After booking, save the cancellation deadline in your calendar. That one reminder prevents most refund headaches.',
    ],
  },
  {
    id: 'dubai-desert-safari-compare',
    title: 'How to compare Dubai desert safari packages',
    excerpt:
      'Dune bashing, BBQ dinners, and hotel pickup — the details that matter when safari prices look similar.',
    category: 'Destinations',
    author: 'Lina Rahman',
    date: '2026-04-05',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=1200&h=700&fit=crop&q=80',
    content: [
      'Desert safaris are among Dubai’s most popular activities, and package names can sound almost identical while inclusions differ a lot.',
      'Compare pickup areas, group size, dinner type, and whether sandboarding or camel rides are included. Price alone rarely tells the full story.',
      'Evening safaris often cost more than afternoon options because of dinner and entertainment. Decide what experience you want before chasing the lowest number.',
      'Also check cancellation rules. Desert weather and schedule changes make flexibility useful.',
      'Use a comparison view to shortlist two or three packages, then book on the platform with the clearest inclusions for your group.',
    ],
  },
  {
    id: 'tourvego-comparison-mindset',
    title: 'The TourVego mindset: book smarter, not harder',
    excerpt:
      'A simple approach to planning experiences without drowning in tabs, promo codes, and conflicting reviews.',
    category: 'Product',
    author: 'TourVego Team',
    date: '2026-03-18',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=700&fit=crop&q=80',
    content: [
      'Booking travel experiences should feel clear. Too often it feels like detective work: five websites, three currencies, and a dozen “best deal” banners.',
      'The TourVego mindset is simple. First pick the experience. Then compare platforms. Then book where the value is best for you.',
      'Value is not only price. It can be a better time slot, free cancellation, mobile tickets, or a guided option that matches how you like to travel.',
      'We built TourVego as a comparison layer — not a travel agency — so you stay in control of the final booking decision.',
      'Start with a destination you care about, open a few experiences, and practice comparing. After one or two trips, the habit becomes automatic.',
    ],
  },
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.id === slug)
}

export function getRelatedBlogPosts(slug: string, limit = 3): BlogPost[] {
  return blogPosts.filter((post) => post.id !== slug).slice(0, limit)
}

export function formatBlogDate(date: string) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}
