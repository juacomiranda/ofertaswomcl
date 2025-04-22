import React from "react";
import {Nav} from './Nav';
import {Footer} from "./Footer";
import {Card} from "./card"
import { Catalogo } from "./Catalogo";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<div className="container text-center">
				<h2 className="mt-5 color_wom1">EQUIPOS PIE  <p className="h2 color_wom2 d-inline">$0</p></h2>
				<h2 className="color_wom1">CONTRATANDO <p className="h2 color_wom2 d-inline">PLAN 400 GB</p></h2>
				<hr></hr>
			</div>
			<Catalogo />
			<Footer />
		</div>
	);
};

export default Home;