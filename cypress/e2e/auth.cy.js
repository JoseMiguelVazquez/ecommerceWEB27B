describe('Funcionalidad de Login', () => {
  it('Mi aplicación carga con mi aside menu', () => {
    // Arrange: Setup del estado de mi app
    cy.visit('/')

    // Act: Interactuar con la app o ejecutar acciones
    cy.get('h1')
    .contains('Categorias') //Assert: Verificar que tenemos el comportamiento esperado
  })

  it('Probar el Login como CUSTOMER', () => {
    // Intercept lo uso para saber cuando una llamada a API es
    // resuelta y puedo esperarla en otro momento usando wait()
    cy.intercept('POST', 'https://ecommerce-fake-store-su3i.onrender.com/login').as('login')

    // Arrange
    cy.visit('/login')
    const email = 'drstrange@marvel.com'
    const password = 'multiverso'

    //Act 
    cy.performLogin(email, password)

    cy.wait('@login')
    //Assert
    cy.url().should('eq', 'http://localhost:5173/')
    cy.get('span[id="userName"]').contains('Dr.')
  })

  it('Probar el Login como ADMIN', () => {
    // Intercept lo uso para saber cuando una llamada a API es
    // resuelta y puedo esperarla en otro momento usando wait()
    cy.intercept('POST', 'https://ecommerce-fake-store-su3i.onrender.com/login').as('login')

    // Arrange
    cy.visit('/login')

    //Act 
    cy.performLogin('superman@dc.com', 'superman')

    cy.wait('@login')
    //Assert
    cy.url().should('eq', 'http://localhost:5173/')
    cy.get('span[id="userName"]').contains('Clark')
    cy.get('li[id="settingsLink"]').contains('settings')
  })

  it('Cuando haga Logout me lleve a la página de Home y muestre link de Ingresa', () => {
    // Intercept lo uso para saber cuando una llamada a API es
    // resuelta y puedo esperarla en otro momento usando wait()
    cy.intercept('POST', 'https://ecommerce-fake-store-su3i.onrender.com/login').as('login')

    // Arrange
    cy.visit('/login')

    //Act 
    cy.performLogin('drstrange@marvel.com', 'multiverso')
    cy.wait('@login')
    cy.get('nav > div > ul li:last').click()
    //Assert
    cy.url().should('eq', 'http://localhost:5173/')
    cy.get('nav > div > ul li:nth-child(2)').should('have.text', 'Ingresa')
  })

})