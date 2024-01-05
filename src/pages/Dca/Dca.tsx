import { Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import style from "./Dca.module.scss";
import { round } from "./helper";

let initialPurchaseAmount = 0;
let numberOfUnits = 0;
let totalCost = 0;
let newSharePrice = 0;

const Dca = () => {
	const [initialSharePrice, setInitialSharePrice] = useState<number>();
	const [initialNoOfUnits, setInitialNoOfUnits] = useState<number>();

	if (initialSharePrice && initialNoOfUnits)
		initialPurchaseAmount = initialSharePrice * initialNoOfUnits;

	const [currentSharePrice, setCurrentSharePrice] = useState<number>();
	const [amountYouWantToBuy, setAmountYouWantToBuy] = useState<number>();

	if (initialNoOfUnits && currentSharePrice && amountYouWantToBuy) {
		numberOfUnits =
			initialNoOfUnits + amountYouWantToBuy / currentSharePrice;
		totalCost = initialPurchaseAmount + amountYouWantToBuy;

		newSharePrice = totalCost / numberOfUnits;
	}

	return (
		<div className={style.dca}>
			<Stack spacing={2}>
				<Stack spacing={2} direction="row">
					<TextField
						id="outlined-basic"
						label="Initial Share Price"
						variant="outlined"
						type="number"
						value={initialSharePrice}
						onChange={(e) =>
							setInitialSharePrice(Number(e.target.value))
						}
					/>
					<TextField
						id="outlined-basic"
						label="Initial No Of Units"
						variant="outlined"
						type="number"
						value={initialNoOfUnits}
						onChange={(e) =>
							setInitialNoOfUnits(Number(e.target.value))
						}
					/>
				</Stack>
				<Stack spacing={2} direction="row">
					<TextField
						id="outlined-basic"
						label="Current Share Price"
						variant="outlined"
						type="number"
						value={currentSharePrice}
						onChange={(e) =>
							setCurrentSharePrice(Number(e.target.value))
						}
					/>
					<TextField
						id="outlined-basic"
						label="Amount You Want To Buy"
						variant="outlined"
						type="number"
						value={amountYouWantToBuy}
						onChange={(e) =>
							setAmountYouWantToBuy(Number(e.target.value))
						}
					/>
				</Stack>
			</Stack>
			<Stack spacing={2} direction="column">
				<Typography variant="h5" gutterBottom>
					New share price: {round(newSharePrice)}
				</Typography>
				<Typography variant="h5" gutterBottom>
					New number of units: {round(numberOfUnits)}
				</Typography>
				<Typography variant="h5" gutterBottom>
					New total amount: {totalCost}
				</Typography>
			</Stack>
		</div>
	);
};

export default Dca;
