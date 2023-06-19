export class LoginPage{

      userName    = "[name='username']"
      password    = "[name='password']"
      LoginButton = "[type='submit']"
      errorMsg    = "[role='alert']"

      login(user,pass){
            this.enterUsername(user)
            this.enterPassword(pass)
            this.clickOnLogin()
      }
      
      enterUsername(user){
            cy.get(this.userName).type(user)
      }

      enterPassword(pass){
            cy.get(this.password).type(pass)
      }

      clickOnLogin(){
            cy.get(this.LoginButton).click()
      }

      isErrorMsgVisible() {
        return cy.get(this.errorMsg).then((em) => {
          return Cypress.dom.isVisible(em);
        });
      }

}