import { useState } from "react";
import style from "./Dca.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InitialInvestment from "./components/InitialInvestment";
import NewInvestment from "./components/NewInvestment";
import Result from "./components/Result";

export type textField = number | undefined;

const Dca = () => {
	const [initialSharePrice, setInitialSharePrice] =
		useState<textField>(undefined);
	const [initialNoOfUnits, setInitialNoOfUnits] =
		useState<textField>(undefined);
	const [currentSharePrice, setCurrentSharePrice] =
		useState<textField>(undefined);
	const [amountYouWantToBuy, setAmountYouWantToBuy] =
		useState<textField>(undefined);

	const iSharePrice = initialSharePrice ? initialSharePrice : 0;
	const iNoOfUnits = initialNoOfUnits ? initialNoOfUnits : 0;
	const aYouWantToBuy = amountYouWantToBuy ? amountYouWantToBuy : 0;
	const cSharePrice = currentSharePrice ? currentSharePrice : 0;

	const initialPurchaseAmount = iSharePrice * iNoOfUnits;

	const additionalNoOfUnits = aYouWantToBuy / cSharePrice;

	return (
		<div className={style.dca}>
			<Header />

			<InitialInvestment
				initialSharePrice={initialSharePrice}
				initialNoOfUnits={initialNoOfUnits}
				setInitialSharePrice={setInitialSharePrice}
				setInitialNoOfUnits={setInitialNoOfUnits}
				initialPurchaseAmount={initialPurchaseAmount}
			/>

			<NewInvestment
				currentSharePrice={currentSharePrice}
				setCurrentSharePrice={setCurrentSharePrice}
				additionalNoOfUnits={additionalNoOfUnits}
				amountYouWantToBuy={amountYouWantToBuy}
				setAmountYouWantToBuy={setAmountYouWantToBuy}
			/>

			<Result
				cSharePrice={cSharePrice}
				iNoOfUnits={iNoOfUnits}
				aYouWantToBuy={aYouWantToBuy}
				initialPurchaseAmount={initialPurchaseAmount}
				iSharePrice={iSharePrice}
			/>

			<Footer />
		</div>
	);
};

export default Dca;
