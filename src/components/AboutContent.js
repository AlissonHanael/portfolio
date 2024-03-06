import React from "react"
import "./AboutContent.css"
import Person from "../assets/person-img.png"
import TecnologiesCard from "./TecnologiesCard"
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
	DiDatabase,
	DiMsqlServer,
} from "react-icons/di"
import DownloadButton from "./DownloadButton"

const AboutContent = () => {
	return (
		<section>
			<div className="about-section">
				<div className="img-person">
					<img src={Person} />
				</div>
				<div className="divider" />
				<div className="about-text">
					<h1>
						Olá, eu sou <span className="name">Alisson</span>!
					</h1>
					Sou acadêmico de Sistemas de Informação no IFPR, tenho 23 anos e meus primeiros contatos com programação foi
					em meados de 2017. <p />
					Meu primeiro "hello world" foi em C# e logo quando entrei na faculdade em 2018, curti demais o desenvolvimento
					web, principalmente o Front-end mas, com o passar do tempo as coisas foram mudando, hoje atuo no mercado de
					SAP Business One, com muito foco na atuação de desenvolvimento em SQL (HANA e SQL Server) e desenvolvimento de
					relatórios crystal com conhecimentos consolidados nessa área do SAP. Ainda estou estudando programação, na
					intenção de migrar para o desenvolvimento em algum momento.
					<p />
					Sou curioso e gosto muito de aprender coisas novas! O que me atrai é o desafio.
					<p />
					Baixe meu currículo abaixo!
					<div className="download-btn">
						<DownloadButton />
					</div>
				</div>
			</div>
			<div className="tecnologies-section">
				<div className="tecnologies-title">
					<h2>Tecnologias que uso</h2>
				</div>
				<div className="tecnologies-cards">
					<TecnologiesCard icon={<DiCss3 />} />
					<TecnologiesCard icon={<DiHtml5 />} />
					<TecnologiesCard icon={<DiJavascript1 />} />
					<TecnologiesCard icon={<DiReact />} />
					<TecnologiesCard icon={<DiPhp />} />
				</div>
				<div className="tecnologies-cards__secondary">
					<TecnologiesCard icon={<DiPython />} />
					<TecnologiesCard icon={<DiDjango />} />
					<TecnologiesCard icon={<DiBootstrap />} />
					<TecnologiesCard icon={<DiMysql />} />
					<TecnologiesCard icon={<DiMsqlServer />} />
				</div>
			</div>
		</section>
	)
}

export default AboutContent
