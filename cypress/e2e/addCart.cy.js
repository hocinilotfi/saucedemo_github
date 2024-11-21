/// <reference types="cypress" />

import { CartPage } from "../pages/cart.page";
import PageDashboard from "../pages/PageDashboard";
import PageLogin from "../pages/PageLogin";

let inventoryItem;
describe("Add item to cart", () => {
  //let inventoryItem;
  let loginPage = new PageLogin();
  let pageDashboard = new PageDashboard();
  let cartPage = new CartPage();

  it("Correct username and password", () => {
    /************************ Login *********************************************/
    cy.visit("https://www.saucedemo.com/");
    loginPage.Login("standard_user", "secret_sauce");
    pageDashboard.isLoggedIn().should("be.visible");

    /************************ Add to cart ***************************************/
    // when I add the fist item to cart
    pageDashboard.addFirstItemToCart().then(function (itemData) {
      //and click on the cart button
      pageDashboard.clickOnCartButton();
      //then the cart should containt the selected item
      cartPage.getFirstItemToCart().then((cartItem) => {
        expect(cartItem.description).to.equal(itemData.description);
        expect(cartItem.price).to.equal(itemData.price);
        expect(cartItem.name).to.equal(itemData.name);
        expect(cartItem.quantity).to.equal("1");
      });
    });
  });
});