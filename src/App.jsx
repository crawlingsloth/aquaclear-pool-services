import { motion, AnimatePresence } from 'framer-motion'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import BeforeAfter from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pool-50 via-white to-aqua-50 overflow-x-hidden">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Hero />
          <Services />
          <Features />
          <BeforeAfter />
          <Testimonials />
          <Contact />
          <ChatWidget />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default App