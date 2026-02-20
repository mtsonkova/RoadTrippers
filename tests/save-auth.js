const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: false }); // opens real browser
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://roadtrippers.com/');

  // Log in manually in the browser window that opens
  // Complete the CAPTCHA yourself, then press Resume in Playwright Inspector
  await page.pause();

  // Save session after you're logged in
  await context.storageState({ path: 'playwright/.auth/user.json' });
  console.log('✅ Auth state saved to playwright/.auth/user.json');

  await browser.close();
})();