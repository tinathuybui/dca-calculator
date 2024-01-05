import { ThemeProvider } from "@mui/material";
import { useTheme } from "hooks";
import { Routes } from "routes";

function App() {
	const theme = useTheme();

	return (
		<div>
			<ThemeProvider theme={theme}>
				<Routes />
			</ThemeProvider>
		</div>
	);
}

export default App;
