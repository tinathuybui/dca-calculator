import { render } from "@testing-library/react";
import Dca from "pages/Dca";

describe("PageA Component", () => {
	it("renders correctly", () => {
		const { getByText } = render(<Dca />);
		expect(getByText("Page A")).toBeInTheDocument();
	});
});
