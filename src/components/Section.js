import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
	title,
	description,
	leftBtnText,
	rightBtnText,
	backgroundImg,
	arrow,
}) {
	return (
		<Container bgImage={backgroundImg}>
			<Fade bottom>
				<ItemText>
					<h1> {title} </h1>
					<p> {description} </p>
				</ItemText>
			</Fade>
			<Buttons>
				<Fade bottom>
					<ButtonGroup>
						<LeftButton>{leftBtnText}</LeftButton>
						{rightBtnText && <RightButton>{rightBtnText}</RightButton>}
					</ButtonGroup>
				</Fade>
				<DownArrow src={arrow} />
			</Buttons>
		</Container>
	);
}

export default Section;

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url("/images/model-s.jpg");
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	background-image: ${(props) => `url("/images/${props.bgImage}")`};
	scroll-snap-align: start;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;

	> h1 {
		font-size: 3rem;
		font-weight: 400;
	}

	> p {
		color: gray;
		opacity: 0.8;
	}
`;

const ButtonGroup = styled.div`
	display: flex;
	margin-bottom: 30px;

	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	background-color: rgba(23, 26, 32, 0.8);
	height: 40px;
	width: 256px;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 100px;
	opacity: 0.85;
	text-transform: uppercase;
	font-size: 12px;
	cursor: pointer;
	margin: 10px;
`;

const RightButton = styled(LeftButton)`
	background: white;
	opacity: 0.65;
	color: black;
`;

const DownArrow = styled.img`
	height: 40px;
	overflow-y: hidden;
	animation: animateDown infinite 1.5s;
`;

const Buttons = styled.div``;
