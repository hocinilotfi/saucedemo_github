class PageDashboard {
  element = {
    text: () =>
      cy.get("h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"),
    susccesLoginText: () => cy.get(".title"),
    cartButton: () => cy.get("a.shopping_cart_link"),
    inventoryItems: () => cy.get(".inventory_item"),
  };

  verifyDashboard() {
    this.element.text().should("have.text", "Dashboard");
  }

  isLoggedIn() {
    return this.element.susccesLoginText();
  }

  clickToInventoryItemAddButton(inventoryElement) {
    inventoryElement.find("#add-to-cart-sauce-labs-backpack").click();
  }

  clickOnCartButton() {
    this.element.cartButton().click();
  }

  addFirstItemToCart() {
    let itemData = {};
    return this.element
      .inventoryItems()
      .first() // Récupère le premier élément
      .then((firstItem) => {
        // Utilisation de cy.wrap pour envelopper l'élément avant de l'utiliser avec .find()
        cy.wrap(firstItem)
          .find(".inventory_item_name")
          .invoke("text")
          .then((name) => {
            itemData.name = name;

            // Recherche de la description après avoir enveloppé firstItem avec cy.wrap
            cy.wrap(firstItem)
              .find(".inventory_item_desc")
              .invoke("text")
              .then((description) => {
                itemData.description = description;

                // Recherche du prix après avoir enveloppé firstItem avec cy.wrap
                cy.wrap(firstItem)
                  .find(".inventory_item_price")
                  .invoke("text")
                  .then((price) => {
                    itemData.price = price;

                    // Clique sur le bouton "Add to Cart"
                    this.clickToInventoryItemAddButton(firstItem);

                    return itemData;
                  });
              });
          });
      });
  }
}

export default PageDashboard;
