import "./App.css";
import NavbarItem from "./Components/NavbarItem";
import DATA from "./Components/data";
import { BrowserRouter, Link , NavLink } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";
import styled from "styled-components";
import { useState } from "react";
import Modal from "./Components/Modal";

const Button = styled.button`
	background-color: #1a91da;
	padding: 16px 12px;
	width: 13rem;
	height: 3rem;
	font-size: 15px;
	border-radius: 20rem;
	outline: none;
	color: white;
	border: rgba(240, 240, 240, 0.5);
	cursor: pointer;
	margin-top: 4%;
	text-align: center;
`;

const MoreComp = styled.div`
width:10rem;
height:20rem;
background-color: #15202b;
position:absolute;
top:20%;
`
function App() {
	const [modal, showmodal] = useState(false);
	const[more  ,showmore] = useState(false)
	const itemClicked = (data) => {
		if(data === 'More')
		showmore(true)
	};

	const showmodalScreen = () => {
		if (modal) {
			showmodal(false);
		}
		if(more){
			showmore(false)
		}
	};

	return (
		<>
			<BrowserRouter>
				<div className={modal ? "containerShow" : "container"}>
					{modal ? <Modal modalclose={() => showmodal(false)} /> : null}

					{/* navbar */}
					<div className="container1" onClick={showmodalScreen}>
						<div className="navbar">
							{DATA.map((data, index) => (
								<>
									<NavLink
										to={data.link}
										style={{ textDecoration: "none" }}
										activeStyle={{
											fontWeight: "bold",
											Color:"#162d40",
											borderRadius: "30px",
										  }}
									>
										<NavbarItem
											icon={data.icon}
											title={data.title}
											navClicked={() => itemClicked(data.title)}
											id={index}
										/>
									</NavLink>
								</>
							))}

							<Button onClick={() => showmodal(!modal)}>Tweet </Button>
							{ more ?<MoreComp />:null}
				
						</div>
					</div>
					{/* navbar */}

					{/* //content */}
					<div className="container2" onClick={showmodalScreen}>
						<AllRoutes />


					</div>

				
					{/* //content */}

					<div className="container3" onClick={showmodalScreen}>
						<h1>container3</h1>
					</div>
				</div>
			</BrowserRouter>
		</>
	);
}

export default App;
