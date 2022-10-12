import { test, expect, selectors } from '@playwright/test';
import { Url } from './Url.spec';
import {PageLocators} from './locators.spec'

let  pagelocators= new PageLocators();

test('check Inventory details ', async ({ page }) => {
    var inventoryUrl=Url.inventory;
    await page.goto('inventoryUrl');
    await expect(pagelocators.selector.firstInventory);
    await page.locator(pagelocators.selector.addFirstInventory).click();
    


});

