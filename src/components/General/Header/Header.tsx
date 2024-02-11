import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Header.module.scss";

interface NavigationItem {
	key: string;
	label: string;
	linkto: string;
}

const ITEMS: NavigationItem[] = [
	{ key: "1", label: "Dca", linkto: "/" },
	{ key: "2", label: "Instructions", linkto: "/dca-instruction" },
];

const Header: React.FC = () => {
	const navigate = useNavigate();

	const onClick = (linkto: string) => {
		navigate(linkto);
	};

	return (
		<div className={style.header}>
			<Typography variant="h6" sx={{ color: "#ffffff" }}>
				Dollar Cost Average Calculator
			</Typography>
			<div className={style.header_items}>
				{ITEMS.map((item) => (
					<Button
						key={item.key}
						onClick={() => onClick(item.linkto)}
						variant="outlined"
					>
						{item.label}
					</Button>
				))}
			</div>
		</div>
	);
};

export default Header;
