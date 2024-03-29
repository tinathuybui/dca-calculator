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
import { PARAMS } from "pages/Dca/constants";
import { ChangeEvent, FC, useEffect, useState } from "react";
import { removeLeadingZeros } from "../utils";

interface InitialInvestmentProps {
	initialSharePrice: number;
	initialNoOfUnits: number;
	initialPurchaseAmount: number;
	setInitialSharePrice: (value: React.SetStateAction<number>) => void;
	setInitialNoOfUnits: (value: React.SetStateAction<number>) => void;
	setInitialPurchaseAmount: (value: React.SetStateAction<number>) => void;
	updateParamsValue: (key: string, value: string) => void;
}

const InitialInvestment: FC<InitialInvestmentProps> = ({
	initialSharePrice,
	initialNoOfUnits,
	initialPurchaseAmount,
	setInitialSharePrice,
	setInitialNoOfUnits,
	setInitialPurchaseAmount,
	updateParamsValue,
}) => {
	const handleFocus = (event: { target: { select: () => void } }) => {
		event.target.select();
	};

	const [isEditing, setIsEditing] = useState({
		initialSharePrice: false,
		initialNoOfUnits: false,
		initialPurchaseAmount: false,
	});

	const [isInitialSharePriceFirstEdit, setIsInitialSharePriceFirstEdit] =
		useState(false);

	useEffect(() => {
		console.log(isEditing);
		if (isEditing.initialSharePrice) {
			const res = initialSharePrice * initialNoOfUnits;
			setInitialPurchaseAmount(res);
			if (initialNoOfUnits === 0 && initialPurchaseAmount === 0) {
				setIsInitialSharePriceFirstEdit(true);
			}
			updateParamsValue(PARAMS.initialPurchaseAmount, res.toString());
		} else if (isEditing.initialNoOfUnits) {
			if (initialPurchaseAmount === 0) {
				setIsInitialSharePriceFirstEdit(true);
			}

			if (initialPurchaseAmount > 0 && !isInitialSharePriceFirstEdit) {
				const res = initialPurchaseAmount / initialNoOfUnits;
				setInitialSharePrice(res);
				updateParamsValue(PARAMS.initialSharePrice, res.toString());
			} else if (initialSharePrice > 0) {
				const res = initialSharePrice * initialNoOfUnits;
				setInitialPurchaseAmount(res);
				updateParamsValue(PARAMS.initialPurchaseAmount, res.toString());
			}
		} else if (isEditing.initialPurchaseAmount) {
			if (initialNoOfUnits > 0) {
				const res = initialPurchaseAmount / initialNoOfUnits;
				setInitialSharePrice(res);
				updateParamsValue(PARAMS.initialSharePrice, res.toString());
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
		updateParamsValue,
		isInitialSharePriceFirstEdit,
	]);

	const handleSharePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = parseFloat(e.target.value);
		setInitialSharePrice(inputValue);
		updateParamsValue(PARAMS.initialSharePrice, inputValue.toString());
		setIsEditing({
			initialSharePrice: true,
			initialNoOfUnits: false,
			initialPurchaseAmount: false,
		});
	};

	const handleNoOfUnitsChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = parseFloat(e.target.value);
		setInitialNoOfUnits(inputValue);
		updateParamsValue(PARAMS.initialNoOfUnits, inputValue.toString());
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
		updateParamsValue(PARAMS.initialPurchaseAmount, inputValue.toString());
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
