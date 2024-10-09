describe('SignIn', () => {
  it('Should sucess in authenticate and navigate to logged area', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-cy="userName-input"]').type('teste');
    cy.get('[data-cy="password-input"]').type('pass1');
    cy.get('[data-cy="submit-button"]').click();

    cy.url().should('include', 'http://localhost:5173/dashboard');
  });

  it('Should has error message  in the empty fields after submit form', () => {
    cy.visit('http://localhost:5173/');

    cy.get('[data-cy="submit-button"]').click();

    cy.get('span')
      .filter(':contains("Campo obrigatório")')
      .should('have.length', 2);
  });

  it('Should has error toast message invalid user', () => {
    cy.visit('http://localhost:5173/');

    cy.on('uncaught:exception', (err) => {
      return false;
    });

    cy.get('[data-cy="userName-input"]').type('abc');
    cy.get('[data-cy="password-input"]').type('passddd');
    cy.get('[data-cy="submit-button"]').click();

    cy.contains('Usuário inválido!').should('be.visible');
  });
});
