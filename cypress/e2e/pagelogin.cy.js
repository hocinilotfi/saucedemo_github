/// <reference types="cypress" />

import LoginPage from "./page/LoginPage";



describe("login",()=>{

  const loginpage =  new LoginPage();

   
    beforeEach(() => {

      cy.visit("https://www.saucedemo.com/")

    })
    it("un coorect pw correct",()=>{
        
       loginpage.enterUsername("standard_user");
        loginpage.enterPassword("secret_sauce");
        loginpage.submit
      loginpage.verifyDashboard     
        

    })

    it("should display an error message with incorrect password", () => {
       
        loginpage.enterUsername("standard_user");
        loginpage.enterPassword("admin3");
        loginpage.submit
        loginpage.verifyMessageerror
       
    });
    it("should display an error message with incorrect username", () => {
       
        loginpage.enterUsername("_user");
        loginpage.enterPassword("secret_sauce");
        loginpage.submit
        loginpage.verifyMessageerror
    });
    
}


)