export class TopBarPage {
    user = "[class='oxd-topbar-header-userarea']";
  
    isUserVisible() {
      return cy.get(this.user).then(($el) => {
        return Cypress.dom.isVisible($el);
      });
    }
  }
  