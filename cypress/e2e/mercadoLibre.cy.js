describe('Visit Mercado Libre', () => {
    it('Search for PC components', () => {
      cy.visit('https://mercadolibre.com')

      cy.contains('Argentina').click()
      
      cy.origin('https://www.mercadolibre.com.ar', () => {
        
        cy.get('#cb1-edit').type('Componentes de PC{enter}')
      })

      
    })
  })