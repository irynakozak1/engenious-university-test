import BaseComponent from './BaseComponent';
import {Locator, Page} from '@playwright/test';

export default class NavBar extends BaseComponent {
  public readonly userCard: Locator;

  constructor(page: Page) {
    super(page);
    this.userCard = page.locator('a[href="/dashboard"]');
  }
}
