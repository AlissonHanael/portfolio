import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import ContactContent from '../components/ContactContent'
const contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTATO" text="Entre em contato comigo!" />
      <ContactContent />
      <Footer />
    </div>
  )
}

export default contact
