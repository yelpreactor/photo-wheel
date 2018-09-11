const puppeteer = require('puppeteer');
const pageUrl ='http://localhost:3001/';

let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
	browser = await puppeteer.launch({
		headless: false,
		slowMo: 80,
		args: [`--window-size=${width},${height}`]
	});
	page = await browser.newPage();
	await page.setViewport({ width, height });
});

afterAll(() => {
	browser.close();
})


describe('my first test', () => {
  
  beforeEach(async () => {
    await page.goto(pageUrl, {waitUntil: 'networkidle2'});
  });

	test('test to see if div with hi was found', async () => {
    var div = '.hi';
    var html = await page.$eval(div, e => e.textContent);
    expect(html).toEqual('test');
	});

});