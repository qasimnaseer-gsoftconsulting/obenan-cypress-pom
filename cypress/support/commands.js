import { desktopLoginPageObjects } from './pageObjects';
/// <refrence types="cypress"/>
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="Cypress" />
/// <reference types="cypress-xpath" />

//for cypress xpath plugin
import 'cypress-xpath';
//for file upload
import 'cypress-file-upload';

Cypress.Commands.add('loginForDesktop', () => {
    desktopLoginPageObjects.setViewPortForDesktop();
    cy.session('desktopLoginSession',()=>{
      desktopLoginPageObjects.visitLoginPage();
      desktopLoginPageObjects.setEmailAddress();
      desktopLoginPageObjects.setPasswrod();
      desktopLoginPageObjects.signInButton().click();
      desktopLoginPageObjects.verifyDashboard();
    },{
        cacheAcrossSpecs:true
    });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test due to uncaught exceptions
  return false;
});










