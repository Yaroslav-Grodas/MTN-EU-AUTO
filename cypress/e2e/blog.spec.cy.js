/// <reference types="cypress" />


describe('blog page', () => {
    it('should allow user to visit blog and article', () => {
      cy.visit('/');
  
      cy.wait(20000);

      //cy.get('[aria-label="Close dialog 1"]')
        //.click();

      //cy.contains('#title-Close', 'Close dialog')
        //.click();
  
      cy.contains('button', 'NO, THANKS')
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
  
      cy.contains('.gr-article-card__heading', 'Light Up The Worksite With Ledlenser')
        .click();
  
      cy.contains('h1', 'Light Up The Worksite With Ledlenser')
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