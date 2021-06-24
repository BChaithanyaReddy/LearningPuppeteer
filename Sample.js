const puppeteer = require('puppeteer');

(async () => {
 

   const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto("https://www.amazon.in/");
title = await page.evaluate(() => {
return document.querySelector("#nav-xshop-container").textContent.trim();});
console.log(title);
 browser.close();
})();