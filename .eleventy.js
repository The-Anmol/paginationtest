const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy('./src');
  
  eleventyConfig.addNunjucksFilter("limit", function(array, limit) {
    return array.slice(minLimitVal, maxLimitVal); 
 });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    dir: {
      include: "_includes",
      input: "src",
      output: "public"
    }
  };
}
