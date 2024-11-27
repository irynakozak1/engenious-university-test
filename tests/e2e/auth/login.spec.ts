import {test, expect} from '@playwright/test';
import {WelcomePage} from '../../../src/pageObjects/WelcomePage';
import {USERS} from '../../../src/data/users';

test.describe('Sign In', () => {
  test('User should be able to login with valid credentials', async ({page}) => {
    const welcomePage = new WelcomePage(page);
    await welcomePage.navigate();
    const registrationPage = await welcomePage.openRegistrationPage();
    const loginPage = await registrationPage.openLoginPage();
    await loginPage.login(USERS.IRYNA_KOZAK.loginData);

    await expect(page, 'User should be redirected to welcome page').toHaveURL('');

    await welcomePage.header.menuToggle.click();

    await expect(welcomePage.navBar.userCard).toBeVisible();
    await expect(welcomePage.navBar.userCard).toContainText(USERS.IRYNA_KOZAK.fullname);
  });
});
