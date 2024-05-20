const { expect } = require('@playwright/test');

async function testLogin(page){
    await page.goto('https://qaomni.annalect.com/login', {timeout: 300000});
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
    await expect(page.locator('#customer-support')).toContainText('Request new account');
}
module.exports = {
    testLogin,
};
