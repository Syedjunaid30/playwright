import { Page, expect } from '@playwright/test';

export class LoginPage {
 constructor(private page: Page) {}

 async open() {
   await this.page.goto('https://www.saucedemo.com');
 }

 async login(user: string, pass: string) {

   await expect(this.page.locator('#user-name')).toBeVisible();

   await this.page.locator('#user-name').fill(user);
   await this.page.locator('#password').fill(pass);
   await this.page.locator('#login-button').click();

   await expect(this.page).toHaveURL(/inventory/);
 }
}
