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
interface InitialInvestmentProps {
	initialSharePrice: textField;
	initialNoOfUnits: textField;
	setInitialSharePrice: Dispatch<SetStateAction<textField>>;
	setInitialNoOfUnits: Dispatch<SetStateAction<textField>>;
	initialPurchaseAmount: textField;
}

const InitialInvestment: FC<InitialInvestmentProps> = ({
	initialSharePrice,
	initialNoOfUnits,
	setInitialSharePrice,
	setInitialNoOfUnits,
	initialPurchaseAmount,
}) => {
	return (
		<div className={style.section}>
			<Typography variant="h5" align="left" gutterBottom>
				<IconButton color="primary" aria-label="initial-investment">
					<Icon name="CircleDollarSign" />
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
									variant="outlined"
									type="number"
									value={initialNoOfUnits}
									onChange={(e) => {
										const inputValue = e.target.value;
										setInitialNoOfUnits(
											parseFloat(inputValue)
										);
									}}
								/>
							</TableCell>
							<TableCell>
								<TextField
									placeholder="0"
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
	);
};

export default InitialInvestment;
