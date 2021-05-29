const express = require("express");
const app = express();
const path = require("path");
const shortUrl = require("node-url-shortener");
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'/views'));


app.get('/', (req,res) => {
    res.render('index');
})


app.post('/short', (req,res) => {
    const {url} = req.body;
    const prev = url;
    shortUrl.short(url, function(err, url){
        res.render('short-url',{prev:prev,url:url});
        
    });    
})
app.listen(8000,() => {
    console.log("On Port 8000");
})