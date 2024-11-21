/// <reference types="cypress" />

import { CartPage } from "../pages/cart.page";
import PageDashboard from "../pages/PageDashboard";
import PageLogin from "../pages/PageLogin";

describe("Add item to cart", () => {
  let inventoryItem = null;
  let loginPage = new PageLogin();
  let pageDashboard = new PageDashboard();
  let cartPage = new CartPage();

  it("Correct username and password", () => {
    /************************ Login *********************************************/
    cy.visit("https://www.saucedemo.com/");
    const pageDashboard = new PageDashboard();
    loginPage.Login("standard_user", "secret_sauce");
    pageDashboard.isLoggedIn().should("be.visible");

    /************************ Add to cart ***************************************/
    // when I add the fist item to cart
    pageDashboard.addFirstItemToCart().then((itemData) => {
      inventoryItem = itemData;
    });
    //and click on the cart button
    pageDashboard.clickOnCartButton();
    //then the cart should containt the selected item
    cartPage.getFirstItemToCart().then((cartItem) => {
      expect(cartItem.itemDescription).to.equal(inventoryItem.itemDescription);
      expect(cartItem.itemPrice).to.equal(inventoryItem.itemPrice);
      expect(cartItem.itemName).to.equal(inventoryItem.itemName);
      expect(cartItem.quantity).to.equal("1");
    });
  });
});

// When("I click on add to cart on the first item in the list", () => {
//   let inventoryPage = new InventoryPage();
//   return inventoryPage.addFirstItemToCart().then((itemData) => {
//     inventoryItem = itemData;
//   });
// });

// When("I click on the cart button", () => {
//   let inventoryPage = new InventoryPage();
//   inventoryPage.clickOnCartButton();
// });

// Then("the cart should containt the selected item", () => {
//   let cartPage = new CartPage();
//   return cartPage.getFirstItemToCart().then((cartItem) => {
//     expect(cartItem.itemDescription).to.equal(inventoryItem.itemDescription);
//     expect(cartItem.itemPrice).to.equal(inventoryItem.itemPrice);
//     expect(cartItem.itemName).to.equal(inventoryItem.itemName);
//     expect(cartItem.quantity).to.equal("1");
//   });
// });
