const express = require('express');
// const cors = require('cors');

const app = express();



const middleware = (req,res,next) => 
{
    console.log("I am in middleware 1.")
    console.log("I got the first request")
    next();

};

const middleware2 = (req,res,next)=>{
    console.log(req+"I am in middleware 2");
    next();
}

app.use(middleware);

app.get("/",(req,res)=>{
    console.log("I am on homepage");
    res.send(`<h1>This is Home page. We have two routes - About & Contact</h1>`)
})
app.get("/about",middleware,(req,res)=>{
    console.log("First middleware request received");
    res.send(`<h1>Middleware 1 - This is about page</h1>`)
})
app.get("/contact",middleware2,(req,res)=>{
    console.log("Second middleware request received");
    res.send(`<h1>Middleware 2 - This is contact</h1>`)
});
app.listen(3010);