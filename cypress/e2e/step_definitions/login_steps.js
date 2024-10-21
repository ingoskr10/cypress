import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../../pages/LoginPage';
import User from '../../objects/User';
import AuthenticationModel from '../../models/AuthenticationModel';

const user = new User('testuser', 'testpassword');

Given('I am on the SIGO login page', () => {
  LoginPage.visit();
});

When('I enter valid username and password', () => {
  LoginPage.typeUsername(user.username);
  LoginPage.typePassword(user.password);
});

And('I click the login button', () => {
  LoginPage.clickLogin();
});

Then('I should be logged in successfully', () => {
  // Add assertion for successful login, e.g., checking for a dashboard element
  cy.get('.dashboard').should('be.visible');
});