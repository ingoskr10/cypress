class LoginPage {
  elements = {
    usernameInput: () => cy.get('#email'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('button[type="submit"]'),
  };

  visit() {
    cy.visit('https://sigo-wms.coordinadora.com/');
  }

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginButton().click();
  }
}

export default new LoginPage();


