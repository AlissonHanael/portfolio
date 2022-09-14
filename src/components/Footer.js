import "./Footer.css"
import React from "react"
import { FaHome, FaPhone, FaMailBulk, FaInstagram, FaLinkedin } from "react-icons/fa"

const Footer = () => {
	return (
		<div className="footer">
			<p>Mapa do Site</p>
			<div className="footer-container">
				<div className="footer-links">
					<a href="/">Início</a>
					<a href="/about">Sobre</a>
					<a href="/project">Projetos</a>
					<a href="/contact">Contato</a>
				</div>

				<div className="left">
					<div className="location">
						<h4>
							<FaHome size={20} style={{ color: "#fff", marginRight: "1rem" }} />
							Palmas-PR
						</h4>
					</div>
					<div className="phone">
						<h4>
							<FaPhone size={20} style={{ color: "#fff", marginRight: "1rem" }} />
							(46)99903-7458
						</h4>
					</div>
					<div className="email">
						<h4>
							<FaMailBulk size={20} style={{ color: "#fff", marginRight: "1rem" }} />
							alissonhanael@gmail.com
						</h4>
					</div>
				</div>

				<div className="right">
					<h4>Conecte-se Comigo!</h4>
					<div className="social">
						<a href="https://www.instagram.com/alissonhanael/" target="_blank">
							<FaInstagram size={30} />
						</a>
						<a href="https://www.linkedin.com/in/alisson-hanael/" target="_blank">
							<FaLinkedin size={30} />
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
