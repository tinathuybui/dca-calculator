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

	const initialPurchaseAmount =
		(initialSharePrice ?? 0) * (initialNoOfUnits ?? 0);

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
				amountYouWantToBuy={amountYouWantToBuy}
				setAmountYouWantToBuy={setAmountYouWantToBuy}
			/>

			<Result
				currentSharePrice={currentSharePrice ?? 0}
				initialNoOfUnits={initialNoOfUnits ?? 0}
				amountYouWantToBuy={amountYouWantToBuy ?? 0}
				initialPurchaseAmount={initialPurchaseAmount ?? 0}
				initialSharePrice={initialSharePrice ?? 0}
			/>

			<Footer />
		</div>
	);
};

export default Dca;
