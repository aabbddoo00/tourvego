import { useState } from 'react'
import { Play } from 'lucide-react'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/button'
import { HowItWorksModal } from '@/components/hero/HowItWorksModal'

export function CTAButtons() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-8 flex flex-wrap items-center gap-3"
      >
        <Button size="lg" className="rounded-full px-8 shadow-none">
          Start Comparing
        </Button>
        <Button
          type="button"
          variant="outline"
          size="lg"
          className="rounded-full border-navy-200 px-6"
          onClick={() => setVideoOpen(true)}
        >
          <Play className="h-4 w-4 fill-navy text-navy" />
          See how it works
        </Button>
      </motion.div>

      <HowItWorksModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </>
  )
}
