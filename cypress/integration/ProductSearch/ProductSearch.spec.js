import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import ProductSearchPage from './ProducSearchPage';
import ProductSearch from './ProducSearchPage'
Given('user enters into application', ()=>{
  ProductSearchPage.loadHomePage()
   
})
When('user search for {string} product', (product)=>{
    ProductSearchPage.searchProduct(product)    

})
And('user sort the product price from highest to lowest',()=>{
  ProductSearchPage.sortproductprice()
})
When('user selects row number {int} from results and clicks for details',(rownumber)=>{
    ProductSearchPage.selectProduct(rownumber)
  })

Then('user verifies product contains {string}',(product_code)=>{ 
ProductSearchPage.verifyTheProductSelected(product_code)

  
})