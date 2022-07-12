import "./HeroImg.css"
import React from "react"
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
	return (
		<div className="hero">
			<div className="mask">
				<img className="into-img" src={IntroImg} />
			</div>
			<div className="content">
				<p>Olá, Eu sou Alisson</p>
				<h1>Front-end Dev</h1>
				<div className="content__links">
					<Link to="/Project" className="btn">
						<span>Projetos</span>
						<i></i>
					</Link>
					<Link to="/Contact" className="btn">
						<span>Contato</span>
						<i></i>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HeroImg
