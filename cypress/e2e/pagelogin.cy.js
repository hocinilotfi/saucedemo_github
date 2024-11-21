/// <reference types="cypress" />

import PageLogin from "../pages/PageLogin";




describe("login",()=>{

  const loginpage =  new PageLogin();

   
    beforeEach(() => {

      cy.visit("https://www.saucedemo.com/")

    })
    it("un coorect pw correct",()=>{
        
       loginpage.Login("standard_user" ,"secret_sauce");
      
       cy.url().should('include', '/inventory.html'); 

    })

    it("should display an error message with incorrect password", () => {
       
      loginpage.Login("standard_user" ,"sect_sauce");;
  
      loginpage.elment.errorMessage().should("contain.text", "Epic sadface: Username and password do not match any user in this service");
       
    });
    it("should display an error message with incorrect username", () => {
       
      loginpage.Login("standa_user" ,"secret_sauce");
       
      loginpage.elment.errorMessage().should("contain.text", "Epic sadface: Username and password do not match any user in this service");
    });
    
}


)