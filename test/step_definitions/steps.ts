const { I, SIC } = inject();
const assert = require("assert");
export {};

Given(/^I open the (.*?) page$/, (page) => {
  I.amOnPage(SIC.locate(page));
});

When(/I click on the (link|checkbox|button) "(.*?)"/, (type, cb) => {
  const what = SIC.locate(cb);
  I.click(what);
});

Then(/^I should be on the (.*?) page$/, (page) => {
  I.seeInCurrentUrl(SIC.locate(page));
  console.log("We are in the following page:" + SIC.locate(page));
});

When(/^I choose the (.*?) CSP$/, (csp) => {
  const myCSP = SIC.locate(csp);

  if (myCSP === "_local") {
  const local = "http://localhost:8080/Sign%20In.html";
    return I.amOnPage(local);
  }

  return I.click(myCSP);
});

Then("the element {string} is displayed", (what) => {
  I.see(what);
});

Then(/^the url should contain "?(.*?)"?$/, (what) => {
  I.seeInCurrentUrl(what);
});

When("I press the back button", () => {
  I.usePlaywrightTo(
    "go back",
    async ({ browser, context, page }) => {
      await page.goBack({});
    }
  );
});

Then(/^I should see "(.*?)"/, (what) => {
  I.see(what);
});

Then(/^I pause for (.*?)s/, (seconds) => {
  I.wait(seconds);
});

When(/^I have a saved (username|password) <(.*?)>/, async (type, what) => {
  const { envName, val } = await I.getEnv(what);
    console.log("envName :" + envName);
    console.log("val :" + envName);

  if (val === undefined) {
    assert.fail(`no such saved ${what} ${envName}`);
  }
});

When(/^I have a valid random GCKey username <(.*?)>/, (what) => {
  I.generateRandomUsername(what);
});

When(/^I have a valid random GCKey password <(.*?)>/, (name) => {
  I.generateRandomPassword(name);
});

When(/^I set the inputfield "(.*?)" to <(.*?)>/, async (field, name) => {
  await I.click(SIC.locate(field));
  await I.type(await I.getReference(name));
});

When(
  "I select the option with the text {string} for the element {string}",
  (element, text) => {
    I.selectOption(SIC.locate(text), element);
  }
);

When("I set the inputfield {string} to {string}", (field, what) => {
  I.fillField(SIC.locate(field), what);
});

Then("the element {string} contains the text <testuser>", () => {
  pause();
});

Then("the browser error log should be clear", async () => {
  // WIP
  let logs = await I.grabBrowserLogs();
  return logs.length < 1;
  // logs.forEach(l => console.log(l));
});

Then(/I should have the cookie "(.*?)"/, (name) => {
  I.seeCookie(name);
});

When('I open a new tab', () => {
  I.openNewTab();
});

//Then('I do a pause', () => {
//  pause();
//});


