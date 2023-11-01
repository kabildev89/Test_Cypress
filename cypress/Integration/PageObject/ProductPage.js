class Productpage{
    getCheckout(){
        return cy.get('a.nav-link.btn.btn-primary')
    }
    getCheckoutButton(){
         return cy.get('button.btn.btn-success')
    }
    getSelectCountry(){
       return cy.get('#country')
                }
                getchooseCountry(){
                    return cy.get('.suggestions>ul>li>a') 
                }
    
    getPurchaseButton(){
        return cy.get('input.btn.btn-success')
    }
    getvalidate(){
       return cy.get('.alert')
    }

}export default Productpage