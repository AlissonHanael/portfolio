import React from "react"
import "./NotFound.css"

const NotFound = () => {
	return (
		<div className="notfound">
			<div className="notfound-message">
				<h1>404</h1>
				<p>Parece que você chegou em um link que não existe!</p>
			</div>
			<p>
				Volte para o <a href="/">Início</a>
			</p>
		</div>
	)
}

export default NotFound
