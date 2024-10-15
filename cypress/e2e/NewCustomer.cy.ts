describe('NewCustomer', () => {
  it('Should register new customer with success', () => {
    //Auth Step
    cy.visit('http://localhost:5173/');

    cy.get('[data-cy="userName-input"]').type('teste');
    cy.get('[data-cy="password-input"]').type('pass1');
    cy.get('[data-cy="submit-button"]').click();

    cy.visit('http://localhost:5173/customers');

    cy.get('[data-cy="newCustomer-button"]').click();

    //Filled Input Step

    cy.get('[data-cy="name-input"]').type('E2E Test');
    cy.get('[data-cy="foundThrough-input-trigger"]').click();
    cy.get('[data-cy="foundThrough-input-Instagram"]').click();
    cy.get('[data-cy="document-input"]').type('00000000000');
    cy.get('[data-cy="phoneNumber-input"]').type('00000000000');
    cy.get('[data-cy="birthDate-input"]').type('00000000');
    cy.get('[data-cy="vehicle-input"]').type('E2E Vehicle');

    cy.get('[data-cy="submit-button"]').click();
    cy.contains('Novo cliente adicionado').should('be.visible');
  });

  // it('Should has error message  in the empty fields after submit form', () => {
  //   cy.visit('http://localhost:5173/');

  //   cy.get('[data-cy="submit-button"]').click();

  //   cy.get('span')
  //     .filter(':contains("Campo obrigatório")')
  //     .should('have.length', 2);
  // });

  // it('Should has error toast message invalid user', () => {
  //   cy.visit('http://localhost:5173/');

  //   cy.on('uncaught:exception', (err) => {
  //     return false;
  //   });

  //   cy.get('[data-cy="userName-input"]').type('abc');
  //   cy.get('[data-cy="password-input"]').type('passddd');
  //   cy.get('[data-cy="submit-button"]').click();

  //   cy.contains('Usuário inválido!').should('be.visible');
  // });
});
