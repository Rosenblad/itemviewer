module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/node',
		'./rules/style',
		'./rules/variables',
		'./rules/es6',
		'./rules/imports',
		'./rules/strict',
		'./rules/react',
		'./rules/react-a11y',
	].map(require.resolve),
	env: {
		es6: true,
		node: true,
		browser: true,
		commonjs: true,
		jest: true,
	},
	parser: 'babel-eslint',
	parserOptions: {
		ecmaVersion: 2017,
		sourceType: 'module',
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
		},
	},
	rules: {
		strict: 'error',
	},
};
