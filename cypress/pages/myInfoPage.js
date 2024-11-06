class MyInfoPage {

    selectorsList(){
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            genericComboBox: ".oxd-select-text",
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton:".--close",
            submitButton: "[type='submit']"

        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expireDate){
        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(expireDate)
        cy.get(this.selectorsList().dateCloseButton).click()
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click()
        cy.get('body').should('contain', 'Successfully Update')
        cy.get('.oxd-toast-close')

    }

    fillStatus(){
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get('.oxd-select-dropdown > :nth-child(4)').click()
        cy.get(this.selectorsList().genericComboBox).eq(1).click()
        cy.get('.oxd-select-dropdown > :nth-child(3)').click()
        
    }





}
export default MyInfoPage

