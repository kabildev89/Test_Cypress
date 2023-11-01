describe('handling mouseHover',function()
{
    it('mouse hover testcase',function()
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('div .mouse-hover-content').invoke('show')
        cy.get('a[href="#top"]').click({force: true})//{force: true} it will click auto 
                                                     //without opening main menu i.e even its hidden
        cy.url().should('include','top')

    })

})  