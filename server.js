var alunoBiblioteca = require("./alunoBiblioteca")
var fs = require("fs")

const http = require("http")

http.createServer(function(req,res){
    fs.readFile("aluno.html", function(err, data){
        res.write(data)
        return res.end()
    })
    
}).listen(8081)