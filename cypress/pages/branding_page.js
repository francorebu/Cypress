
export class BrandingPage{

    constructor(){
        this.welcomeUser       = '#welcome'
        this.notificationIcon  = '#notification'
        this.helpIcon          = '[data-icon="question-circle"]'
        this.subscribeButton   = '#Subscriber_link'
        this.marketplaceButton = '#MP_link'
    }

    validateWelcomeUser(message){
        cy.get(this.welcomeUser)
            .should('contain', 'Welcome')
            .should('have.class','panelTrigger')
            .should('be.visible')
    }

    validateWelcomeMessage(){
        cy.get(this.welcomeUser).invoke('text').then((text1)=>{
               expect(text1).to.include('Welcome') 
               cy.log("name :" + text1)
        })
    }

    clickOnWelcomeUser(){
        cy.get(this.welcomeUser).click()
    }

    clickOnNotification(){
        cy.get(this.notificationIcon).click()
    }

    clickOnHelpIcon(){
        cy.get(this.helpIcon).click()
    }

    clickOnSubscribe(){
        cy.get(this.subscribeButton).click()
    }

    clickOnMarketplace(){
        cy.get(this.marketplaceButton).click()
    }
}
