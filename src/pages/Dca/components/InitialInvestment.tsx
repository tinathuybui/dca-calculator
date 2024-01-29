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
import { ChangeEvent, Dispatch, FC, SetStateAction, useEffect } from "react";
import { removeLeadingZeros } from "../utils";
interface InitialInvestmentProps {
	initialSharePrice: number;
	initialNoOfUnits: number;
	initialPurchaseAmount: number;
	setInitialSharePrice: Dispatch<SetStateAction<number>>;
	setInitialNoOfUnits: Dispatch<SetStateAction<number>>;
	setInitialPurchaseAmount: Dispatch<SetStateAction<number>>;
}

const InitialInvestment: FC<InitialInvestmentProps> = ({
	initialSharePrice,
	initialNoOfUnits,
	initialPurchaseAmount,
	setInitialSharePrice,
	setInitialNoOfUnits,
	setInitialPurchaseAmount,
}) => {
	const handleFocus = (event: { target: { select: () => void } }) => {
		event.target.select();
	};

	useEffect(() => {
		if (initialSharePrice && initialNoOfUnits)
			setInitialPurchaseAmount(initialSharePrice * initialNoOfUnits);
	}, [initialSharePrice, initialNoOfUnits, setInitialPurchaseAmount]);

	const handleSharePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = parseFloat(e.target.value) || 0;
		setInitialSharePrice(inputValue);
	};

	const handleNoOfUnitsChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = parseFloat(e.target.value) || 0;
		setInitialNoOfUnits(inputValue);
	};

	const handleInitialPurchaseAmountChange = (
		e: ChangeEvent<HTMLInputElement>
	) => {
		const inputValue = removeLeadingZeros(e.target.value) || 0;
		setInitialPurchaseAmount(inputValue);
		if (initialNoOfUnits !== 0)
			setInitialSharePrice(inputValue / initialNoOfUnits);
	};

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
									onFocus={handleFocus}
									placeholder="0"
									variant="outlined"
									type="number"
									value={initialSharePrice}
									onChange={handleSharePriceChange}
								/>
							</TableCell>
							<TableCell>
								<TextField
									onFocus={handleFocus}
									placeholder="0"
									variant="outlined"
									type="number"
									value={initialNoOfUnits}
									onChange={handleNoOfUnitsChange}
								/>
							</TableCell>
							<TableCell>
								<TextField
									onFocus={handleFocus}
									placeholder="0"
									variant="outlined"
									type="number"
									value={initialPurchaseAmount}
									onChange={handleInitialPurchaseAmountChange}
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
