///<reference types="cypress"/>

describe("this is my firts project",function(){
it("this is test1",function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    cy.get('input.search-keyword').type('ca')
    cy.wait(2000)
    //cy.get('.product:visible').should('have.length',4)
    cy.get('.products').as('productsLocator')//------------>as used as alia
    // RESUSE THE LOCATORS
    
    //using index to select the item to the cart
    cy.get('@productsLocator').find('.product').eq('1').contains('ADD TO CART').click()
    
    //dynamically select the item to the cart
    cy.get('@productsLocator').find('.product').each(($e1,index,$list) =>{
       const textveg= $e1.find('h4.product-name').text()
       if(textveg.includes('Cashews')){
        cy.wrap($e1.find('button')).click() 
       }
       cy.get('.brand').should('have.text','GREENKART')//ASSERTION
       cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())
    
       })

    })
})
})

