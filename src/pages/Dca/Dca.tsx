import { useState } from "react";

import { useParamsValue } from "hooks";
import style from "./Dca.module.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InitialInvestment from "./components/InitialInvestment";
import NewInvestment from "./components/NewInvestment";
import Result from "./components/Result";
import { PARAMS } from "./constants";
const initialDefault = 0;

const Dca = () => {
	const { searchParams, updateParamsValue } = useParamsValue({
		[PARAMS.initialSharePrice]: String(initialDefault),
		[PARAMS.initialNoOfUnits]: String(initialDefault),
		[PARAMS.initialPurchaseAmount]: String(initialDefault),
		[PARAMS.currentSharePrice]: String(initialDefault),
		[PARAMS.additionalInvestment]: String(initialDefault),
	});

	const [initialSharePrice, setInitialSharePrice] = useState<number>(
		Number(searchParams.get(PARAMS.initialSharePrice)) || initialDefault
	);
	const [initialNoOfUnits, setInitialNoOfUnits] = useState<number>(
		Number(searchParams.get(PARAMS.initialNoOfUnits)) || initialDefault
	);
	const [initialPurchaseAmount, setInitialPurchaseAmount] = useState<number>(
		Number(searchParams.get(PARAMS.initialPurchaseAmount)) || initialDefault
	);

	const [currentSharePrice, setCurrentSharePrice] = useState<number>(
		Number(searchParams.get(PARAMS.currentSharePrice)) || initialDefault
	);
	const [additionalInvestment, setAdditionalInvestment] = useState<number>(
		Number(searchParams.get(PARAMS.additionalInvestment)) || initialDefault
	);
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
				updateParamsValue={updateParamsValue}
			/>

			<NewInvestment
				currentSharePrice={currentSharePrice}
				setCurrentSharePrice={setCurrentSharePrice}
				additionalInvestment={additionalInvestment}
				setAdditionalInvestment={setAdditionalInvestment}
				additionalNoOfUnits={additionalNoOfUnits}
				setAdditionalNoOfUnits={setAdditionalNoOfUnits}
				updateParamsValue={updateParamsValue}
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
