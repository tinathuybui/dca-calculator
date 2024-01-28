import { Typography } from "@mui/material";
import { FC } from "react";

const Footer: FC = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			Disclaimer: This calculator is for informational purposes only. It
			does not constitute financial advice, and you should consult with a
			qualified financial advisor before making any investment decisions.
		</Typography>
	);
};

export default Footer;
