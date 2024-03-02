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

	const [isEditing, setIsEditing] = useState({
		initialSharePrice: false,
		initialNoOfUnits: false,
		initialPurchaseAmount: false,
	});

	useEffect(() => {
		console.log(isEditing);
		if (isEditing.initialSharePrice) {
			setInitialPurchaseAmount(initialSharePrice * initialNoOfUnits);
		} else if (isEditing.initialNoOfUnits) {
			if (initialPurchaseAmount > 0 && isEditing.initialPurchaseAmount) {
				setInitialSharePrice(initialPurchaseAmount / initialNoOfUnits);
			} else if (initialSharePrice > 0) {
				setInitialPurchaseAmount(initialSharePrice * initialNoOfUnits);
			}
		} else if (isEditing.initialPurchaseAmount) {
			if (initialNoOfUnits > 0) {
				setInitialSharePrice(initialPurchaseAmount / initialNoOfUnits);
			}
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
		setIsEditing({
			initialSharePrice: true,
			initialNoOfUnits: false,
			initialPurchaseAmount: false,
		});
	};

	const handleNoOfUnitsChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = parseFloat(e.target.value);
		setInitialNoOfUnits(inputValue);
		setIsEditing({
			initialSharePrice: false,
			initialNoOfUnits: true,
			initialPurchaseAmount: false,
		});
	};

	const handleInitialPurchaseAmountChange = (
		e: ChangeEvent<HTMLInputElement>
	) => {
		const inputValue = removeLeadingZeros(e.target.value);
		setInitialPurchaseAmount(inputValue);
		setIsEditing({
			initialSharePrice: false,
			initialNoOfUnits: false,
			initialPurchaseAmount: true,
		});
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
