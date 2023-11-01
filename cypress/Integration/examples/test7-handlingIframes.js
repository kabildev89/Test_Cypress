//to perform cypress-iframe we have to in terminal using npm install -D cypress-iframe
// we have to import 'cypress-iframe'

///<reference types='cypress'/>
///<reference types='cypress-iframe'/>

import'cypress-iframe'

describe('Handling Frames',function()
{
    it('frames',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        //cy.wait(3000)
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.wait(1000)
        cy.iframe().find("div .pricing-header div.bg-pattern-1").should('have.length',2)
    })

})
