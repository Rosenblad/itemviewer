module.exports = {
	env: {
		es6: true,
		node: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'module',
		jsx: true,
	},
	rules: {
		'jsx-a11y/alt-text': 'off',
	}
}