import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWoks'
import Pricing from './sections/Pricing'
import CTA from './sections/CTA'
import FAQ from './sections/FAQ'

export default function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Pricing />
        <CTA />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
