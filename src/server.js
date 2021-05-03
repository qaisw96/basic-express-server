'use strict';

const express = require('express');
const app = express()

const errorHandler = require('./error-handlers/500.js')
const notFoundError = require('./error-handlers/404.js')

const logger = require('./middleware/logger.js')
const validator = require('./middleware/validator.js')
app.use(logger)
app.use(validator)


app.get('/person', (req, res) => {
    res.status(200).json({
        name: req.query.name
    })

})


// error handlers
app.use('*', notFoundError )
app.use(errorHandler)


// listening function
function start(port) {
    app.listen(port, () => console.log(`Listening to PORT ${port}`));
}





module.exports = {
    app,
    start
}



