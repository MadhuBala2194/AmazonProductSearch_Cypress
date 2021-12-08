Feature: Amazon Product search

        Search a product in application, sort the results, select the second product and verify the details

        Scenario: Search and verify a product
        Given user enters into application
        Then user search for "nikon" product
        And user sort the product price from highest to lowest
        When user selects row number 2 from results and clicks for details
        Then user verifies product contains "Nikon D3100"