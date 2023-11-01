///<reference types='cypress'/>
import HomePage from '../PageObject/HomePage'
import ProductPage from '../PageObject/ProductPage'
describe('1st testsuit',function()
{
before(function()
{ 
    cy.fixture('example').then(function(data){
    this.data=data
    })

})
    it('testcase',function()
    {
        const homePage=new HomePage()
        const productPage= new ProductPage
         cy.visit(Cypress.env('url')+ "/angularpractice/")
         homePage.getUserName().type(this.data.name)
         homePage.getUserEmail().type(this.data.email)
         homePage.getUserPass().type(this.data.password)
         homePage.getcheckBox().check().should('be.checked')
         homePage.getGender().select(this.data.gender).should('not.have.text','Female')
         //cy.wait(4000)
         //validate the name
         homePage.getValidateName().should('have.value',this.data.name)

         //validate the character should be atleast 2 character
        homePage.getUserName().should('have.attr','minlength','2')
 
         //validate the element is disabeld?
         homePage.getRadioButton().should('be.disabled')
         homePage.getdisabledElementclick().click()

            this.data.productname.forEach(function(element) {
            cy.Product(element)  
        }) 
        productPage.getCheckout().click()
        var sum=0
        cy.get('tr>td:nth-child(4)>strong').each(($el,index,$list)=>{
         const actual=$el.text()
         var res=actual.split(" ")
        res=res[1].trim()
        sum=Number(sum)+Number(res)

}).then(function(){
    cy.log(sum)
})
cy.get('h3 > strong').then(function(element){

    const finalVal=element.text()
    var resu=finalVal.split(" ")
    resu=resu[1].trim()
   expect(sum).equal(Number(resu))
   
    

})
        
        productPage.getCheckoutButton().click()
        productPage.getSelectCountry().type('India')
        productPage.getchooseCountry().click()
        productPage.getPurchaseButton().click()
    productPage.getvalidate().then(function(element){
        const aelem=element.text()
        expect(aelem.includes('Success')).to.be.true

    }) 

    })   
})