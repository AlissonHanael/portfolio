import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import ProjectsCards from '../components/ProjectCards'

const project = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2
        heading="PROJETOS"
        text="Confira aqui os projetos que já fiz."
      />

      <ProjectsCards />
      <Footer />
    </div>
  )
}

export default project
