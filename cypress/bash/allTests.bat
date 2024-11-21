@echo off
echo Running Cypress tests...
npx cypress run --spec cypress/e2e/loginTest.cy.js
npx cypress run --spec cypress/e2e/test2.cy.js
npx cypress run --spec cypress/e2e/testRemove.js
npx cypress run --spec cypress/e2e/test4.cy.js
echo Tests completed!
pause
