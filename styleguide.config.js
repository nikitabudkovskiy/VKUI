const path = require('path');

module.exports = {
  title: 'VKUI styleguide',
  assetsDir: path.join(__dirname, 'dist'),
  styleguideDir: path.join(__dirname, 'docs'),
  styleguideComponents: {
    PlaygroundRenderer: path.join(__dirname, 'styleguide/components/PlaygroundRenderer'),
    StyleGuideRenderer: path.join(__dirname, 'styleguide/components/StyleGuideRenderer')
  },
  sections: [
    {
      name: 'Installation',
      content: 'styleguide/pages/installation.md'
    }, {
      name: 'Hello World',
      content: 'README.md'
    }, {
      name: 'The concept',
      content: 'styleguide/pages/concept.md'
    }, {
      name: 'Components',
      sections: [{
        name: 'Layout',
        components: () => [
          './src/components/View/View.js',
          './src/components/ScrollView/ScrollView.js',
          './src/components/Root/Root.js',
          './src/components/FixedLayout/FixedLayout.js'
        ]
      }, {
        name: 'Popouts',
        components: () => [
          './src/components/PopoutWrapper/PopoutWrapper.js',
          './src/components/ActionSheet/ActionSheet.js',
          './src/components/ActionSheetItem/ActionSheetItem.js',
          './src/components/Alert/Alert.js',
          // './src/components/AlertInput/AlertInput.js',
          './src/components/ScreenSpinner/ScreenSpinner.js'
        ]
      }, {
        name: 'Blocks',
        components: () => [
          './src/components/Button/Button.js',
          './src/components/Group/Group.js',
          './src/components/List/List.js',
          './src/components/ListItem/ListItem.js'
        ]
      }, {
        name: 'Forms',
        components: () => [

        ]
      }, {
        name: 'Helpers',
        components: () => [
          './src/components/Div/Div.js',
          './src/components/Flex/Flex.js',
          // './src/components/Icon/Icon.js',
          './src/components/Tappable/Tappable.js',
          './src/components/BackButton/BackButton.js'
        ]
      }]
    }
  ],
  context: {
    PropTypes: 'prop-types',
    ReactFrame: 'react-frame-component'
  },
  require: [path.resolve(__dirname, 'styleguide/setup.js')],
  webpackConfig: Object.assign({}, require('./webpack.config'), {
    resolve: {
      alias: {
        'rsg-components/Preview': path.join(__dirname, 'styleguide/Components/Preview')
      }
    }
  })
};
