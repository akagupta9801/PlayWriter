import { Page } from "@playwright/test";

export class PageLocators{

  public selector ={   
    locatorPage :'[class=bot_column]',
    userName :'id=user-name',
    password :'id=password',
    firstInventory : "//*[text()='Sauce Labs Backpack']",
    secondInventory : "//*[text()='Sauce Labs Bolt T-Shirt']",
    addFirstInventory : "//*[@id='add-to-cart-sauce-labs-backpack']",
    quantity  :  "//*[text()='QTY']"

    }

}