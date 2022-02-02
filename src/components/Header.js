import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
	const [burgerState, setBurgerState] = useState(false);
	const cars = useSelector(selectCars);

	return (
		<Container>
			<a href="">
				<img src="/images/logo.svg" alt="Tesla" />
			</a>
			<Menu>
				{cars &&
					cars.map((car, index) => (
						<a key={index} href="#">
							{car}
						</a>
					))}
			</Menu>
			<RightMenu>
				<a href="#">Shop</a>
				<a href="#">Tesla Account</a>
				<CustomMenu onClick={() => setBurgerState(true)} />
			</RightMenu>
			<BurgerNav show={burgerState}>
				<CloseWrapper>
					<CustomClose onClick={() => setBurgerState(false)} />
				</CloseWrapper>

				<BurgerNavOptions>
					{cars &&
						cars.map((car, index) => (
							<li>
								<a key={index} href="#">
									{car}
								</a>
							</li>
						))}
					<li>
						<a href="#">Existing Inventory</a>
					</li>
					<li>
						<a href="#">Used Inventory</a>
					</li>
					<li>
						<a href="#">Trade-In</a>
					</li>
					<li>
						<a href="#">Cybertruck</a>
					</li>
					<li>
						<a href="#">Roadster</a>
					</li>
					<li>
						<a href="#">Semi</a>
					</li>
					<li>
						<a href="#">Charging</a>
					</li>
					<li>
						<a href="#">Powerwall</a>
					</li>
					<li>
						<a href="#">Commercial Energy</a>
					</li>
					<li>
						<a href="#">Utilities</a>
					</li>
					<li>
						<a href="#">Test Drive</a>
					</li>
					<li>
						<a href="#">Find Us</a>
					</li>
					<li>
						<a href="#">Support</a>
					</li>
					<li>
						<a href="#">Shop</a>
					</li>
					<li>
						<a href="#">Tesla Account</a>
					</li>
				</BurgerNavOptions>
			</BurgerNav>
		</Container>
	);
}

export default Header;

const Container = styled.div`
	min-height: 60px;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;

	> img {
		width: 120px;
		height: 30px;
		object-fit: contain;
	}
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	flex: 1;
	justify-content: center;

	> a {
		font-weight: 600;
		text-transform: uppercase;
		padding: 0 10px;
		flex-wrap: nowrap;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;

	> a {
		font-weight: 500;
		text-transform: uppercase;
		flex-wrap: nowrap;
		margin-right: 10px;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const BurgerNav = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	background-color: white;
	width: 300px;
	z-index: 2;
	overflow: scroll;

	::-webkit-scrollbar {
		display: none;
	}

	transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
	transition: transform 0.2s ease-in-out;
`;

const BurgerNavOptions = styled.div`
	list-style: none;
	padding: 20px;
	display: flex;
	flex-direction: column;
	text-align: start;
	padding-bottom: 20em;

	> li {
		padding: 15px;
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);

		> a {
			font-weight: 500;
		}
	}
`;

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 1em 20px 20px 0;
`;

const CustomClose = styled(CloseIcon)`
	cursor: pointer;
	position: fixed;
`;
