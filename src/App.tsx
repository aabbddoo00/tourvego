import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ScrollToTop } from '@/components/layout/ScrollToTop'
import { AboutPage } from '@/pages/AboutPage'
import { BlogPage } from '@/pages/BlogPage'
import { BlogPostPage } from '@/pages/BlogPostPage'
import { DestinationPage } from '@/pages/DestinationPage'
import { DestinationsPage } from '@/pages/DestinationsPage'
import { ExperiencePage } from '@/pages/ExperiencePage'
import { ExperiencesPage } from '@/pages/ExperiencesPage'
import { HelpPage } from '@/pages/HelpPage'
import { HomePage } from '@/pages/HomePage'
import { PrivacyPage } from '@/pages/PrivacyPage'
import { SearchPage } from '@/pages/SearchPage'
import { TermsPage } from '@/pages/TermsPage'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/destinations" element={<DestinationsPage />} />
        <Route path="/destinations/:slug" element={<DestinationPage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/experiences/:slug" element={<ExperiencePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
