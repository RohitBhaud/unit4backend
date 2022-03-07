const express = require("express");

const app = express()

app.use(logger)

app.get("/books",(req,res)=>{
    return res.send({route:"/books",role:req.role})
})

app.get("/libraries" ,permission("libraries"), (req,res)=>{
    return res.send({route:"/libraries",permission: true ,role:req.role})

})
app.get("/author" ,permission("author"), (req,res)=>{
    return res.send({route:"/author",permission: true ,role:req.role})
    
})

function logger(req ,res,next){
   if(req.path="/books"){
       req.role = "books"
       console.log("books")
       next();
   }
  else if(req.path="/libraries"){
    req.role = "libraries"
    console.log("libraries")
    next();
}
else if(req.path="/author"){
    req.role = "author"
    console.log("author")
    next();
}
}

function permission(){
    return function permission(req,res,next){
        if(req.path=="/libraries"){

        }
    }
}

const PORT = 3333;
app.listen(3333 , function(){
    console.log("listen to port 3333")
})

