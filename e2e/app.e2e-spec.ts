import { VpsMatchFrontendPage } from './app.po';

describe('vps-match-frontend App', function() {
  let page: VpsMatchFrontendPage;

  beforeEach(() => {
    page = new VpsMatchFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
