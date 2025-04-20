import React from "react";
import {Nav} from './Nav';
import {Footer} from "./Footer";
import {Card} from "./card"

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		<div>
			<Nav />
			<Card/>
			<Footer />
		</div>
	);
};

export default Home;