import { Ng2bfPage } from './app.po';

describe('ng2bf App', () => {
  let page: Ng2bfPage;

  beforeEach(() => {
    page = new Ng2bfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
