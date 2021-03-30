///<reference types="cypress" />

import {LoginPage} from "../pages/login_page"

let loginPage = new LoginPage()

it('Login - Invalid credentials',function(){
    loginPage.navigate();
    loginPage.loginUser('Admin','invalidPass');
    loginPage.validateInvalidMessage();
    cy.logSpecialFormat("holaaa")
})