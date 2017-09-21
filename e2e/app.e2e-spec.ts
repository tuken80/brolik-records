import { BrolikrecordsPage } from './app.po';

describe('brolikrecords App', () => {
  let page: BrolikrecordsPage;

  beforeEach(() => {
    page = new BrolikrecordsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
