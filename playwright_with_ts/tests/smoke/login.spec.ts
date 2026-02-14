import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import users from '../../data/users.json';

test('@smoke Login Test', async ({ page }) => {

 const login = new LoginPage(page);

 await login.open();
 await login.login(users[0].username, users[0].password);
    
 await page.screenshot({path:'screenshots/login.png'});

 expect(page.url()).toContain('inventory');
});
