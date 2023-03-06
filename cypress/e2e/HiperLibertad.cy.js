describe ('buscar en Hiper Libertad', () =>{
    it('Ingresa y busca', () => {
      cy.viewport(1366, 768)
      cy.visit('https://www.hiperlibertad.com.ar/')
    
      cy.contains('retiro en tienda').click()
      cy.get('.styles__CloseButton-sc-3xue66-2').click()

      cy.get('input[placeholder="Buscar productos por nombre..."]').type('aceite')

      cy.contains('resultados').click()


    })
})