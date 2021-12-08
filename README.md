# AmazonProductSearch_Cypress

This is an example project for doing web automation testing using Cypress, Page object model, BDD -cucumber framework. This project tests one functionality of searching a product, sorting the product, select a product and verify the details.

## Running this example

Use the below command in terminal to run the application in visual studio
npm run cypress:open

## Prerequisites

This example requires the following softwares to run.
- Visual Studio

## How To Remake This Project
- Setup Cypress
  1.First, build choose repo where you want cypress
  2.Next, initialze a project and created a package.json file - npm init
  3.Install cypress - npm install cypress --save-dev
  4.Can run cypress tests using
        npm run cypress:open
        npm run cypress:run
        
- Application url is placed under cypress.json
{  
  "env": {
    "application_url": "https://www.amazon.com/"
       }
  }
  
## Feature File
- Feature file under cypress > Integration > ProductSearch > ProductSearch.feature and place feature files there containing gherkin.

        Feature: Amazon Product search
        Search a product in application, sort the results, select the second product and verify the details

        Scenario: Search and verify a product
        Given user enters into application
        Then user search for "nikon" product
        And user sort the product price from highest to lowest
        When user selects row number 2 from results and clicks for details
        Then user verifies product contains "Nikon D3100"
- Install cucumber 
    .Can install cucumber by
        npm i cypress-cucumber-preprocessor --save-dev
    .Add below statements under cypress/plugins/index.js
        var cucumber = require('cypress-cucumber-preprocessor').default
        module.exports = (on, config) => {
          on('file:preprocessor', cucumber());
        };
        
## Step Definition        
 -Create Step_Definitions Folder With Step Definition Files
    Create a folder "step_definitions" within cypress > Integration > ProductSearch > ProductSearch.spec.js and place step definition files there that maps with gherkin
    
 -To use xpath in cypress need to 
    .Add this statement in support/index.js - require('cypress-xpath')
   . Run npm install cypress-xpath in terminal
    
- Add POM page class under cypress > Integration > ProductSearch > ProductSearchPage.js containing methods holding locators

## Html Reports
-For Html reports
 . Add below statement in package.json
     "cypress-cucumber-preprocessor": {
     "cucumberJson": {
      "generate": true,
      "outputFolder": "cypress/cucumber-json",
      "filePrefix": "",
      "fileSuffix": ".cucumber"
    }
   }
 . Run the below command in terminal
    npm install cucumber-html-reporter --save-dev
  
  . Cucumber reports will be saved under cypress/cucumber-json
  
 . To convert json response to html report create a file cucumber-html-report.js under cypress
  
  var reporter = require('cucumber-html-reporter');
var options = {
        theme: 'bootstrap',
        jsonFile: 'cypress/cucumber-json',
        output: './reports/cucumber-htmlreport.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "Browser": "Chrome  96.0.4664.93 ",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
    reporter.generate(options);
    
    .html reports are created under cypress > reports
    
 ## videos   
  -To record test case execution videos   - ./node_modules/.bin/cypress run --record --key 85b3437a-0431-4a87-9243-61a6370568af or cypress run --record --key 85b3437a-0431-4a87-9243-61a6370568af
    Videos are created under cypress > videos
    
    
