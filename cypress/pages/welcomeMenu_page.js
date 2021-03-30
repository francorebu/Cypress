export class WelcomMenuPage{

    constructor(){
        this.aboutLink  = 'a#aboutDisplayLink'
        this.logoutLink = '[href*="logout"]'
    }

    clickOnAbout(){
        cy.get(this.aboutLink).click()
    }

    clickOnLogout(){
        cy.get(this.logoutLink).click()
    }
}
