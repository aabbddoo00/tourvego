import { motion, type Variants } from 'framer-motion'

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' as const },
  }),
}

export function HeroContent() {
  return (
    <div className="max-w-xl">
      <motion.div
        custom={0}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mb-6 inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5"
      >
        <span className="text-xs font-semibold uppercase tracking-wider text-teal-700">
          The smarter way to travel
        </span>
      </motion.div>

      <motion.h1
        custom={1}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="text-4xl font-extrabold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-[3.25rem]"
      >
        Compare the same travel{' '}
        <span className="text-teal">experience</span> across top platforms.
      </motion.h1>

      <motion.p
        custom={2}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="mt-5 text-lg leading-relaxed text-navy-500 sm:text-xl"
      >
        Find the best value for tours, attractions, and tickets — all in one
        place.
      </motion.p>
    </div>
  )
}
