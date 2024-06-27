# eleventy-plugin-imgshrink

Compress the images in your eleventy site.

## Description

`eleventy-plugin-imgshrink` is an Eleventy plugin that optimizes the images in your site.

## Installation

To install `eleventy-plugin-imgshrink`, simply run the following command:

```shell
npm install eleventy-plugin-imgshrink
```

## Usage

Once installed, you can enable the plugin in your Eleventy configuration file (`eleventy.config.js`) by adding the following code:

```javascript
const imgshrinkPlugin = require("eleventy-plugin-imgshrink");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(imgshrinkPlugin);
};
```

That's it! Now, every time you build your Eleventy site, `eleventy-plugin-imgshrink` will automatically optimize all of your images.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request on the [GitHub repository](https://github.com/jkup/eleventy-plugin-imgshrink).

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
