// const { I } = inject();

const locators = {
  // pages
  'Relying Party simulator': 'https://rp1.tbstest.catslab.ca/RPSimulator/',
  'Relying Party 2 simulator': 'https://rp2.tbstest.catslab.ca/RPSimulator/',
  PowerApps: 'https://catslab.powerappsportals.com/',
  'RP simulator English chooser': 'https://rp1.tbstest.catslab.ca/RPSimulator/choose-eng.jsp',
  'RP simulator 2 English chooser': 'https://rp2.tbstest.catslab.ca/RPSimulator/choose-eng.jsp',
  'RP simulator response': 'https://rp1.tbstest.catslab.ca/RPSimulator/response',
  'RP simulator 2 response': 'https://rp2.tbstest.catslab.ca/RPSimulator/response',
  'QA chooser': 'https://qa-auth.id.alpha.canada.ca/oxauth/en/select.htm',
  // end of pages
  'Level 2': '//*[@id="cn-left-col-inner"]/section/div/nav/form/section[1]/ul/li[2]/input',
  'Force Authn': '//*[@id="cn-left-col-inner"]/section/div/nav/form/section[2]/ul/li[1]/input',
  GCKey: 'GCKey-TE',
  CBS: 'CBS-UAT',
  SIC: process.env.CSP_HOST || 'Sign In Canada - QA',
  Continue: '//*[@id="continue"]',
  CBSTest1: '//*[@id="SK_TEST1"]',
  'Sign up with GCKey': '//*[@id="loginForm:loginButton3"]',
  'Sign Up': {
    xpath: '/html/body/div[1]/main/div[2]/div/div/div/div/div/div[3]/div/p[3]/a',
  },
  'I accept': '//*[@id="Accept"]',
  'Create Your Username': '//*[@id="userID"]',
  'Continue signup': '//*[@id="button"]',
  'Create Your Password': '//*[@id="password"]',
  'Confirm Your Password': '//*[@id="confirmPassword"]',
  'Select a Recovery Question': '#recoveryQuestion',
  'My Recovery Answer': '//*[@id="recoveryAnswer"]',
  'My Memorable Person': '//*[@id="memorablePerson"]',
  'My Memorable Person Hint': '//*[@id="memorablePersonHint"]',
  'My Memorable Date': '//*[@id="memorableDate"]',
  'My Memorable Date Hint': '//*[@id="memorableDateHint"]',
  'Username confirmation': '/html/body/div/main/div[1]/div/div/div[1]/p[3]',
  'GC Key Signup Result': '/html/body/div/main/div[1]/div/div/div[1]/p[3]',
  'Sign Up Complete Continue': '//*[@id="continue"]',
};
const locate = (what) => {
  if (locators[what]) {
    return locators[what];
  } else {
    return what;
  }
};

export { locators, locate };
