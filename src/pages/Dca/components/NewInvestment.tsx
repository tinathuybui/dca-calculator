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
import { textField } from "../Dca";
interface NewInvestmentProps {
	currentSharePrice: textField;
	setCurrentSharePrice: Dispatch<SetStateAction<textField>>;
	amountYouWantToBuy: textField;
	setAmountYouWantToBuy: Dispatch<SetStateAction<textField>>;
}

const NewInvestment: FC<NewInvestmentProps> = ({
	currentSharePrice,
	setCurrentSharePrice,
	amountYouWantToBuy,
	setAmountYouWantToBuy,
}) => {
	const additionalNoOfUnits =
		(amountYouWantToBuy ?? 0) / (currentSharePrice ?? 0);

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
