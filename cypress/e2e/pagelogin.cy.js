/// <reference types="cypress" />

import PageLogin from "../pages/PageLogin";




describe("login",()=>{

  const loginpage =  new PageLogin();

   
    beforeEach(() => {

      cy.visit("https://www.saucedemo.com/")

    })
    it("un coorect pw correct",()=>{
        
       loginpage.Login("standard_user" ,"secret_sauce");
      
        loginpage.submit
      loginpage.verifyDashboard     
        

    })

    it("should display an error message with incorrect password", () => {
       
      loginpage.Login("standard_user" ,"sect_sauce");;
        loginpage.submit
        loginpage.verifyMessageerror
       
    });
    it("should display an error message with incorrect username", () => {
       
      loginpage.Login("standa_user" ,"secret_sauce");
        loginpage.submit
        loginpage.verifyMessageerror
    });
    
}


)