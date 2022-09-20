import { test, expect } from '@playwright/test';
import { Url } from './Url.spec';


test('check Inventory details ', async ({ page }) => {
    var inventoryUrl=Url.Inventory;
    await page.goto('inventoryUrl');

    await expect(page.locator(''))




});

