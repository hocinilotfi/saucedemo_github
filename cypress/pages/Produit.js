/// <reference types="cypress" />
class produit {
    elements= {
        swagLabs: ()=> cy.get("#header_container > div.primary_header > div.header_label > div"),
       
        boutonBackHome: ()=> cy.get("#back-to-products"),
        buttonAjout:() => cy.get("#add-to-cart"),
    }
    verifySwaLabs(){
       return this.elements.swagLabs();
    }
    boutonAjout(){
        this.elements.buttonAjout().click();
    }
   
    cliquesBoutonBackHome(){
        this.elements.boutonBackHome().click();
    }
}
export default new produit();