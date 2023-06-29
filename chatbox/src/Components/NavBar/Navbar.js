import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/navbar.css";
// Importing Logo
import Logo from "../../Assets/logo.png";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import { Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCarRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import { useState } from "react";

const Navbar = () => {
	// Constant used for responsive design
	const [openMenu, setOpenMenu] = useState(false);
	const menuOptions = [{ text: "Home", icon: <HomeIcon></HomeIcon> }];

	return (
		<header>
			<div className="logo-container">
				<img src={Logo} />
			</div>
			<nav>
				<ul className="nav-links">
					<li className="nav-links-item">
						<Link to="/about" className="link">
							About us
						</Link>
					</li>
					<li className="nav-links-item">
						<Link to="/chatbox" className="link">
							Chatbox
						</Link>
					</li>
				</ul>
			</nav>
			<a className="cta" href="#">
				<button>Contact</button>
			</a>
		</header>
	);
};

export default Navbar;
