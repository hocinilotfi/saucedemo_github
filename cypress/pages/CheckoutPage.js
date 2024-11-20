
import { faker } from "@faker-js/faker";

class CheckoutPage {
  e = {
    firstNameField: () => cy.get('[data-test="firstName"]'),
    lastNameField: () => cy.get('[data-test="lastName"]'),
    postalCodeField: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    finishButton: () => cy.get("#finish"),
    backHomeButton: () => cy.get('[data-test="back-to-products"]'),
  };

  fillCheckoutForm() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const postalCode = faker.location.zipCode();

    this.e.firstNameField().type(firstName);
    this.e.lastNameField().type(lastName);
    this.e.postalCodeField().type(postalCode);
  }

  submitForm() {
    this.e.continueButton().click();
    cy.url().should('include', '/checkout-step-two.html');

  }
  finishButton() {
    this.e.finishButton().click();
    cy.url().should('include', '/checkout-complete.html');

  }
  backToProducts() {
    this.e.backHomeButton().click();
    cy.url().should('include', '/inventory.html');

  }
}

export default CheckoutPage;
