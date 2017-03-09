import { VizwizPage } from './app.po';

describe('vizwiz App', () => {
  let page: VizwizPage;

  beforeEach(() => {
    page = new VizwizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
