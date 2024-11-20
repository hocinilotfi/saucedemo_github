/// <reference types="cypress" />

class Remove {

    elements = {
        
        sacADos: () => cy.get("#item_4_title_link > div"),
        buttonAjout:() => cy.get("#add-to-cart"),
        panier:() => cy.get(".shopping_cart_link"),
        buttonRemove: () => cy.get("#remove-sauce-labs-bike-light"),
        }
        
    cliquerSac(){
        this.elements.sacADos().click();
    }
    boutonAjout(){
        this.elements.buttonAjout().click();
    }
    cliquePanier(){
        this.elements.panier().click(); 
    }
    cliquerButtonRemove(){
        this.elements.buttonRemove().click();
    }

}

export default new Remove();
