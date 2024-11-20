/// <reference types="cypress" />

import LoginPage from "./page/LoginPage";



describe("login",()=>{

  const loginpage =  new LoginPage();

   
    beforeEach(() => {

      loginpage.visit()

    })
    it("un coorect pw correct",()=>{
        
       loginpage.enterUsername("Admin");
        loginpage.enterPassword("admin123");
        loginpage.submit
      loginpage.verifyDashboard     
        

    })

    it("should display an error message with incorrect password", () => {
       
        loginpage.enterUsername("Admin");
        loginpage.enterPassword("admin3");
        loginpage.submit
        loginpage.verifyMessageerror
       
    });
    it("should display an error message with incorrect username", () => {
       
        loginpage.enterUsername("adm");
        loginpage.enterPassword("admin3");
        loginpage.submit
        loginpage.verifyMessageerror
    });
    
}


)