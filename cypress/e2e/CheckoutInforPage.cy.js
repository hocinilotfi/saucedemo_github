/// <reference types="cypress" />
import { describe } from "mocha";

import CheckoutInforPage from "../pages/CheckoutInforPage";

describe("Inventory", () => {
 
  const checkoutPage = new CheckoutInforPage();


  it("", () => {
    cy.doLogin("standard_user", "secret_sauce");
    cy.url().should('include', '/inventory.html');
   
    checkoutPage.fillCheckoutForm();
    checkoutPage.submitForm();
    cy.url().should('include', '/checkout-step-two.html');
    
  });
});
