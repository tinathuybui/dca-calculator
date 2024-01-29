import { useState } from "react";
import style from "./Dca.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InitialInvestment from "./components/InitialInvestment";
import NewInvestment from "./components/NewInvestment";
import Result from "./components/Result";

const Dca = () => {
	const [initialSharePrice, setInitialSharePrice] = useState<number>(0);
	const [initialNoOfUnits, setInitialNoOfUnits] = useState<number>(0);
	const [initialPurchaseAmount, setInitialPurchaseAmount] =
		useState<number>(0);

	const [currentSharePrice, setCurrentSharePrice] = useState<number>(0);
	const [amountYouWantToBuy, setAmountYouWantToBuy] = useState<number>(0);

	return (
		<div className={style.dca}>
			<Header />

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
				amountYouWantToBuy={amountYouWantToBuy}
				setAmountYouWantToBuy={setAmountYouWantToBuy}
			/>

			<Result
				currentSharePrice={currentSharePrice}
				initialNoOfUnits={initialNoOfUnits}
				amountYouWantToBuy={amountYouWantToBuy}
				initialSharePrice={initialSharePrice}
			/>

			<Footer />
		</div>
	);
};

export default Dca;
