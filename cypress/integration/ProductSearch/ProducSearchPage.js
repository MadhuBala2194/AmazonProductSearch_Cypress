class ProductSearchPage{
    
    static loadHomePage(){
        cy.visit(Cypress.env('application_url'))
   cy.wait(5000)
    cy.title().should('eq','Amazon.com. Spend less. Smile more.')

    }
    static searchProduct(product){
        cy.get("#twotabsearchtextbox").type(product)
    cy.get("#nav-search-submit-button").click()
    cy.wait(3000)
cy.get("#a-autoid-0-announce").click()
     
    }

    static sortproductprice(){
        cy.get("#a-autoid-0-announce").select
    cy.contains("a", "Price: High to Low").click();
    cy.wait(3000)

    }
    static selectProduct(rownumber){
        cy.xpath('(//*[@class="a-link-normal a-text-normal"])['+(rownumber)+']').click()
        cy.wait(3000)
    }
    static verifyTheProductSelected(product_code){
        cy.get("#productTitle").should('include.text',product_code)  
cy.log("done")
    }
}
export default ProductSearchPage;