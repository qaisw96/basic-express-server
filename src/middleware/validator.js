module.exports = (req, res, next) => {
    let name = req.query.name
    console.log( name );
    if( name === '' ) {
        next('you have to write valid name')
    } else {
        next()
    }
}