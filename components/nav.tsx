import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

const StyledNav = styled.nav`
	width: 100%;
	height: 60px;
	display: flex;
	font-family: "Montserrat", sans-serif;
	justify-content: space-between;
	align-items: center;
`;

const StyledIconMenuWrapper = styled.div`
	transition: all 0.3s linear;
	display: flex;
	align-items: center;
`;

const Nav = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	return (
		<StyledNav>
			<h3>Nobo Bookings</h3>
			<StyledIconMenuWrapper onClick={() => setMenuOpen(!isMenuOpen)}>
				{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
			</StyledIconMenuWrapper>
		</StyledNav>
	);
};

export default Nav;
