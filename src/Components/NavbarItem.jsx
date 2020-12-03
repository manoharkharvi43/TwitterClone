import React from "react";
import styled from "styled-components";


const Wrapper = styled.div`
width:25vh;
height:7vh;
`
const NavbarItems = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: row;
	height: 100%;
	padding-left: 10px;
	margin-left:3%;
	cursor: pointer;
	&:hover {
		background-color: #162d40;
		border-radius: 30px;
	}
`;

const Icondiv = styled.div`
	margin-right: 20px;
	&:hover {
		color: #1da1f2;
	}
`;

const Header = styled.h3`
	color: #e8eaed;
	&:hover {
		color: #1da1f2;
	}
	font-weight:500;
`;


function NavbarItem({ icon, title , navClicked,id }) {

	const itemClicked = () =>{
		navClicked()
	}
	return (
 <>
		<Wrapper key={id}>
		<NavbarItems onClick={itemClicked}>
			<Icondiv>{icon}</Icondiv>
			{title ? (
				<Header>
					{title}
				</Header>
			) : null}
		</NavbarItems>

		</Wrapper>

		</>
	);
}

export default NavbarItem;
