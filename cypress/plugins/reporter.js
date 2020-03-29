const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: './cypress/reports/',
    reportPath: './cypress/reports/html/report.html',
    openReportInBrowser: true,
    saveCollectedJSON: false,
    pageTitle: 'Shapermint - Automation Report',
    reportName: 'Shapermint - Automation Report',
    displayDuration: true,
	metadata:{
        browser: {
            name: 'chrome',
            version: 'Latest'
        },
        device: 'Local test machine',
        platform: {
            name: 'osx',
            version: 'Catalina'
        }
    },
    customData: {
        title: 'Run information',
        data: [
            {label: 'Project', value: 'Shapermint'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Cycle', value: '1.0.0'}
        ]
    }
});