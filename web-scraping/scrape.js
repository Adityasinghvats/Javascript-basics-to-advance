import request from "request";
import * as cheerio from 'cheerio';

request('https://www.jiscollege.ac.in/', (error, response, html) => {
    if(!error && response.statusCode === 200){
        // console.log(html)
        const $ = cheerio.load(html);

        // const heading = $('.header');
        // console.log(heading);

        const sidebar = $('.mySidebar');
        const element = sidebar.find('h2').text();
        console.log(element);
    }
})
