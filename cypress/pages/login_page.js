

export class LoginPage{
 
    userName    = '#txtUsername'
    password    = '//*[@id="txtPassword"]'
    loginButton = '#btnLogin'
    invalidMsg  = 'span#spanMessage'
  
    navigate(){
        cy.visit('https://opensource-demo.orangehrmlive.com/index.php/auth/login')
    }

    validateUserNameVisible(){
        cy.get(this.userName).should('be.visible')
    }

    enterUserName(username){
        cy.get(this.userName).type(username)
    }

    enterPassword(pass){
        cy.xpath(this.password).type(pass)
    }

    clickOnLogin(){
        cy.get(this.loginButton).click()
    }

    loginUser(username,password ){
        this.enterUserName(username)
        this.enterPassword(password)
        this.clickOnLogin()
    }

    validateInvalidMessage(){
        cy.get(this.invalidMsg).invoke('text').then((text1)=>{
               expect(text1).to.include('Invalid credentials') 
               
        });
    }

}

