const express = require('express')
const fs = require('fs')

module.exports = class Application {
    constructor() {
        this.app = express()
    }

    newPage(link, send) {
        this.app.get(link, function(req, res) {
            res.send(send)
        })
    }

    run(port = '3000', action = 'console.log("App ready !")') {
        const data = fs.readFileSync('express.html', 'utf8')
        this.app.get('/express', function(req, res){
            res.send(data)
        })
        this.app.listen(port, function() {
            eval(action)
        })
    }

    newHtmlPage(link, file) {
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            this.app.get(link, function(req, res) {
                const thedata = data.replace('<{{ footer }}/>', '<footer style="background: black;color: white;border-radius: 20px;padding: 15px"><p>&copy; Propulsé par <a href="https://github.com/liam-gen/easy-express", style="text-decoration: none";text-color: white, target="_BLANK">easy-express</a></p></footer>')
                res.send(thedata)
            })
        })
    }

    newJsonPage(link, json) {
        this.app.get(link, function(req, res) {
            res.json(json)
        })
    }
}