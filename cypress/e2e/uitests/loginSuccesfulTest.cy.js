import { LoginPage } from "../pages/login_page";
import { TopBarPage } from "../pages/topbar_page";

const loginPage = new LoginPage();
const topBarPage = new TopBarPage();

describe('Login valid Spec', () => {
  it('Login succesful', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    loginPage.login("Admin", "admin123");

    topBarPage.isUserVisible().then((isVisible) => {
      expect(isVisible).to.be.true; // Assertion to validate the returned value
    });
  });
});
