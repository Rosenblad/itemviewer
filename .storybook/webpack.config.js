const { resolve } = require('path');

const packagesDir = resolve(__dirname, '../packages/');

module.exports = async ({ config, mode }) => {
	// config.module.rules[0].include.push(packagesDir);
	// config.module.rules[0].exclude.push(/node_modules/);
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader: require.resolve('awesome-typescript-loader'),
			}
		],
	});

	config.resolve.extensions.push('.ts', '.tsx');

	config.resolve.alias = Object.assign({}, config.resolve.alias, {
		'itemviewer': resolve(packagesDir, 'itemviewer/src'),
	});

	return config;
};
