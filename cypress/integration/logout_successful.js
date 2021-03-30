///<reference types="cypress" />

import {LoginPage} from "../pages/login_page";
import {BrandingPage} from "../pages/branding_page";
import {WelcomMenuPage} from "../pages/welcomeMenu_page";

let loginPage = new LoginPage()
let brandingPage = new BrandingPage()
let welcomeMenuPage = new WelcomMenuPage()

it('Logout - Success',function(){
    loginPage.navigate();
    loginPage.loginUser('Admin','admin123');
    brandingPage.clickOnWelcomeUser();
    welcomeMenuPage.clickOnLogout();
    loginPage.validateUserNameVisible();
    cy.get('sarlanga').get
})