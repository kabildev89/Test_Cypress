describe('handle windows ',function(){

    it(' testcase to handle windows ',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr','target').click()

        cy.origin('https://www.qaclickacademy.com',function()
        {
          cy.get('.nav-item a[href="contactus.html"]').click()
          cy.get('.section-title h2').should('contain','Keep in touch')
        })
        
        
    })
})