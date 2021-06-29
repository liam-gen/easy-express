const express = require('express')
const fs = require('fs')

class Application{
    constructor(){
        this.app = express()
    }
    
    newPage(link, send){
        this.app.get(link, function(req, res) {
            res.send(send)
        })
    }

    run(port='3000', action='console.log("App ready !")'){
        this.app.get('/express', function (req, res){
            res.send("<h1>Ce site est propulsé par easy-express</h1>")
        })
        this.app.listen(port, function (){
            eval(action)
        })
    }

    newFilePage(link, file){
        fs.readFile(file, 'utf8', (err, data) => {
            if (err){
                console.log(err)
                return
            }
            this.app.get(link, function(req, res){
                const thedata = data.replace('<{{ footer }}/>', '<footer style="background: black;color: white;border-radius: 25px;padding: 15px"><p>&copy; Propulsé par easy-express</p></footer>')
                res.send(thedata)
            })
        })
    }

    newJsonPage(link, json){
        this.app.get(link, function(req, res){
            res.json(json)
        })
    }
}

const app = new Application()

app.newFilePage('/', 'index.html')
app.run()