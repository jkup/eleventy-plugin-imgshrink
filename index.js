const { promises: fs } = require("fs");
const path = require("path");

const imgshrink = require("imgShrink");

module.exports = (eleventyConfig, options = {}) => {
  const outputDir = options.outputDir || "dist";

  eleventyConfig.on("afterBuild", async () => {
    console.log("Image shrinking started...");
    const files = await getFiles(outputDir);
    const imageFiles = files.filter(isImage);

    for (const file of imageFiles) {
      await imgshrink(path.join(outputDir, file));
    }
    console.log("Image shrinking completed.");
  });

  async function getFiles(dir) {
    const dirents = await fs.readdir(dir, { withFileTypes: true });
    const files = await Promise.all(
      dirents.map((dirent) => {
        const res = path.resolve(dir, dirent.name);
        return dirent.isDirectory() ? getFiles(res) : res;
      })
    );
    return Array.prototype.concat(...files);
  }

  function isImage(file) {
    return /\.(jpg|jpeg|png|gif|webp)$/.test(file);
  }
};
