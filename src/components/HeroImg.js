import "./HeroImg.css"
import React from "react"
import videoBG from "../assets/videoBG.mp4"
import { Link } from "react-router-dom"

const HeroImg = () => {
	return (
		<div className="hero">
			<div className="mask">
				<video className="into-img" src={videoBG} alt="background video" autoPlay loop muted />
			</div>
			<div className="content">
				<p>Olá, Eu sou Alisson</p>
				<h1>Front-end Dev</h1>
				<div className="content__links">
					<Link to="/Project" className="btn">
						<span>Projetos</span>
					</Link>
					<Link to="/Contact" className="btn">
						<span>Contato</span>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default HeroImg
