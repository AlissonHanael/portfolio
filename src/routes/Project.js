import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'

const project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="PROJETOS"
        text="Confira aqui os projetos que já fiz."
      />
      <Footer />
    </div>
  )
}

export default project
