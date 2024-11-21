
@echo off
echo --- Démarrage de l'exécution des tests ---

:: Exécuter plusieurs fichiers de tests Cypress
npx cypress run --spec "cypress/e2e/loginTest.cy.js,cypress/e2e/addCart.cy.js,cypress/e2e/checkoutInforTest.cy.js,cypress/e2e/return.Chekout.cy.js,cypress/e2e/chekoutOverviewTest.cy.js,cypress/e2e/return.Order.cy.js,cypress/e2e/testRemove.cy.js" --reporter mochawesome --reporter-options overwrite=false,html=true,json=false,reportDir=rapport

echo --- Tests terminés. Le rapport est généré dans le dossier 'rapport' ---
pause
