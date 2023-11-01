describe('second project',function(){
    it('login in the automation URL',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.wait(3000)
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
        cy.get("input[type='checkbox']").check(['option2','option3'])

        cy.wait(3000)

        //static dropdown

        cy.get('select#dropdown-class-example').select('option2').should('have.value','option2')

        //dynamic dropdown
       cy.get('input#autocomplete').type('ind')
       cy.get('li.ui-menu-item div').each(($el,index,$list)=>{

        if($el.text()=='India'){ 
          cy.wrap($el).click()
        }
        })
        cy.get('input#autocomplete').should('have.value','India')
        cy.wait(2000)
        cy.get('input#show-textbox').click()
        cy.get('input#displayed-text').should('be.visible')
        cy.get('input#hide-textbox').click()
        cy.get('input#displayed-text').should('not.be.visible')

        //Handle radiobutton

        cy.get('input[value="radio2"]').check().should('be.checked')
         


    })


})
