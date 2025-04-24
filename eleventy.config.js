module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/styles/comic.css");
    eleventyConfig.addPassthroughCopy("./src/styles/colorstage.css");
    eleventyConfig.addWatchTarget("./src");

    return{
        markdownTemplateEngine: 'njk',
	    dataTemplateEngine: 'njk',
    	htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
           layouts: "_includes/"
        },
    };
};