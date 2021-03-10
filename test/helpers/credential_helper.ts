require('dotenv').config();
const Helper = require('@codeceptjs/helper');

class CredentialHelper extends Helper {
  references = {};

  generateRandomUsername(ref) {
    this.references[ref] = ['sic', Math.floor(Date.now() / 1000).toString(36), Math.floor(Math.random() * 1e8).toString(36)].join('_');
    return this.references[ref];
  }

  generateRandomPassword(ref) {
    this.references[ref] = ['testpass', Math.floor(Math.random() * 1e8).toString(36).toUpperCase()].join('_');
    return this.references[ref];
  }

  async getReference(name) {
    const val = this.references[name];
    console.log("get Ref name: " + name);
    console.log("get Ref val: " + val);
    return val;
  }

  getEnv(name) {
    const envName = name.toString().toUpperCase().replace(/ /g,"_");
    console.log("get Env name: " + name);
    console.log("Mustapha GCKEY USER: " + process.env.GCKEY_USER);
    const val = process.env[envName];
    this.references[name] = val;
    return {val, what: envName};
  }


  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = CredentialHelper;
export {};
