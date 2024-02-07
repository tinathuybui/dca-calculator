import { AppBar, Button, Toolbar, Typography, useTheme } from "@mui/material";
import { MUIStyledCommonProps, styled } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

interface NavigationItem {
	key: string;
	label: string;
	linkto: string;
}

const ITEMS: NavigationItem[] = [
	{ key: "1", label: "Dca", linkto: "/" },
	{ key: "2", label: "Dca Instructions", linkto: "/dca-instruction" },
];

type StyledAppBarProps = MUIStyledCommonProps & {
	theme?: {
		zIndex?: {
			drawer: number;
		};
	};
};

const StyledAppBar = styled(AppBar)<StyledAppBarProps>(({ theme }) => ({
	zIndex: theme?.zIndex?.drawer ?? 1,
}));

const StyledToolbar = styled(Toolbar)({
	flexGrow: 1,
});

const Header: React.FC = () => {
	const theme = useTheme();
	const navigate = useNavigate();

	const onClick = (linkto: string) => {
		navigate(linkto);
	};

	return (
		<StyledAppBar position="sticky" theme={theme}>
			<StyledToolbar>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					Dollar Cost Average Calculator
				</Typography>
				{ITEMS.map((item) => (
					<Button
						key={item.key}
						color="inherit"
						onClick={() => onClick(item.linkto)}
					>
						{item.label}
					</Button>
				))}
			</StyledToolbar>
		</StyledAppBar>
	);
};

export default Header;
