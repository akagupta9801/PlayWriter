import { test, expect } from '@playwright/test';

test('swaglabs', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  //await expect(page).tohv(/Playwright/);
  //const  locatorPage= page.locator('//*[contains(text(),bot_column]')

  //const  locatorPage= page.locator('xpath=//div[@class=bot_column]')
  //console.log(locatorPage);
   const  locatorPage= page.locator('[class=bot_column]')
   console.log(locatorPage);
  await expect(locatorPage).toHaveAttribute('class', 'bot_column');
  
  const userName = page.locator('id=user-name');
  const password = page.locator('id=password');

  
  await expect(userName).toHaveAttribute('name', 'user-name');
  await userName.fill('standard_user');
    
  await expect(password).toHaveAttribute('name', 'password');
  await password.fill('secret_sauce');

  await page.locator('id=login-button').click();
  
  await expect(page).toHaveURL(/.*inventory/);
 



});
