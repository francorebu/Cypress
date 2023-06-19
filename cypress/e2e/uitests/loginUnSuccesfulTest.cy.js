import { LoginPage } from "../pages/login_page";
import { TopBarPage } from "../pages/topbar_page";

const loginPage = new LoginPage();
const topBarPage = new TopBarPage();

describe('Login invalid Spec', () => {
  it('Login Unsuccesful', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.login("Admin", "invalidpass");

    loginPage.isErrorMsgVisible().then((isVisible) => {
      expect(isVisible).to.be.true; // Assertion to validate the returned value
    });
  });
});
