/// <reference types="cypress" />

import CheckoutPage from "../pages/CheckoutPage";
import PageLogin from "../pages/PageLogin";
import Produit from "../pages/Produit";
import panier from "../pages/RemoveInCart";






describe("return back cancel de chekout", () => {

    const loginpage = new PageLogin();

    const checkout = new CheckoutPage()

    beforeEach(() => {

        cy.visit("https://www.saucedemo.com/")

    })
    it("return to page panier  à partir de checkout ", () => {

        loginpage.Login("standard_user", "secret_sauce");
        cy.url().should('include', '/inventory.html');
        Produit.boutonAjout();
        panier.cliquePanier();
        checkout.ButtonChekout();
        checkout.clickbackCancel();
        cy.url().should('include', '/cart.html');



    })



}


)