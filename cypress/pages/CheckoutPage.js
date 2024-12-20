/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

class CheckoutPage {
  element = {
    firstNameField: () => cy.get('[data-test="firstName"]'),
    lastNameField: () => cy.get('[data-test="lastName"]'),
    postalCodeField: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get("#finish"),
    backHomeButton: () => cy.get('[data-test="back-to-products"]'),
    backCancel : () => cy.get("[data-test='cancel']"),
    ButtonChekout : () => cy.get("#checkout"),
  };

  fillCheckoutForm() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const postalCode = faker.location.zipCode();

    this.element.firstNameField().type(firstName);
    this.element.lastNameField().type(lastName);
    this.element.postalCodeField().type(postalCode);
  }

  submitForm() {
    this.element.continueButton().click();
    cy.url().should('include', '/checkout-step-two.html');

  }
  finishButton() {
    this.element.finishButton().click();
    cy.url().should('include', '/checkout-complete.html');

  }
  backToProducts() {
    this.element.backHomeButton().click();
    cy.url().should('include', '/inventory.html');

  }

  clickbackCancel(){

    this.element.backCancel().click();
  }


  ButtonChekout(){

    this.element.ButtonChekout().click();
  }
}

export default CheckoutPage;
