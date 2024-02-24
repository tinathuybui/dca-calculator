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
import { ChangeEvent, FC, useEffect, useState } from "react";
import { removeLeadingZeros } from "../utils";

interface InitialInvestmentProps {
	initialSharePrice: number;
	initialNoOfUnits: number;
	initialPurchaseAmount: number;
	setInitialSharePrice: (value: React.SetStateAction<number>) => void;
	setInitialNoOfUnits: (value: React.SetStateAction<number>) => void;
	setInitialPurchaseAmount: (value: React.SetStateAction<number>) => void;
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

	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		if (!isEditing && initialSharePrice >= 0 && initialNoOfUnits >= 0) {
			setInitialPurchaseAmount(initialSharePrice * initialNoOfUnits);
		}

		if (isEditing) {
			setInitialSharePrice(0);
			setInitialNoOfUnits(0);
		}
	}, [
		isEditing,
		initialSharePrice,
		initialNoOfUnits,
		initialPurchaseAmount,
		setInitialPurchaseAmount,
		setInitialSharePrice,
		setInitialNoOfUnits,
	]);

	const handleSharePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = parseFloat(e.target.value);
		setInitialSharePrice(inputValue);
		setIsEditing(false);
	};

	const handleNoOfUnitsChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = parseFloat(e.target.value);
		setInitialNoOfUnits(inputValue);
		setIsEditing(false);
	};

	const handleInitialPurchaseAmountChange = (
		e: ChangeEvent<HTMLInputElement>
	) => {
		const inputValue = removeLeadingZeros(e.target.value);
		setInitialPurchaseAmount(inputValue);
		setIsEditing(true);
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
