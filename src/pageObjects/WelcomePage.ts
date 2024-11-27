import BasePage from './BasePage';
import {Page} from '@playwright/test';
import Header from './components/Header';
import RegistrationPage from './RegistrationPage';
import NavBar from './components/NavBar';

export class WelcomePage extends BasePage {
  public readonly header: Header;
  public readonly navBar: NavBar;

  constructor(page: Page) {
    super(page, '/');
    this.header = new Header(this.page);
    this.navBar = new NavBar(this.page);
  }

  async openRegistrationPage() {
    await this.header.signInButton.click();
    return new RegistrationPage(this.page);
  }
}
