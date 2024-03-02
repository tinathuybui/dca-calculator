import RefreshIcon from "@mui/icons-material/Refresh";
import { Button, Typography } from "@mui/material";
import { FC } from "react";
import style from "./Header.module.scss";

interface HeaderProps {
	handleReset: () => void;
}

const Header: FC<HeaderProps> = ({ handleReset }) => {
	return (
		<div className={style.header}>
			<Typography variant="h4" align="left" gutterBottom>
				Dollar Cost Average Calculator
			</Typography>

			<div>
				<Button onClick={handleReset}>
					<RefreshIcon />
				</Button>
			</div>
		</div>
	);
};

export default Header;
