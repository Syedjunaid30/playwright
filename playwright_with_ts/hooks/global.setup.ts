import { chromium } from '@playwright/test';

export default async () => {

 const browser = await chromium.launch();
 const page = await browser.newPage();

await page.goto('https://www.saucedemo.com');

await page.locator('#user-name').fill('standard_user');
await page.locator('#password').fill('secret_sauce');
await page.locator('#login-button').click();

await page.waitForURL('**/inventory.html');

await page.context().storageState({ path: 'auth.json' });
await browser.close();
};
