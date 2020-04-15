var bodyParser=require('body-parser');

var mongoose=require('mongoose')

//connect to database
 

mongoose.connect("mongodb+srv://prashant:prashant@cluster0-gowjy.mongodb.net/test?retryWrites=true&w=majority",{ useUnifiedTopology: true,useNewUrlParser: true }).catch(error => handleError(error))

//handling error
function handleError(err){
    console.log(err);
}

//create schema

var todoSchema=new mongoose.Schema({
    item:{
        type:String
    }
})

var Todo=mongoose.model('Todo',todoSchema)

/*
var itemOne=Todo({item:'get flowers'}).save((err)=>{
    if(err)throw err;
    console.log('item saved');
});
*/ 
//var data=[{item:'get milk'},{item:'walk dog'},{item:'kick some coding ass'}];

var urlencodedParser=bodyParser.urlencoded({extended:false});


module.exports= function(app){

    // get request for home page  
    app.get('/todo',(req,res)=>{

        //get all data from mongo db
        Todo.find({},(err,data)=>{
            if(err)throw err;

            /*todos is just property name */
            res.render('todo',{todos:data});
        })
        
    });
    
    app.post('/todo',urlencodedParser,(req,res)=>{
        // get data from view and add it to mongo db
        var newTodo=Todo(req.body).save((err,data)=>{
            if(err)throw err;
            res.json(data);
        })
        //data.push(req.body);
        //res.json(data);
    });

    app.delete('/todo/:item',(req,res)=>{
        //delete the requested item from mongodb
        Todo.find({item:req.params.item.replace(/\-/g," ")}).remove((err,data)=>{
            if(err)throw err;
            res.json(data);
        }) 
        /*
        data=data.filter((todo)=>{
            return todo.item.replace(/ /g,'-')!==req.params.item;
        })
        res.json(data);
        */
    });
};