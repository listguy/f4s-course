const puppeteer = require('puppeteer')
const ScreenshotTester = require('puppeteer-screenshot-tester')

const path = 'file://' + __dirname + '/index.html'

jest.setTimeout(30000);
test('renders learn react link', async () => {
  const tester = await ScreenshotTester()
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({width: 1920, height: 1080})
  console.log('path', path)
  await page.goto(path, { waitUntil: 'networkidle0' })
  const result = await tester(page, 'expectedState', {
    fullPage: true,
  })
  await browser.close()
  expect(result).toBe(true)
});
