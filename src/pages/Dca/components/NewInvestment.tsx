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
import { Icon } from "components/General";
import style from "pages/Dca/Dca.module.scss";
import { Dispatch, FC, SetStateAction } from "react";
interface NewInvestmentProps {
	currentSharePrice: number;
	setCurrentSharePrice: Dispatch<SetStateAction<number>>;
	amountYouWantToBuy: number;
	setAmountYouWantToBuy: Dispatch<SetStateAction<number>>;
}

const NewInvestment: FC<NewInvestmentProps> = ({
	currentSharePrice,
	setCurrentSharePrice,
	amountYouWantToBuy,
	setAmountYouWantToBuy,
}) => {
	const additionalNoOfUnits = amountYouWantToBuy / currentSharePrice;

	const handleFocus = (event: { target: { select: () => void } }) => {
		event.target.select();
	};

	return (
		<div className={style.section}>
			<Typography variant="h5" align="left" gutterBottom>
				<IconButton color="primary" aria-label="new-investment">
					<Icon name="TrendingUp" />
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
									onFocus={handleFocus}
									placeholder="0"
									id="outlined-basic"
									variant="outlined"
									type="number"
									value={currentSharePrice}
									onChange={(e) => {
										const inputValue = e.target.value;
										setCurrentSharePrice(
											parseFloat(inputValue)
										);
									}}
								/>
							</TableCell>
							<TableCell>
								<TextField
									onFocus={handleFocus}
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
									onFocus={handleFocus}
									placeholder="0"
									id="outlined-basic"
									variant="outlined"
									type="number"
									value={amountYouWantToBuy}
									onChange={(e) => {
										const inputValue = e.target.value;
										setAmountYouWantToBuy(
											parseFloat(inputValue)
										);
									}}
								/>
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default NewInvestment;
