import React, { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useMediaQuery } from "react-responsive";

const StyledNav = styled.nav`
	color: #fff;
	position: relative;
	left: 32px;
	right: 32px;
	height: 60px;
	display: flex;
	margin: auto;
	justify-content: space-between;
	align-items: center;
`;
const NavList = styled.ul`
	display: flex;
	justify-content: flex-end;
	flex: 1;
`;
const NavListItem = styled.li`
	margin-left: 10px;
	font-size: 18px;
	list-style-type: none;
`;
const StyledIconMenuWrapper = styled.div`
	transition: all 0.3s linear;
	display: flex;
	align-items: center;
	cursor: pointer;
`;

const StyledLink = styled.a`
	text-decoration: none;
	color: #fff;
`;

const Nav = ({ ...otherProps }) => {
	const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)" });
	const [isMenuOpen, setMenuOpen] = useState(false);
	return (
		<StyledNav {...otherProps}>
			<h2>
				<StyledLink href="/">Nobo Bookings</StyledLink>
			</h2>

			{!isMobileScreen && (
				<NavList>
					<NavListItem>
						<StyledLink href="/">Home</StyledLink>
					</NavListItem>
					<NavListItem>
						<StyledLink href="/artist">Artists</StyledLink>
					</NavListItem>
				</NavList>
			)}
			{isMobileScreen && (
				<StyledIconMenuWrapper onClick={() => setMenuOpen(!isMenuOpen)}>
					{isMenuOpen ? <CloseIcon /> : <MenuIcon />}
				</StyledIconMenuWrapper>
			)}
		</StyledNav>
	);
};

export default Nav;
