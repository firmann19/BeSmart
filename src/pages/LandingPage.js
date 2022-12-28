import React from 'react'
import Header from '../parts/Header'
import Services from '../parts/Services'
import Portofolio from '../parts/Portofolio'
import Contact from '../parts/Contact'
import Footer from '../elements/Footer'

export default function LandingPage() {
  return (
    <div>
      <Header />
      <Services />
      <Portofolio />
      <Contact />
      <Footer />
    </div>
  )
}
