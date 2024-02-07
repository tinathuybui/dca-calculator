import { ThemeProvider } from "@mui/material";
import { useTheme } from "hooks";
import { Routes } from "routes";
import Header from "./Header";

function App() {
	const theme = useTheme();

	return (
		<div>
			<ThemeProvider theme={theme}>
				<Header />
				<Routes />
			</ThemeProvider>
		</div>
	);
}

export default App;
