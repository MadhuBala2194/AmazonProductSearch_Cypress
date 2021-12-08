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