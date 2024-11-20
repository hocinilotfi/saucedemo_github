/// <reference types="cypress" />

import PageLogin from "../pages/PageLogin";

describe("login",()=>{

  const loginpage =  new PageLogin();

   
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/'); 
    })
    it("un coorect pw correct",()=>{
        
       loginpage.enterUsername("standard_user");
        loginpage.enterPassword("secret_sauce");
        loginpage.submit
   
        

    })

    it("should display an error message with incorrect password", () => {
       
        loginpage.enterUsername("standard_user");
        loginpage.enterPassword("secret_sau");
        loginpage.submit
        loginpage.verifyMessageerror
       
    });
    it("should display an error message with incorrect username", () => {
       
        loginpage.enterUsername("standard_us");
        loginpage.enterPassword("secret_sauce");
        loginpage.submit
        loginpage.verifyMessageerror
    });
    
}


)