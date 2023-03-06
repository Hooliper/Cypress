describe ('buscar en Hiper Libertad', () =>{
    it('Ingresa y busca', () => {
      cy.viewport(1366, 768)
      cy.visit('https://www.hiperlibertad.com.ar/')
    
      //cy.contains('retiro en tienda').click()

      //Selecciona Retiro en tienda
      cy.get('div.styles__Content-sc-1grwrp2-1 > button:nth-child(2)').click()
      
      //cy.get('.styles__CloseButton-sc-3xue66-2').click()
      
      //Selecciona Provincia
      cy.get('div#state > div.react-select__control').click()
      cy.contains('Misiones').click()

      //Selecciona tienda
      cy.get('div#store > div.react-select__control').click()
      cy.contains('MISIONES - Hipermercado Posadas').click()



      /*
      cy.get('input[placeholder="Buscar productos por nombre..."]').type('aceite')

      cy.contains('resultados').click()
      */


    })
})