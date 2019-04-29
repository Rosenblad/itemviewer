const { resolve } = require('path');

const packagesDir = resolve(__dirname, '../../src/packages/');

module.exports = async ({ config, mode }) => {
	config.module.rules.push({
		test: /\.(ts|tsx)$/,
		use: [
			{
				loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]],
        },
			}
		],
	});

	config.resolve.extensions.push('.ts', '.tsx');

	config.resolve.alias = Object.assign({}, config.resolve.alias, {
		'itemviewer': resolve(packagesDir, 'itemviewer/src'),
		'item-ui': resolve(packagesDir, 'item-ui/src'),
		'collectionviewer': resolve(packagesDir, 'collectionviewer/src'),
	});

	return config;
};
