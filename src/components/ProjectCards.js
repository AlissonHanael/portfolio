import './ProjectCards.css'

import React from 'react'
import MarioRun from '../assets/MarioRun.png'
import BlitchPop from '../assets/BlitchPop.png'
import SimonsWinery from '../assets/SimonsWinery.png'

const ProjectsCards = () => {
  return (
    <div className="projects-section">
      <h4 className="project-heading">Projetos</h4>
      <div className="project-container">
        <div className="card-container">
          <img src={MarioRun} alt="Projeto - Mario Run" />
          <h2 className="project-title">Mario Run</h2>
          <div className="project-detail">
            <p>Projeto feito com intuíto de aprender mais sobre JavaScript</p>
            <div className="btn-link">
              <a
                href="https://alissonhanael.github.io/marioinfiniterun/MARIO_RUN/"
                className="btn"
                target="_blank"
              >
                Visualizar
              </a>
              <a
                href="https://github.com/AlissonHanael/marioinfiniterun"
                className="btn"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
        <div className="card-container">
          <img src={BlitchPop} alt="Projeto - Blitchpop" />
          <h2 className="project-title">Blitch Pop</h2>
          <div className="project-detail">
            <p>
              Projeto feito com intuíto de aprender mais sobre animações em CSS
            </p>
            <div className="btn-link">
              <a
                href="https://alissonhanael.github.io/blitchpop/bp/"
                className="btn"
                target="_blank"
              >
                Visualizar
              </a>
              <a
                href="https://github.com/AlissonHanael/blitchpop"
                className="btn"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
        <div className="card-container">
          <img src={SimonsWinery} alt="Projeto - Simon's Winery" />
          <h2 className="project-title">Simon's Winery</h2>
          <div className="project-detail">
            <p>
              Projeto onde coloquei todos meus conhecimentos de HTML e CSS puro
              a prova! Foi aqui que comecei a estudar JavaScript!
            </p>
            <div className="btn-link">
              <a
                href="https://alissonhanael.github.io/SimonsWinery/VinicolaSimone/"
                className="btn"
                target="_blank"
              >
                Visualizar
              </a>
              <a
                href="https://github.com/AlissonHanael/SimonsWinery"
                className="btn"
                target="_blank"
              >
                Código
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCards
