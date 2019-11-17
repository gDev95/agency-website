import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledNav = styled.nav`
    width: 100%;
    height: 60px;
	display: flex;
	justify-content: flex-end;
	ul {

		display: flex;
        align-items:center;
		li {
            margin: 5px 5px
			list-style-type: none;

			a {
				text-decoration: none;
                color: #000;
                font-family: 'Open Sans Condensed', sans-serif;
                font-size:25px;
            }
            &:hover {
                border-bottom: 1px solid #000;
            }
		}
	}
`;

const Nav = () => (
	<StyledNav>
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a>About</a>
				</Link>
			</li>
			<li>
				<Link href="/artists">
					<a>Artists</a>
				</Link>
			</li>
		</ul>
	</StyledNav>
);

export default Nav;
