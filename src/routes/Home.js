import React, { useEffect } from "react"
import Navbar from "../components/Navbar"
import HeroImg from "../components/HeroImg"
import Footer from "../components/Footer"

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<div>
			<Navbar />
			<HeroImg />
			<Footer />
		</div>
	)
}

export default Home
