var express = require('express');
var todoController=require('./controllers/todoController')


var app=express();

// set a template engine
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

//built in static middleware
app.use(express.static('./public'));
//app.use('/public', express.static(path.join(__dirname, "public")));

//fire controllers
todoController(app);

//listenn to port
app.listen(3000);
console.log('Port 3000'); 

























/*
var express=require('express');
var app=express();

app.set('view engine','ejs');

app.get('/',(req,res,next)=>{
    //below must be send html pages
    //res.send('this is home page');
    //res.sendFile(__dirname+'/index.html');
    res.render('index')
})
app.get('/contact',(req,res,next)=>{
    //res.send('this is contact page');
    //res.sendFile(__dirname+'/contact.html');
    res.render('contact')
})

app.get('/profile/:name',(req,res,next)=>{
    
    //res.send(req.params.id);
    res.render('profile',{person:req.params.name});
})
app.listen(3000);
*/
 
/*
var http=require('http');
var fs=require('fs');

 
var server=http.createServer((req,res)=>{
    console.log('req was :'+req.url);
    if(req.url==='/home'||req.url==='/'){
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/index.html').pipe(res);
    }else
    if(req.url==='/contact')
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/contact.html').pipe(res);
    }else
    if(req.url==='/api/ninjas'){
        var ninjas=[{name:'ryu',age:29},{name:'yoshi',age:32}];
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(ninjas))
    }else{
        res.writeHead(404,{'Content-Type':'text/html'});
        fs.createReadStream(__dirname+'/404.html').pipe(res);
    }


    
 
});

server.listen(3000);
console.log('No listening to port 3000');
*/