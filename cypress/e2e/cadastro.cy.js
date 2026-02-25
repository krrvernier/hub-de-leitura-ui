/// <reference types="cypress"/>

import { faker } from '@faker-js/faker';

describe('Funcionalidade:cadastro no hub de leitura', () => {
    beforeEach(() => {
        cy.visit('register.html')
    });

    it('Deve fazer cadastro com sucesso - Usando função JS', () => {
        let email = `teste${Date.now()}@teste.com`
        cy.get('#name').type('Ana Silva')
        cy.get('#email').type(email)
        cy.get('#phone').type('1133445566')
        cy.get('#password').type('senha123')
        cy.get('#confirm-password').type('senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.url().should('include', 'dashboard')
    })

    it('Deve fazer cadastro com sucesso - Usando faker', () => {
        let email = faker.internet.email()
        let nome = faker.person.fullName()
        cy.get('#name').type(nome)
        cy.get('#email').type(email)
        cy.get('#phone').type('1133445566')
        cy.get('#password').type('senha123')
        cy.get('#confirm-password').type('senha123')
        cy.get('#terms-agreement').check()
        cy.get('#register-btn').click()
        cy.get('#user-name').should('contain', nome)
    });

})