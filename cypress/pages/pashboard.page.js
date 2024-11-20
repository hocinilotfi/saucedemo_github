class PageDashboard {

  element = {
    
    titre: () => cy.get("h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"),
  }

  verifyDashboard() {

    return this.element.titre() }

}

export default PageDashboard;
