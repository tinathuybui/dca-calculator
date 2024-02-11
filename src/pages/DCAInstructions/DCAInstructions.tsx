import { Typography } from "@mui/material";
import { FC } from "react";
import style from "./DCAInstructions.module.scss";

const Header: FC = () => {
	return (
		<Typography variant="h4" align="center" gutterBottom>
			Instructions
		</Typography>
	);
};

const DCAInstructions: FC = () => {
	return (
		<div className={style.ins}>
			<Header />

			<Typography variant="body1" paragraph>
				<strong>1. Initial Input:</strong>
				<ul>
					<li>
						Enter the <strong>Initial Share Price</strong>: The
						price at which you initially purchased the asset.
					</li>
					<li>
						Provide the <strong>Initial Number of Units</strong>:
						The number of units you currently own.
					</li>
					<li>
						Enter the <strong>Current Share Price</strong>: The
						current price of the asset you are considering.
					</li>
					<li>
						Specify the <strong>Number of Units</strong> or{" "}
						<strong>Additional Investment</strong>: Depending on
						your preference, input either the additional number of
						units you want to purchase or the amount you plan to
						invest.
					</li>
				</ul>
			</Typography>

			<Typography variant="body1" paragraph>
				<strong>2. Review Results:</strong>
				<ul>
					<li>
						The calculator will display the{" "}
						<strong>New Share Price</strong>: The estimated new
						price per unit after your investment.
					</li>
					<li>
						You'll see the <strong>New Number of Units</strong>: The
						total number of units you would have after the
						investment.
					</li>
					<li>
						Check the <strong>Total Cost</strong>: The combined cost
						of your initial and additional investment.
					</li>
					<li>
						Explore the <strong>Profit/Loss ($)</strong>: The
						potential profit or loss from your investment.
					</li>
					<li>
						Analyze the <strong>Initial Profit/Loss (%)</strong>:
						The percentage change in the asset's value from your
						initial investment.
					</li>
					<li>
						Examine the <strong>Profit/Loss (%)</strong>: The
						projected percentage change in the asset's value after
						your additional investment.
					</li>
				</ul>
			</Typography>

			<Typography variant="body1" paragraph>
				<strong>3. Understanding the Results:</strong>
				<ul>
					<li>
						Positive values indicate a potential profit, while
						negative values suggest a potential loss.
					</li>
					<li>
						Percentage changes provide insights into the
						profitability of your investment strategy.
					</li>
				</ul>
			</Typography>

			<Typography variant="body1" paragraph>
				<strong>4. Additional Features:</strong>
				<ul>
					<li>
						Icons may indicate whether the projected percentage
						change is an improvement or decline compared to the
						initial investment.
					</li>
				</ul>
			</Typography>

			<Typography variant="body1" paragraph>
				<strong>5. Use Responsibly:</strong>
				<ul>
					<li>
						Use this tool as a guide for understanding potential
						outcomes.
					</li>
					<li>
						Always consider your financial goals and risk tolerance.
					</li>
				</ul>
			</Typography>

			<Typography variant="body1">
				Remember, investing involves risks, and past performance is not
				indicative of future results. It's crucial to conduct thorough
				research and consult with financial professionals before making
				investment decisions.
			</Typography>
		</div>
	);
};

export default DCAInstructions;
