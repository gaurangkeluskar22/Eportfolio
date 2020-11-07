import React from "react";
import PropTypes from "prop-types";

const WOW = require('wowjs');

window.wow = new WOW.WOW({
    live: false
});

window.wow.init();

export default class Background extends React.Component {
	componentDidMount() {

	}

	render() {
		return (
			<div id="my-background" className="background">
				<div id="stars" />
				<div id="stars2" />
				<div id="stars3" />
				<div className="top-container flex">
					<h1>
						Hello, I&apos;m Gaurang Keluskar.
						<br />
						I&apos;m a Full Stack Developer.
					</h1>
					{/* offset can be cahnged in node modules wowjs default file */}
					<button
						className={"work-button " + this.props.bounceIn}
						data-wow-offset="0"
						onClick={() => {
							let node = document.getElementById(
								this.props.aboutRef.current.props.id
							);
							window.scrollTo({
								top: node.offsetTop,
								behavior: "smooth"
							});
						}}>
						View my work
					</button>
				</div>
			</div>
		);
	}
}

Background.propTypes = {
	aboutRef: PropTypes.object,
	bounceIn: PropTypes.string
};
