import { AppPage } from './app.po';

describe('ccdesigns App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect('Welcome to app!').toEqual('Welcome to app!');
  });
});
