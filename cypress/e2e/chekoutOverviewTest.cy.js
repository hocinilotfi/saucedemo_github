
/// <reference types="cypress" />

import CheckoutPage from "../pages/CheckoutPage";
import PageLogin from "../pages/PageLogin";
import Produit from "../pages/Produit";
import panier from "../pages/RemoveInCart";

describe("checkout overview test ", () => {
  const loginpage = new PageLogin();

  const checkout = new CheckoutPage();

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
  });
  it("checkout overview test", () => {
    loginpage.Login("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
    Produit.boutonAjout();
    panier.cliquePanier();
    checkout.ButtonChekout();
    checkout.fillCheckoutForm();
    checkout.submitForm();
    cy.url().should("include", "/checkout-step-two.html");
    checkout.finishButton();
    cy.url().should("include", "/checkout-complete.html");
  });
});
