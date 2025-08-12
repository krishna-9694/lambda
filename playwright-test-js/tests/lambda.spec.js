const { test } = require('../lambdatest-setup')
const { expect } = require('@playwright/test')

test.describe('LambdaTest Sample Test', () => {
    test('Test Scenario 1 – Simple Form Demo', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground');
        await page.waitForTimeout(1000);
        await page.getByText('Simple Form Demo').click();
        expect(page.url()).toContain('simple-form-demo');
        const ltest = "Welcome to LambdaTest";
        await page.locator('input#user-message').fill(ltest);
        await page.locator('#showInput').click();
        expect(await page.locator('#message').innerText()).toBe(ltest);
    });
    test('Test Scenario 2 – Drag & Drop Sliders', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground');
        await page.waitForTimeout(1000);
        await page.getByText('Drag & Drop Sliders').click();
        await page.locator('#slider3 input[type="range"]').fill('95');
        expect(await page.locator('#rangeSuccess').innerText()).toBe('95');
    });
    test('Test Scenario 3 – Input Form Submit', async ({ page }) => {
        await page.goto('https://www.lambdatest.com/selenium-playground');
        await page.waitForTimeout(1000);
        await page.getByText('Input Form Submit').click();
        await page.getByRole('button', { name: 'Submit' }).click();
        await page.waitForTimeout(1000);
        await expect(page.locator('text=Please fill in this field.')).toBeVisible();
        await page.fill('input[name="name"]', 'Krishna');
        await page.fill('input[name="email"]', 'krishna@test.com');
        await page.fill('input[name="password"]', 'password123');
        await page.fill('input[name="company"]', 'Test Company');
        await page.fill('input[name="website"]', 'https://example.com');
        await page.selectOption('select[name="country"]', { label: 'United States' });
        await page.fill('input[name="city"]', 'chennai');
        await page.fill('input[name="address1"]', '123 Main St');
        await page.fill('input[name="address2"]', 'Apt 4B');
        await page.fill('input[name="state"]', 'TN');
        await page.fill('input[name="zip"]', '10001');
        await page.getByRole('button', { name: 'Submit' }).click();
        await expect(page.locator('text=Thanks for contacting us, we will get back to you shortly.')).toBeVisible();
    });
});

