describe('test app functionality', () => {

  beforeEach(() => {
    cy.task('goTruncateCountries')
    cy.task('goCreateCountries')
    cy.visit('/');
  })

  afterAll(() => {
    cy.task('goTruncateCountries')
  })

  it('READ: displays country names', () => {
    cy.get('#title').contains('Country Profile Viewer');
    cy.get('#subtitle').contains('Here are a list of countries, feel free to explore!');
    cy.get('country-1-name').contains('France');
    cy.get('country-2-name').contains('Japan');
    cy.get('country-3-name').contains('United Kingdom');
    cy.get('country-4-name').contains('United States');
  });

  it('READ: displays a country flag', () => {
    cy.get('country-1-name').contains('France');
    cy.get('country-1-flag').should('be.visible');
  });
  
  it('UPDATE: can filter countries by population', () => {
    cy.get('#filter-box').select('population');
    cy.get('country-1-name').contains('United States');
    cy.get('country-2-name').contains('Japan');
    cy.get('country-3-name').contains('United Kingdom');
    cy.get('country-4-name').contains('France');
  });

});
