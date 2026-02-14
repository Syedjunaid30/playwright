import { test, expect } from '@playwright/test';
import { BASE_URL } from '../../env/qa.env';

test('@regression Dashboard Navigation', async ({ page }) => {

  await page.goto(BASE_URL);

  // Login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // Verify inventory page
  await expect(page).toHaveURL(/inventory.html/);

  // Verify products are visible
  await expect(page.locator('.inventory_item')).toHaveCount(6);

});
