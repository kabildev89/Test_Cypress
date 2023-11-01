
describe('handling table',function(){
    it('table testcase',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#product td:nth-child(2)').each(($e1,index,$list)=>{

           const txstr= $e1.text()

           if(txstr.includes('TestNG')){
            cy.get('#product td:nth-child(2)').eq(index).next().then(function(price){

                const pricetxt=price.text()
                expect(pricetxt).to.equal("20")
               
            })

           }
        })

    })
})