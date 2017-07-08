import { Angular2FundametalsPage } from './app.po';

describe('angular2-fundametals App', function() {
  let page: Angular2FundametalsPage;

  beforeEach(() => {
    page = new Angular2FundametalsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
