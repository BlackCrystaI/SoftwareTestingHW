import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { BasketPage } from '../pages/BasketPage';

test.describe('Sweet Shop Tests', () => {

  //TC01 login with valid credentials
  test('login with valid credentials', async ({ page }) => {
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    
    await homePage.open();
    await homePage.goToLogin();
    
    await loginPage.login('test@test.com', 'password123');
    
    await expect(page).toHaveURL(/sweetshop/);
  });

  //TC02 login with wrong password (negative scenario)
  test('login with wrong password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    
    await loginPage.open();
    await loginPage.login('test@test.com', 'wrongpassword');
    
    await page.waitForTimeout(1000);
    
    const currentUrl = page.url();
    expect(currentUrl).not.toContain('login');
  });

  //TC04 view product list
  test('view product list', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    
    await expect(page.locator(homePage.browseSweetsButton)).toBeVisible();
  });

  //TC05 add product to cart
  test('add product to cart', async ({ page }) => {
    const homePage = new HomePage(page);
    const basketPage = new BasketPage(page);
    
    await homePage.open();
    await homePage.clickBrowseSweets();
    
    await page.click('a.addItem');
    
    await homePage.goToBasket();
    
    await expect(page.locator(basketPage.checkoutButton)).toBeVisible();
  });

  //TC06 open cart page
  test('open cart page', async ({ page }) => {
    const homePage = new HomePage(page);
    
    await homePage.open();
    await homePage.clickBrowseSweets();
    
    await page.click('a.addItem');
    
    await homePage.goToBasket();
    
    await expect(page).toHaveURL(/basket/);
  });

});