/// <reference types="cypress" />

describe('should filter products', () => {

    beforeEach(() => {
      cy.visit('/');
    
      cy.wait(20000);
  
      cy.get('[aria-label="Close dialog 1"]')
        .click();
    
    });  

    it('should filter by brand', () => {
 
      cy.contains('.gr-header-menu__link', 'Tools & Lighting')
        .click();
  
      cy.get('#gr-btn-filters-show')
        .click();
  
      cy.get('.gr-filters')
        .should('exist');
  
      cy.wait(5000);
  
      cy.contains('h3', 'Brand')
        .should('exist');
  
      cy.contains('h3', 'Price')
        .should('exist');
  
      cy.contains('h3', 'Color')
        .should('exist');
  
      cy.contains('h3', 'Product Type')
        .should('exist');
  
      cy.contains('h3', 'Detail')
        .should('exist');
  
  
      cy.contains('.gr-checkbox-wrap', 'Berger')
        .click();

      cy.get('body')
        .click('center', { force: true });
  
      cy.wait(10000);
  
      cy.get('.gr-card-rich-product__details').each((productCard) => {
        cy.wrap(productCard).should('contain.text', 'Berger');
      });
  
    });

    it('should check product detail', () => {

        cy.contains('.gr-header-menu__link', 'Tools & Lighting')
          .click();
    
        cy.get('#gr-btn-filters-show')
          .click({ force: true });
    
        cy.wait(5000);
    
        cy.contains('.gr-checkbox-wrap', 'AA')
          .click({ force: true });
    
        cy.get('div.gr-search-popup.gr-hidden')
          .find('a.gr-filters-close')
          .click({ force: true });
    
        cy.wait(10000);
    
        cy.get('.gr-card-rich-product__details').each((productCard) => {
          // Use .as() to alias the productCard element
          cy.wrap(productCard).as('productCard');
        
          // Now you can continue with further commands on the aliased productCard
          cy.get('@productCard')
            .find('.gr-card-rich-product__heading')
            .invoke('text')
            .should('include', 'AA');
        });
        
    });

    it('should filter by prices', () => {

    });

    it('should filter via the color', () => {

        cy.contains('.gr-header-menu__link', 'Workwear')
          .click();

        cy.get('#gr-btn-filters-show')
          .click({ force: true });
    
        cy.wait(5000);
    
        cy.get('[title="Blue"]')
          .click( {force: true} );
    
        cy.get('div.gr-search-popup.gr-hidden')
          .find('a.gr-filters-close')
          .click({ force: true });
    
        cy.wait(10000);
    
        cy.contains('.gr-card-rich-product__heading', 'Dunlop Purofort Boots - FoodPro Multigrip')
          .click();
    
        cy.get('product-option')
          .should('contain', 'Blue');
    
    });

    it('should filter via type', () => {
    
        cy.contains('.gr-header-menu__link', 'Tools & Lighting')
          .click();
    
        cy.get('#gr-btn-filters-show')
          .click({ force: true });
    
        cy.wait(5000);
    
        cy.contains('.gr-checkbox-wrap', 'Hammer')
          .click({ force: true });
    
        cy.get('div.gr-search-popup.gr-hidden')
          .find('a.gr-filters-close')
          .click({ force: true });
    
        cy.wait(10000);
    
        cy.get('.gr-card-rich-product__details').each((productCard) => {
          cy.wrap(productCard)
            .find('.gr-card-rich-product__heading')
            .invoke('text')
            .should('include', 'Hammer');
        });
    
    });


});