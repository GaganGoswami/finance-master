import { FinanceAppPage } from './app.po';

describe('finance-app App', () => {
  let page: FinanceAppPage;

  beforeEach(() => {
    page = new FinanceAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
