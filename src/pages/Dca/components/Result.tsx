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
		(currentSharePrice / initialSharePrice) * 100 - 100;

	const newProfitLoss$ = initialProfitLoss$;
	const newProfitLosspercentage =
		newSharePrice &&
		((currentSharePrice - newSharePrice) / newSharePrice) * 100;

	const color = initialProfitLosspercentage >= 0 ? "green" : "red";

	return (
		<div className={style.section}>
			<Typography variant="h5" align="left" gutterBottom>
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
									{newSharePrice.toFixed(2)}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography>
									{numberOfUnits.toFixed(2)}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography>${totalCost.toFixed(2)}</Typography>
							</TableCell>
							<TableCell>
								<Typography color={color}>
									${newProfitLoss$.toFixed(2)}
								</Typography>
							</TableCell>
							<TableCell>
								<Typography color={color}>
									{initialProfitLosspercentage.toFixed(2)}%
								</Typography>
							</TableCell>
							<TableCell>
								<div className={style.resultPLIocn}>
									<Typography color={color}>
										{newProfitLosspercentage.toFixed(2)}%
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
		</div>
	);
};

export default Result;
