const cypress = require('cypress')

cypress.run()
.then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.error(err)
  });