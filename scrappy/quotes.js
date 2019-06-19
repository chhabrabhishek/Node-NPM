const rq = require('request-promise');
const $ = require('cheerio');
const url = "https://brainyquote.com";
const chalk = require('chalk');

module.exports.scrapIt = function(){
    rq(url)
    .then(function(html){
        var quotes = [];
        var min = 0;
        var max = $('img',html).length - 1;
        for(let i=0 ; i<$('img',html).length ; i++){
            quotes.push($('img',html)[i].attribs.alt)
        }
        console.log(chalk.red.bold(quotes[Math.floor(Math.random() * (+max - +min))+ +min]));
    })
    .catch(function(error){
        console.log(error);
    })
}