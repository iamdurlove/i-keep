import React from "react";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<footer>
			<h4>
				©️Copyright iKeep, {2022 + "-" + year}. All Rights Reserved || Developed
				by Durlav Parajuli
			</h4>
		</footer>
	);
};

export default Footer;
