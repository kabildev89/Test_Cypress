class HomePage{
    getUserName(){
        return cy.get('form div input[name="name"]')
    }
    getUserEmail(){
        return cy.get('form div input[name="email"]')
    }
    getUserPass(){
        return cy.get('form div input#exampleInputPassword1')
    }
    getcheckBox(){
        return cy.get('form div input#exampleCheck1')
    }
    getGender(){
    return cy.get('select')
     }
     getValidateName(){
        return cy.get('h4 input.ng-untouched')
     }
     getRadioButton(){
        return cy.get('#inlineRadio3')
    }
    getdisabledElementclick(){
       return cy.get('a[href="/angularpractice/shop"]')
    }

}
export default HomePage;