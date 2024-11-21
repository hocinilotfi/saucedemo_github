/// <reference types="cypress" />

import PageLogin from "../pages/PageLogin";
import RemoveInCart from "../pages/RemoveInCart";

describe('Tests Saucedemo - Remove functionality', () => {
    before(() => {
        
        cy.visit('https://www.saucedemo.com/');
    });

    it('Connexion à l\'application', () => {
        
        PageLogin.Login('standard_user', 'secret_sauce');

    });

    it('Test pour Remove', () => {
        // Ajouter puis supprimer un produit
        RemoveInCart.cliquerSac();
        RemoveInCart.boutonAjout();
        RemoveInCart.cliquePanier();
        RemoveInCart.cliquerButtonRemove();

      

        cy.get('.cart_item').should('not.exist');

        
        cy.get('[data-test="continue-shopping"]').should('be.visible');
        cy.get('[data-test="checkout"]').should('be.visible');         
    });
});

