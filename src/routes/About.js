import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

const about = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="SOBRE"
        text="Aqui você encontra um pouco mais da minha história"
      />
      <Footer />
    </div>
  )
}

export default about
