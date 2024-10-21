class LoginPage {
  elements = {
    usernameInput: () => cy.get('#username'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('button[type="submit"]'),
  };

  visit() {
    cy.visit('https://cm-sigo-recogidas-entregas-front-5nygqcc7aa-uc.a.run.app/');
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