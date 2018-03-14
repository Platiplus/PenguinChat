import { PenguinChatPage } from './app.po';

describe('PenguinChat App', function() {
  let page: PenguinChatPage;

  beforeEach(() => {
    page = new PenguinChatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
