import { useState } from "react";

import style from "./Dca.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InitialInvestment from "./components/InitialInvestment";
import NewInvestment from "./components/NewInvestment";
import Result from "./components/Result";

const initialDefault = 0;

const Dca = () => {
	// const { isDarkMode, toggleDarkMode } = useDarkMode();

	const [initialSharePrice, setInitialSharePrice] =
		useState<number>(initialDefault);
	const [initialNoOfUnits, setInitialNoOfUnits] =
		useState<number>(initialDefault);
	const [initialPurchaseAmount, setInitialPurchaseAmount] =
		useState<number>(initialDefault);

	const [currentSharePrice, setCurrentSharePrice] =
		useState<number>(initialDefault);
	const [additionalInvestment, setAdditionalInvestment] =
		useState<number>(initialDefault);
	const [additionalNoOfUnits, setAdditionalNoOfUnits] =
		useState<number>(initialDefault);

	const handleReset = () => {
		setInitialSharePrice(initialDefault);
		setInitialNoOfUnits(initialDefault);
		setInitialPurchaseAmount(initialDefault);
		setCurrentSharePrice(initialDefault);
		setAdditionalInvestment(initialDefault);
		setAdditionalNoOfUnits(initialDefault);
	};

	return (
		<div className={style.dca}>
			<Header handleReset={handleReset} />

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
