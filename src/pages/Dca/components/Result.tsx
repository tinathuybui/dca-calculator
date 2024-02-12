import {
	Divider,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableRow,
	Typography,
} from "@mui/material";
import { Icon } from "components/General";
import style from "pages/Dca/Dca.module.scss";
import { FC } from "react";
import { formatNumberWithCommas } from "../utils";

interface ResultProps {
	currentSharePrice: number;
	initialNoOfUnits: number;
	amountYouWantToBuy: number;
	initialSharePrice: number;
}

const Result: FC<ResultProps> = ({
	currentSharePrice,
	initialNoOfUnits,
	amountYouWantToBuy,
	initialSharePrice,
}) => {
	const initialPurchaseAmount = initialSharePrice * initialNoOfUnits;

	const numberOfUnits =
		currentSharePrice &&
		initialNoOfUnits + amountYouWantToBuy / currentSharePrice;

	const totalCost = initialPurchaseAmount + amountYouWantToBuy;

	const newSharePrice = numberOfUnits ? totalCost / numberOfUnits : 0;

	const initialProfitLoss$ =
		currentSharePrice * initialNoOfUnits - initialPurchaseAmount;

	const initialProfitLosspercentage =
		initialSharePrice &&
		(currentSharePrice - initialSharePrice) / initialSharePrice;

	const newProfitLoss = initialProfitLoss$;
	const newProfitLosspercentage =
		newSharePrice && (currentSharePrice - newSharePrice) / newSharePrice;

	const color = initialProfitLosspercentage >= 0 ? "green" : "red";
	const profitOrLoss = newProfitLoss >= 0 ? "profit" : "loss";

	const conclusion = `If you were sell the share at the current price of ${formatNumberWithCommas(
		currentSharePrice
	)},
	you would receive a total amount of ${formatNumberWithCommas(
		totalCost + newProfitLoss
	)}, resulting in a ${profitOrLoss} of
	${formatNumberWithCommas(Math.abs(newProfitLoss))}.`;

	return (
		<div className={style.section}>
			<Typography variant="h6" align="left" gutterBottom>
				<IconButton color="primary" aria-label="result">
					<Icon name="Calculator" />
				</IconButton>
				Result
			</Typography>
			<Divider
				variant="middle"
				className={`${style.divider} ${style.resultDivider}`}
			/>
			<TableContainer>
				<Table>
					<TableBody>
						<TableRow className={style.tableHeader}>
							<TableCell>New Share Price</TableCell>
							<TableCell>New Number of Units</TableCell>
							<TableCell>Total Cost ($)</TableCell>
							<TableCell>Profit/Loss ($)</TableCell>
							<TableCell>Initial Profit/Loss (%)</TableCell>
							<TableCell>Profit/Loss (%)</TableCell>
						</TableRow>
						<TableRow className={style.tableContainer}>
							<TableCell>
								<Typography>
									{formatNumberWithCommas(newSharePrice)}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography>
									{formatNumberWithCommas(numberOfUnits, {
										style: undefined,
										currency: undefined,
									})}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography>
									{formatNumberWithCommas(totalCost)}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography color={color}>
									{formatNumberWithCommas(newProfitLoss)}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography color={color}>
									{formatNumberWithCommas(
										initialProfitLosspercentage,
										{ style: "percent" }
									)}
								</Typography>
							</TableCell>
							<TableCell>
								<div className={style.resultPLIocn}>
									<Typography color={color}>
										{formatNumberWithCommas(
											newProfitLosspercentage,
											{ style: "percent" }
										)}
									</Typography>
									{!!initialProfitLosspercentage && (
										<>
											{newProfitLosspercentage >
											initialProfitLosspercentage ? (
												<Icon
													name="MoveUpRight"
													color="green"
													size={18}
												/>
											) : (
												<Icon
													name="MoveDownRight"
													color="red"
													size={18}
												/>
											)}
										</>
									)}
								</div>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
			{conclusion && (
				<div className={style.conclusion}>
					<Typography variant="body1" align="center">
						{conclusion}
					</Typography>
				</div>
			)}
		</div>
	);
};

export default Result;
