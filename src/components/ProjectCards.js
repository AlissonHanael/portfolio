import "./ProjectCards.css"

import React from "react"
import MarioRun from "../assets/MarioRun.png"
import BlitchPop from "../assets/BlitchPop.png"
import SimonsWinery from "../assets/SimonsWinery.png"
import Reminder from "../assets/reminder.png"
import Portifolio from "../assets/portifolio.png"
import Alurabook from "../assets/alurabook.png"
import RelogioJS from "../assets/RelogioJS.png"
import MSFaturas from "../assets/MSFaturas.png"
import Educativus from "../assets/Educativus.png"
import BtnLink from "./BtnLink"
import {
	DiCss3,
	DiHtml5,
	DiJavascript1,
	DiReact,
	DiPhp,
	DiBootstrap,
	DiMysql,
	DiDjango,
	DiPython,
} from "react-icons/di"

const ProjectsCards = () => {
	return (
		<div className="projects-section">
			<div className="project-container">
				<div className="card-container">
					<img src={MarioRun} alt="Projeto - Mario Run" />
					<h2 className="project-title">Mario Run</h2>
					<div className="project-detail">
						<p>Projeto feito com intuíto de aprender mais sobre JavaScript.</p>
					</div>
					<p>Tecnologias Usadas:</p>
					<div className="tecnologies-list">
						<DiHtml5 />
						<DiCss3 />
						<DiJavascript1 />
					</div>
					<BtnLink
						site="https://alissonhanael.github.io/marioinfiniterun/MARIO_RUN/"
						github="https://github.com/AlissonHanael/marioinfiniterun"
					/>
				</div>
				<div className="card-container">
					<img src={BlitchPop} alt="Projeto - Blitchpop" />
					<h2 className="project-title">Blitch Pop</h2>
					<div className="project-detail">
						<p>Projeto feito com intuíto de aprender mais sobre animações em CSS</p>
					</div>
					<p>Tecnologias Usadas:</p>
					<div className="tecnologies-list">
						<DiHtml5 />
						<DiCss3 />
						<DiJavascript1 />
					</div>
					<BtnLink
						site="https://alissonhanael.github.io/blitchpop/bp/"
						github="https://github.com/AlissonHanael/blitchpop"
					/>
				</div>
				<div className="card-container">
					<img src={SimonsWinery} alt="Projeto - Simon's Winery" />
					<h2 className="project-title">Simon's Winery</h2>
					<div className="project-detail">
						<p>
							Projeto onde coloquei todos meus conhecimentos de HTML e CSS puro a prova! Foi aqui que comecei a estudar
							JavaScript pra valer!
						</p>
					</div>
					<p>Tecnologias Usadas:</p>
					<div className="tecnologies-list">
						<DiHtml5 />
						<DiCss3 />
						<DiJavascript1 />
					</div>
					<BtnLink
						site="https://alissonhanael.github.io/SimonsWinery/VinicolaSimone/"
						github="https://github.com/AlissonHanael/SimonsWinery"
					/>
				</div>
				<div className="card-container">
					<img src={Reminder} alt="Projeto - Reminder" />
					<h2 className="project-title">Reminder</h2>
					<div className="project-detail">
						<p>Esse projeto eu fiz acompanhando a NLW da Rocketseat, foi meu primeiro contato com JavaScript básico!</p>
					</div>
					<p>Tecnologias Usadas:</p>
					<div className="tecnologies-list">
						<DiHtml5 />
						<DiCss3 />
						<DiJavascript1 />
					</div>
					<BtnLink
						site="https://alissonhanael.github.io/reminder/reminder/"
						github="https://github.com/AlissonHanael/reminder"
					/>
				</div>
				<div className="card-container">
					<img src={Portifolio} alt="Portfolio" />
					<h2 className="project-title">Meu Portifolio</h2>
					<div className="project-detail">
						<p>Primeiro contato com ReactJs, enquanto faço curso de React da Alura.</p>
					</div>
					<p>Tecnologias Usadas:</p>
					<div className="tecnologies-list">
						<DiHtml5 />
						<DiCss3 />
						<DiJavascript1 />
						<DiReact />
					</div>
					<BtnLink
						site="https://alissonhanael.github.io/reminder/reminder/"
						github="https://github.com/AlissonHanael/reminder"
					/>
				</div>
				<div className="card-container">
					<img src={Alurabook} alt="Projeto - AluraBooks" />
					<h2 className="project-title">Alura Books</h2>
					<div className="project-detail">
						<p>Consumo de API e métodos de array.</p>
					</div>
					<p>Tecnologias Usadas:</p>
					<div className="tecnologies-list">
						<DiHtml5 />
						<DiCss3 />
						<DiJavascript1 />
					</div>
					<BtnLink
						site="https://alissonhanael.github.io/AluraBook/"
						github="https://github.com/AlissonHanael/AluraBook"
					/>
				</div>
				<div className="card-container">
					<img src={RelogioJS} alt="Projeto - Relogio JS" />
					<h2 className="project-title">Relogio JS</h2>
					<div className="project-detail">
						<p>Utilização de javascript e animação css para desenvovimento do projeto!</p>
					</div>
					<p>Tecnologias Usadas:</p>
					<div className="tecnologies-list">
						<DiHtml5 />
						<DiCss3 />
						<DiJavascript1 />
					</div>
					<BtnLink
						site="https://alissonhanael.github.io/relogioJS/"
						github="https://github.com/AlissonHanael/relogioJS"
					/>
				</div>
				<div className="card-container">
					<img src={MSFaturas} alt="Projeto - MS Faturas" />
					<h2 className="project-title">MSFaturas</h2>
					<div className="project-detail">
						<p>
							Projeto desenvolvido para uma empresa da minha cidade na intenção de substituir um sistema muito antigo
							que era utilizado para controle interno.
						</p>
					</div>
					<p>Tecnologias Usadas:</p>
					<div className="tecnologies-list">
						<DiPhp />
						<DiBootstrap />
						<DiMysql />
					</div>
					<BtnLink site="https://youtu.be/lQdgSVN9bUM" github="https://github.com/AlissonHanael/MSFaturas" />
				</div>
				<div className="card-container">
					<img src={Educativus} alt="Projeto - Educativus" />
					<h2 className="project-title">EducAtivus</h2>
					<div className="project-detail">
						<p>
							Esse projeto foi criado com o propósito de instruir usuários a usar o SAP B1. E ele se tornou meu projeto
							de TCC!
						</p>
					</div>
					<p>Tecnologias Usadas:</p>
					<div className="tecnologies-list">
						<DiDjango />
						<DiPython />
						<DiMysql />
						<DiReact />
					</div>
					<BtnLink site="https://youtu.be/6XH6cXaF9ls" github="https://github.com/AlissonHanael/Educativus2.0" />
				</div>
			</div>
		</div>
	)
}

export default ProjectsCards
