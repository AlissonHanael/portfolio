import React from 'react'
import './AboutContent.css'
import Person from '../assets/person-img.png'
import TecnologiesCard from './TecnologiesCard'
import { DiCss3, DiHtml5, DiJavascript1, DiReact } from 'react-icons/di'

const AboutContent = () => {
  return (
    <section>
      <div className="about-section">
        <div className="img-person">
          <img src={Person} />
        </div>
        <div className="divider" />
        <div className="about-text">
          <h1>Olá, eu sou Alisson!</h1>
          Mais conhecido na cidade e na internet como Zaio, sou acadêmico de
          Sistemas de Informação no IFPR, tenho 21 anos e meus primeiros
          contatos com programação foi em meados de 2017. <p />
          Meu primeiro "hello world" foi em C#! Na época eu tava bem no ano de
          vestibulares então eu não estudava muito programação, mas logo quando
          entrei na faculdade em 2018, amei o desenvolvimento web,
          principalmente o Front-end.
          <p />
          Sou curioso e gosto muito de aprender coisas novas! O que me atrai é o
          desafio.
        </div>
      </div>
      <div className="tecnologies-section">
        <h2>Tecnologias que uso</h2>
        <TecnologiesCard icon={<DiCss3 />} />
      </div>
    </section>
  )
}

export default AboutContent
