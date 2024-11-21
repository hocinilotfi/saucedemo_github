class PageDashboard {

  element = {
    
    text: () => cy.get("h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"),
  }

  verifyDashboard() {

    this.element.text().should("have.text", "Dashboard"); }

}

export default PageDashboard;
