import {
	ArrowDownward as ArrowDownwardIcon,
	ArrowUpward as ArrowUpwardIcon,
	Calculate as CalculateIcon,
	MonetizationOn as MonetizationOnIcon,
	TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";
import {
	Divider,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";
import style from "./Dca.module.scss";

type textField = number | undefined;

const Dca = () => {
	const [initialSharePrice, setInitialSharePrice] =
		useState<textField>(undefined);
	const [initialNoOfUnits, setInitialNoOfUnits] =
		useState<textField>(undefined);
	const [currentSharePrice, setCurrentSharePrice] =
		useState<textField>(undefined);
	const [amountYouWantToBuy, setAmountYouWantToBuy] =
		useState<textField>(undefined);

	const iSharePrice = initialSharePrice ? initialSharePrice : 0;
	const iNoOfUnits = initialNoOfUnits ? initialNoOfUnits : 0;
	const aYouWantToBuy = amountYouWantToBuy ? amountYouWantToBuy : 0;
	const cSharePrice = currentSharePrice ? currentSharePrice : 0;

	const initialPurchaseAmount = iSharePrice * iNoOfUnits;

	const numberOfUnits =
		cSharePrice && iNoOfUnits + aYouWantToBuy / cSharePrice;

	const totalCost = initialPurchaseAmount + aYouWantToBuy;
	const newSharePrice = numberOfUnits ? totalCost / numberOfUnits : 0;

	const initialProfitLoss$ = cSharePrice * iNoOfUnits - initialPurchaseAmount;

	const initialProfitLosspercentage =
		iSharePrice && (cSharePrice / iSharePrice) * 100 - 100;

	const newProfitLoss$ = initialProfitLoss$;
	const newProfitLosspercentage =
		newSharePrice && ((cSharePrice - newSharePrice) / newSharePrice) * 100;

	const additionalNoOfUnits = aYouWantToBuy / cSharePrice;

	return (
		<div className={style.dca}>
			<Typography variant="h3" align="center" gutterBottom>
				Dollar Cost Average Calculator
			</Typography>
			<div className={style.section}>
				<Typography variant="h5" align="left" gutterBottom>
					<IconButton color="primary" aria-label="initial-investment">
						<MonetizationOnIcon />
					</IconButton>
					Initial investment
				</Typography>
				<Divider variant="middle" className={style.divider} />

				<TableContainer className={style.tableContainer}>
					<Table>
						<TableHead>
							<TableRow className={style.tableHeader}>
								<TableCell>Share Price</TableCell>
								<TableCell>No Of Units</TableCell>
								<TableCell>Cost</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>
									<TextField
										placeholder="0"
										id="outlined-basic"
										variant="outlined"
										type="number"
										value={initialSharePrice}
										onChange={(e) => {
											const inputValue = e.target.value;
											setInitialSharePrice(
												parseFloat(inputValue)
											);
										}}
									/>
								</TableCell>
								<TableCell>
									<TextField
										placeholder="0"
										id="outlined-basic"
										variant="outlined"
										type="number"
										value={initialNoOfUnits}
										onChange={(e) =>
											setInitialNoOfUnits(
												Number(e.target.value)
											)
										}
									/>
								</TableCell>
								<TableCell>
									<TextField
										placeholder="0"
										id="outlined-basic"
										variant="outlined"
										type="number"
										value={initialPurchaseAmount}
										InputProps={{
											readOnly: true,
										}}
									/>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className={style.section}>
				<Typography variant="h5" align="left" gutterBottom>
					<IconButton color="primary" aria-label="new-investment">
						<TrendingUpIcon />
					</IconButton>
					New investment
				</Typography>
				<Divider variant="middle" className={style.divider} />

				<TableContainer className={style.tableContainer}>
					<Table>
						<TableHead>
							<TableRow className={style.tableHeader}>
								<TableCell>Current Share Price</TableCell>
								<TableCell>No Of Units</TableCell>
								<TableCell>Additional Investment</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>
									<TextField
										placeholder="0"
										id="outlined-basic"
										variant="outlined"
										type="number"
										value={currentSharePrice}
										onChange={(e) =>
											setCurrentSharePrice(
												Number(e.target.value)
											)
										}
									/>
								</TableCell>
								<TableCell>
									<TextField
										placeholder="0"
										id="outlined-basic"
										variant="outlined"
										type="number"
										value={additionalNoOfUnits}
										InputProps={{
											readOnly: true,
										}}
									/>
								</TableCell>
								<TableCell>
									<TextField
										placeholder="0"
										id="outlined-basic"
										variant="outlined"
										type="number"
										value={amountYouWantToBuy}
										onChange={(e) =>
											setAmountYouWantToBuy(
												Number(e.target.value)
											)
										}
									/>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className={style.section}>
				<Typography variant="h5" align="left" gutterBottom>
					<IconButton color="primary" aria-label="result">
						<CalculateIcon />
					</IconButton>
					Result
				</Typography>
				<Divider
					variant="middle"
					className={`${style.divider} ${style.resultDivider}`}
				/>
				<TableContainer className={style.tableContainer}>
					<Table>
						<TableBody>
							<TableRow className={style.tableHeader}>
								<TableCell className={style.resultTableCell}>
									New Share Price
								</TableCell>
								<TableCell className={style.resultTableCell}>
									New Number of Units
								</TableCell>
								<TableCell className={style.resultTableCell}>
									Total Cost ($)
								</TableCell>
								<TableCell className={style.resultTableCell}>
									Profit/Loss ($)
								</TableCell>
								<TableCell className={style.resultTableCell}>
									Initial Profit/Loss (%)
								</TableCell>
								<TableCell className={style.resultTableCell}>
									Profit/Loss (%)
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell className={style.resultTableCell}>
									<Typography
										className={style.resultTypography}
									>
										{newSharePrice.toFixed(2)}
									</Typography>
								</TableCell>
								<TableCell className={style.resultTableCell}>
									<Typography
										className={style.resultTypography}
									>
										{numberOfUnits.toFixed(2)}
									</Typography>
								</TableCell>
								<TableCell className={style.resultTableCell}>
									<Typography
										className={style.resultTypography}
									>
										${totalCost.toFixed(2)}
									</Typography>
								</TableCell>
								<TableCell className={style.resultTableCell}>
									<Typography
										className={`${style.resultTypography} ${
											newProfitLoss$ >= 0
												? style.greenText
												: style.redText
										}`}
									>
										${newProfitLoss$.toFixed(2)}
									</Typography>
								</TableCell>
								<TableCell className={style.resultTableCell}>
									<Typography
										className={`${style.resultTypography} ${
											initialProfitLosspercentage >= 0
												? style.greenText
												: style.redText
										}`}
									>
										{initialProfitLosspercentage.toFixed(2)}
										%
									</Typography>
								</TableCell>
								<TableCell className={style.resultTableCell}>
									<Typography
										className={`${style.resultTypography} ${
											newProfitLosspercentage >= 0
												? style.greenText
												: style.redText
										}`}
									>
										{newProfitLosspercentage.toFixed(2)}%
										{!!initialProfitLosspercentage && (
											<>
												{newProfitLosspercentage >
												initialProfitLosspercentage ? (
													<ArrowUpwardIcon
														style={{
															color: "green",
															transform:
																"rotate(45deg)",
														}}
													/>
												) : (
													<ArrowDownwardIcon
														style={{
															color: "red",
															transform:
																"rotate(-45deg)",
														}}
													/>
												)}
											</>
										)}
									</Typography>
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			</div>
			<div className={`${style.footer} ${style.section}`}>
				<Typography
					variant="body2"
					color="textSecondary"
					align="center"
				>
					Disclaimer: This calculator is for informational purposes
					only. It does not constitute financial advice, and you
					should consult with a qualified financial advisor before
					making any investment decisions.
				</Typography>
			</div>
		</div>
	);
};

export default Dca;
