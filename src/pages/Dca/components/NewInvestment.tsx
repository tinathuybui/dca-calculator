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
import {
	ChangeEvent,
	Dispatch,
	FC,
	SetStateAction,
	useEffect,
	useState,
} from "react";

interface NewInvestmentProps {
	currentSharePrice: number;
	additionalInvestment: number;
	setCurrentSharePrice: Dispatch<SetStateAction<number>>;
	setAdditionalInvestment: Dispatch<SetStateAction<number>>;
	additionalNoOfUnits: number;
	setAdditionalNoOfUnits: Dispatch<SetStateAction<number>>;
	updateParamsValue: (key: string, value: string) => void;
}

const NewInvestment: FC<NewInvestmentProps> = ({
	currentSharePrice,
	additionalInvestment,
	setCurrentSharePrice,
	setAdditionalInvestment,
	additionalNoOfUnits,
	setAdditionalNoOfUnits,
	updateParamsValue,
}) => {
	const [isEditing, setIsEditing] = useState(false);

	useEffect(() => {
		if (!isEditing && currentSharePrice >= 0 && additionalNoOfUnits >= 0) {
			setAdditionalInvestment(currentSharePrice * additionalNoOfUnits);
		}
	}, [
		isEditing,
		currentSharePrice,
		additionalNoOfUnits,
		additionalInvestment,
		setAdditionalInvestment,
	]);

	useEffect(() => {
		if (!isEditing && currentSharePrice >= 0 && additionalNoOfUnits >= 0) {
			setAdditionalInvestment(currentSharePrice * additionalNoOfUnits);
		}

		if (isEditing && currentSharePrice > 0) {
			setAdditionalNoOfUnits(additionalInvestment / currentSharePrice);
		}
	}, [
		isEditing,
		currentSharePrice,
		additionalNoOfUnits,
		additionalInvestment,
		setAdditionalInvestment,
		setAdditionalNoOfUnits,
		setCurrentSharePrice,
		updateParamsValue,
	]);

	const handleFocus = (event: { target: { select: () => void } }) => {
		event.target.select();
	};

	const handleCurrentSharePrice = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setCurrentSharePrice(parseFloat(inputValue));
		setIsEditing(false);
		updateParamsValue(PARAMS.currentSharePrice, inputValue.toString());
	};

	const handleAdditionalNoOfUnits = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setAdditionalNoOfUnits(parseFloat(inputValue));
		setIsEditing(false);
	};

	const handleAdditionalInvestment = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = e.target.value;
		setAdditionalInvestment(parseFloat(inputValue));
		setIsEditing(true);
		updateParamsValue(PARAMS.additionalInvestment, inputValue.toString());
	};

	return (
		<div className={style.section}>
			<Typography variant="h6" align="left" gutterBottom>
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
									onChange={handleCurrentSharePrice}
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
									onChange={handleAdditionalNoOfUnits}
								/>
							</TableCell>
							<TableCell>
								<TextField
									onFocus={handleFocus}
									placeholder="0"
									id="outlined-basic"
									variant="outlined"
									type="number"
									value={additionalInvestment}
									onChange={handleAdditionalInvestment}
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
