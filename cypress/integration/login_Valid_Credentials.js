///<reference types="cypress" />

import {LoginPage} from "../pages/login_page"
import { BrandingPage } from "../pages/branding_page";

let loginPage = new LoginPage()
let brandingpage = new BrandingPage()

it('Login - Calid credentials',function(){
    loginPage.navigate();
    loginPage.loginUser('Admin','admin123');
    brandingpage.validateWelcomeMessage();
})