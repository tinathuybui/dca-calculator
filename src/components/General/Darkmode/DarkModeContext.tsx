import React, { ReactNode, createContext, useContext, useState } from "react";

interface DarkModeContextType {
	isDarkMode: boolean;
	toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextType | undefined>(
	undefined
);

interface DarkModeProviderProps {
	children: ReactNode;
}

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({
	children,
}) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setIsDarkMode((prevMode) => !prevMode);
	};

	const contextValue: DarkModeContextType = {
		isDarkMode,
		toggleDarkMode,
	};

	return (
		<DarkModeContext.Provider value={contextValue}>
			{children}
		</DarkModeContext.Provider>
	);
};

export const useDarkMode = (): DarkModeContextType => {
	const context = useContext(DarkModeContext);
	if (!context) {
		throw new Error("useDarkMode must be used within a DarkModeProvider");
	}
	return context;
};
