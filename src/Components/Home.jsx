import React from "react";
import styled from "styled-components";
import * as icon from "react-icons/all";


const ModalView1 = styled.div`
	position: absolute;
	width: 35%;
	height: 35%;
	left: 30%;
	top: 4%;
	border-radius: 10px;
	border: 1px solid rgba(240, 240, 240, 0.2);
	display: grid;
	grid-template-rows: 20% 60% 20%;
	grid-template-columns: 15% 85%;
`;

const Header1 = styled.div`
	grid-row: 1/2;
	grid-column: 1/3;
	background-color: #15202b;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 1%;
	border-bottom: 1px solid rgba(240, 240, 240, 0.2);
`;
const Profile1 = styled.div`
	grid-row: 2/4;
	grid-column: 1/2;
	background-color: #15202b;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	padding-top: 10%;
`;

const TextInput1 = styled.div`
	background-color: #15202b;
	grid-row: 2/3;
	grid-column: 2/4;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
    flex-direction: column;
 
    a{
         color:#1a91da;
         padding:1%;
         border-radius:30px;
         cursor: pointer;
         font-size:12px;
         &:hover{
            background-color: #162d40;
         }
     }
`;

const InputField = styled.input`
	padding-top: 2%;
	background-color: #15202b;
	border: 0;
	font-size: 20px;
	color: #8899a6;
	&::placeholder {
		color: #8899a6;
	}
	&:focus {
		border: 0px;
		outline: none;
		caret-color: #8899a6;
	}
`;

const Footer1 = styled.div`
	grid-row: 3/4;
	grid-column: 2/4;
	border-top: 1px solid rgba(240, 240, 240, 0.2);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	div {
		width: 40%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	button {
		height: 80%;
		width: 20%;
		background-color: #1a91da;
		outline: none;
		color: white;
		border: rgba(240, 240, 240, 0.5);
		cursor: pointer;
		border-radius: 20rem;
	}
`;

function Modal() {

	return (
		<div>
             <h3 style={{color:'white'}}>Home</h3>
			<ModalView1>
				<Header1>
               
				</Header1>
				<Profile1>
					<icon.FaRegUserCircle size={40} color="#8899a6" />
				</Profile1>
				<TextInput1>
					<InputField autoFocus placeholder={`what's Happening`}></InputField>

					<a>🌏 Everyone can reply</a>
				</TextInput1>

				<Footer1>
					<div>
						<icon.IoImageOutline
							size={22}
							color="#1a91da"
							style={{ marginRight: "10px", cursor: "pointer" }}
							onClick={() => alert("do nothing")}
						/>
						<icon.AiOutlineFileGif
							size={22}
							color="#1a91da"
							style={{ marginRight: "10px", cursor: "pointer" }}
							onClick={() => alert("do nothing")}
						/>
						<icon.IoStatsChartSharp
							size={22}
							color="#1a91da"
							rotate={270}
							style={{ marginRight: "10px", cursor: "pointer" }}
							onClick={() => alert("do nothing")}
						/>
						<icon.VscSmiley
							size={22}
							color="#1a91da"
							style={{ marginRight: "10px", cursor: "pointer" }}
							onClick={() => alert("do nothing")}
						/>
						<icon.AiOutlineSchedule
							size={22}
							color="#1a91da"
							style={{ marginRight: "10px", cursor: "pointer" }}
							onClick={() => alert("do nothing")}
						/>
					</div>

					<button type="button" disabled>
						Tweet
					</button>
				</Footer1>
			</ModalView1>
		</div>
	);
}

export default Modal;
