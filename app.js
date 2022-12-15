const express =  require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const app = express()

app.use(express.static("public"));
app.use(express.static("views"));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

let newItems = []
app.get('/',function(req,res){
    let options = {weekday: 'long',year: 'numeric', month: "long", day:'numeric'};
    let today = new Date();
    let day = today.toLocaleDateString('en-US',options)

    res.render('list', {KindofDay:day, newListItems:newItems})
});

app.post('/', function(req,res){
    let newItem = req.body.newItem
    newItems.push(newItem)
    res.redirect('/')
})


app.get('/about',function(req,res){
    res.render('about')
});

app.get('/contact',function(req,res){
    res.redirect("https://form.123formbuilder.com/6318073/contact-form")
});

app.get('/myweb',function(req,res){
    res.redirect("https://web.adithyacreation.repl.co")
});

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})