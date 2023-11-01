
describe('handle ALERT window ',function(){

    it(' testcase to handle alert ',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#alertbtn').click()
        cy.get('#confirmbtn').click()

        //check the alert if the option have only one like "Ok"
        cy.on('window:alert',(str) =>{

            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        //handle alert using the option "ok" and "cancel"

        cy.on("window:confirm",(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')  
        })

    })

})