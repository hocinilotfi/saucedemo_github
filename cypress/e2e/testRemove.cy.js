/// <reference types="cypress" />

import PageLogin from "../pages/PageLogin";
import RemoveInCart from "../pages/RemoveInCart";




describe("Tests de lapplication SauceDemo",()=>{

  const loginpage =  new PageLogin();

   
    beforeEach(() => {

      cy.visit("https://www.saucedemo.com/")

    })
    it("un coorect pw correct",()=>{
        
       loginpage.Login("standard_user" ,"secret_sauce");
      
        loginpage.submit
      loginpage.verifyDashboard 
      
        // Ajouter un produit au panier
        RemoveInCart.cliquerSac();
        RemoveInCart.boutonAjout();

        // Accéder au panier et supprimer le produit
        RemoveInCart.cliquePanier();
        RemoveInCart.cliquerButtonRemove();

        // Vérifier que le produit a été supprimé
        cy.get('.cart_item').should('not.exist');

        // Vérifier que les boutons "Continue Shopping" et "Checkout" sont visibles
        cy.get('[data-test="continue-shopping"]').should('be.visible');
        cy.get('[data-test="checkout"]').should('be.visible');    
        

    });

});
