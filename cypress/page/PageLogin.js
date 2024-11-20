class PageLogin {

    elment = {
        username: () => cy.get("input[data-test='username']"),
        password: () => cy.get("input[data-test='password']"),
        loginButton: () => cy.get("input[data-test='login-button']"),
        errorMessage: () => cy.get("h3[data-test='error']")
       
    }

  
    Login(username , password) {


    
      this.elment.username().clear().type(username)
      this.elment.password().clear().type(password)
     this.elment.loginButton().click()
  
 
    }

   

  

}

export default PageLogin;