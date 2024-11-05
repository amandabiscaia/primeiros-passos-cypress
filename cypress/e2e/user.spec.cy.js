import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    LastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    genericComboBox: ".oxd-select-text",
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton:".--close",
    submitButton: "[type='submit']"
  }
  
 it.only('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal','/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNametest')
    cy.get(selectorsList.LastNameField).clear().type('lastNametest')
    cy.get(selectorsList.genericField).eq(3).clear().type('enployee')
    cy.get(selectorsList.genericField).eq(4).clear().type('other')
    cy.get(selectorsList.genericField).eq(5).clear().type('license')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-03-10')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Update')
    cy.get('.oxd-toast-close')
    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get('.oxd-select-dropdown > :nth-child(4)').click()
    cy.get(selectorsList.genericComboBox).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(3)').click()
    cy.get(selectorsList.genericField).eq(8).clear().type('1988-18-12')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get('.oxd-radio-wrapper').eq(1).click()
    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')


  
  
  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
  
})