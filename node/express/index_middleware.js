const express = require('express');
const app = express();

const middleware = (req,res,next)=>{
    if(req.path.includes('Mansi')){
        next();
    }else{
        res.send('Unauthorized Access');
    }
}
app.use(middleware);
app.get("/",(req,res)=>{
    res.send("Hello User");
});

app.get('/getName/:name',(req,res) =>{
    res.send(`My name is ${req.params.name}`);
})

app.listen(3000, () =>{
    console.log("Sever is running on port 3000");
});