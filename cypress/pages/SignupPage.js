class SignupPage{
    go(test){
        cy.visit('/')
    }

    createUser(test){   
        cy.get('input[name="customerName"]').type(test.Name)
        cy.get('input[name="contactLastName"]').type(test.Lastname)
        cy.get('input[name="contactFirstName"]').type(test.ContactFirstName)
        cy.get('input[name="phone"]').type(test.Phone)
        cy.get('input[name="addressLine1"]').type(test.AddressLine1)
        cy.get('input[name="addressLine2"]').type(test.AddressLine2)
        cy.get('input[name="city"]').type(test.City)
        cy.get('input[name="state"]').type(test.State)
        cy.get('input[name="postalCode"]').type(test.PostalCode)
        cy.get('input[name="country"]').type(test.Country)
        cy.get('#field_salesRepEmployeeNumber_chosen').click().type('Fixter{enter}')
        cy.get('input[name="creditLimit"]').type(test.CreditLimit)

    }

    addCustomerV4(){
        cy.get('#switch-version-select').select('Bootstrap V4 Theme')
        cy.get('.floatL.t5').eq(0).click()
    }
    
    submit(){
        cy.get('#form-button-save').click()
        cy.contains('Your data has been successfully stored into the database. Edit Customer or Go back to list').should('be.visible')
    }

    return(){
        cy.get('[href="/v1.x/demo/bootstrap_theme_v4/"]').click()
    }

    filterAndCheck(test){
        cy.get('input[name="customerName"]').type(test.Name)
        cy.contains('51 9999-9999').should('be.visible')
        cy.contains('Teste Sicredi').should('be.visible')
        cy.contains('Porto Alegre').should('be.visible')
        cy.contains('Brasil').should('be.visible')
        cy.contains('Fixter').should('be.visible')
        cy.contains('200').should('be.visible')
    }

    deleteAndCheck(){
        cy.get('.select-all-none').click()
        cy.get('.no-border-left > .floatL > .btn').click()
        cy.contains('Are you sure that you want to delete this 1 item?').should('be.visible')
        cy.get('.delete-multiple-confirmation > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click()
        cy.contains('Your data has been successfully deleted from the database.').should('be.visible')
    }

}

export default new SignupPage;