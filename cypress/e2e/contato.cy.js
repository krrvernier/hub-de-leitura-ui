///<reference types="cypress"/>
describe('Funcionalidade contato', () => {
  beforeEach(() => {
    cy.visit('index.html')
  });

  it('Deve preencher formulario de contato com sucesso', () => {
    cy.get('[name="name"]').type('Ana Silva')
    cy.get('[name="email"]').type('anasilva@teste.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('Contato enviado com sucesso!').should('exist')
  })

  it('Deve validar mensagem de erro ao enviar formulario sem preencher nome', () => {
    cy.get('[name="email"]').type('anasilva@teste.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, preencha o campo Nome').should('exist')
  });

  it('Deve validar mensagem de erro ao enviar formulario sem preencher e-mail', () => {
    cy.get('[name="name"]').type('Ana Silva')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, preencha o campo E-mail').should('exist')
  });

  it('Deve validar mensagem de erro ao enviar formulario sem selecionar assunto', () => {
    cy.get('[name="name"]').type('Ana Silva')
    cy.get('[name="email"]').type('anasilva@teste.com')
    cy.get('[name="message"]').type('Mensagem de teste')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, selecione o Assunto').should('exist')
  });

  it('Deve validar mensagem de erro ao enviar formulario sem preencher a mensagem', () => {
    cy.get('[name="name"]').type('Ana Silva')
    cy.get('[name="email"]').type('anasilva@teste.com')
    cy.get('[name="subject"]').select('Dúvidas Gerais')
    cy.get('#btn-submit').click()
    cy.contains('Por favor, escreva sua Mensagem').should('exist')
  });
})

