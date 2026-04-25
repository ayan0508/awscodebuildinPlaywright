import { test, expect } from '@playwright/test';

test.describe('Login', () => {
  test('successful login with valid credentials', async ({ page }) => {
    await page.goto('https://automatedemokart.vercel.app/login');
    
    console.log('Page title:', await page.title());
    console.log('Current URL:', page.url());
    
    // Take screenshot before login
    await page.screenshot({ path: 'tests/before-login.png' });
    
    // Fill login form - adjust selectors based on actual page elements
    const emailInput = page.locator('input[type="email"], input[name="email"], input[name="username"], input[id="email"], input[id="username"]').first();
    const passwordInput = page.locator('input[type="password"], input[name="password"], input[id="password"]').first();
    const loginButton = page.locator('button[type="submit"], button:has-text("Login"), button:has-text("Sign In"), input[type="submit"]').first();
    
    await emailInput.fill('test@example.com');
    await passwordInput.fill('password123');
    await loginButton.click();
    
    // Wait for navigation or success state after login
    await page.waitForLoadState('networkidle');
    
    // Take screenshot after login
    await page.screenshot({ path: 'tests/after-login.png' });
    console.log('URL after login:', page.url());
  });
});