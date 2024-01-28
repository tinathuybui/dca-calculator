module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"max-params": ["error", 7],
		"max-lines": ["warn", 150],
		"no-var": "error",
		"prefer-template": "error",
		eqeqeq: "error",
	},
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaFeatures: {
			jsx: false,
		},
	},
	overrides: [
		{
			files: ["*.test.tsx", "*.test.ts", "*.testkit.ts"],
			rules: {
				"max-lines": "off",
			},
		},
	],
};
