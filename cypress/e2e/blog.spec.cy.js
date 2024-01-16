/// <reference types="cypress" />


describe('blog page', () => {
    it('should allow user to visit blog and article', () => {
      cy.visit('/');
  
      cy.wait(20000);

      cy.get('[aria-label="Close dialog 1"]')
        .click();
  
      cy.contains('.gr-footer__nav-link', 'BLOG')
        .click();
  
      cy.assertPageUrl('/blogs/news');
  
      cy.get('h1')
        .should('contain.text', 'News');
  
      cy.get('.gr-blog-search')
        .should('exist');
  
      cy.get('div.gr-main-blog__articles')
        .find('a')
        .its('length')
        .should('be.gt', 1);
  
      cy.get('.gr-pagination__list')
        .should('exist');
  
      cy.contains('.gr-article-card__heading', 'KASK Helmets Get An Upgrade: Plasma Becomes SuperPlasma')
        .click();
  
      cy.contains('h1', 'KASK Helmets Get An Upgrade: Plasma Becomes SuperPlasma')
        .should('exist');
  
      cy.get('.gr-author-info')
        .should('exist');
  
      cy.get('.gr-sharing-wrap')
        .should('exist');
  
      cy.get('div.gr-additional-articles')
        .find('a')
        .its('length')
        .should('be.gt', 1);
  
    });
  });