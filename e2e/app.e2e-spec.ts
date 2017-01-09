import { CoffeelistappPage } from './app.po';

describe('coffeelistapp App', function() {
  let page: CoffeelistappPage;

  beforeEach(() => {
    page = new CoffeelistappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
