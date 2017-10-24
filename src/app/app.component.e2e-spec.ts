import { browser, element, by, ElementFinder } from 'protractor';

describe('E2E Test', () => {

  beforeEach(() => {
    browser.get('');
  });

  it('the home tab is displayed by default', () => {

  expect(element(by.css('title')) // Grab the title of the selected tab
    .getAttribute('innerHTML')) // Get the text content
    .toContain('Page Two'); // Check if it contains the text "Home"

  });


});
