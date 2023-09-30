var fs = require('fs')

exports.readModule = function(path){
    fs.readFile(path, 'utf8', (err, Response) => {
        err ? console.log(err) : console.log(Response)
    })
}