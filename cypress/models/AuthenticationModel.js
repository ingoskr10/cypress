import LoginPage from '../pages/LoginPage';

class AuthenticationModel {
  login(user) {
    LoginPage.visit();
    LoginPage.typeUsername(user.username);
    LoginPage.typePassword(user.password);
    LoginPage.clickLogin();
  }
}

export default new AuthenticationModel();