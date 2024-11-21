/// <reference types="cypress" />
export class CartPage {
  element = {
    cartItems: () => cy.get(".cart_item"),
  };

  getFirstItemToCart() {
    let itemData = {};
    return this.element
      .cartItems()
      .first() // Récupère le premier élément
      .then((firstItem) => {
        // Utilisation de cy.wrap pour envelopper l'élément avant de l'utiliser avec .find()
        cy.wrap(firstItem)
          .find(".inventory_item_name")
          .invoke("text")
          .then((name) => {
            itemData.name = name;

            // Recherche de la description après avoir enveloppé firstItem avec cy.wrap
            //Commentaire pour Idir
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

                    cy.wrap(firstItem)
                      .find(".cart_quantity")
                      .invoke("text")
                      .then((quantity) => {
                        itemData.quantity = quantity;
                        return itemData;
                      });
                  });
              });
          });
      });
  }

}
