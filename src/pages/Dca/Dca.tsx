import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import style from "./Dca.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InitialInvestment from "./components/InitialInvestment";
import NewInvestment from "./components/NewInvestment";
import Result from "./components/Result";
const Dca = () => {
	const initialSharePriceDefault = 0;
	const initialNoOfUnitsDefault = 0;
	const initialPurchaseAmountDefault = 0;
	const currentSharePriceDefault = 0;
	const additionalInvestmentDefault = 0;
	const additionalNoOfUnitsDefault = 0;

	const [initialSharePrice, setInitialSharePrice] = useState<number>(
		initialSharePriceDefault
	);
	const [initialNoOfUnits, setInitialNoOfUnits] = useState<number>(
		initialNoOfUnitsDefault
	);
	const [initialPurchaseAmount, setInitialPurchaseAmount] = useState<number>(
		initialPurchaseAmountDefault
	);

	const [currentSharePrice, setCurrentSharePrice] = useState<number>(
		currentSharePriceDefault
	);
	const [additionalInvestment, setAdditionalInvestment] = useState<number>(
		additionalInvestmentDefault
	);
	const [additionalNoOfUnits, setAdditionalNoOfUnits] = useState<number>(
		additionalNoOfUnitsDefault
	);

	const handleReset = () => {
		console.log("Before Reset:");
		console.log("additionalNoOfUnits:", additionalNoOfUnits);
		setInitialSharePrice(initialSharePriceDefault);
		setInitialNoOfUnits(initialNoOfUnitsDefault);
		setInitialPurchaseAmount(initialPurchaseAmountDefault);
		setCurrentSharePrice(currentSharePriceDefault);
		setAdditionalInvestment(additionalInvestmentDefault);
		setAdditionalNoOfUnits(additionalNoOfUnitsDefault);
		console.log("After Reset:");
		console.log("additionalNoOfUnits:", additionalNoOfUnitsDefault);
	};
	return (
		<div className={`${style.dca}`}>
			<Header />
			<div style={{ display: "flex", justifyContent: "flex-end" }}>
				<IconButton onClick={handleReset}>
					<RefreshIcon />
				</IconButton>
			</div>

			<InitialInvestment
				initialSharePrice={initialSharePrice}
				initialNoOfUnits={initialNoOfUnits}
				initialPurchaseAmount={initialPurchaseAmount}
				setInitialSharePrice={setInitialSharePrice}
				setInitialNoOfUnits={setInitialNoOfUnits}
				setInitialPurchaseAmount={setInitialPurchaseAmount}
			/>

			<NewInvestment
				currentSharePrice={currentSharePrice}
				setCurrentSharePrice={setCurrentSharePrice}
				additionalInvestment={additionalInvestment}
				setAdditionalInvestment={setAdditionalInvestment}
				additionalNoOfUnits={additionalNoOfUnits}
				setAdditionalNoOfUnits={setAdditionalNoOfUnits}
			/>

			<Result
				currentSharePrice={currentSharePrice}
				initialNoOfUnits={initialNoOfUnits}
				amountYouWantToBuy={additionalInvestment}
				initialSharePrice={initialSharePrice}
			/>

			<Footer />
		</div>
	);
};

export default Dca;
