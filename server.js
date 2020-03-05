var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var cors = require('cors')
var http = require ("http");
var server = http.createServer(app);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))
app.use(express.static("public"));

app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.set('view engine', 'ejs');


app.post("/uploadData", (req, res) => {
    if(req.body.randomDataString)
     res.status(200).json({message:"test upload data succeeded"})
    else
     res.status(400).json({message:"test upload data failed !"})
  });
  
  app.get('/downloadData', function(req, res) {
      res.sendFile(__dirname+"/public/img.jpg");
  });
  
  app.get('/getResponseTime', function(req, res) {
    res.status(200).json({message:"get request succeeded"});
});

  
  app.get('/', function(req, res) {
      res.render("index");
  });
  

server.listen(9090,()=>{
    console.log("server is running on port 9090");
})