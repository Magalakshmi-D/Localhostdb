const express = require('express');

const app=express();

var cors = require('cors');
app.use(cors());
app.get('/',(request,response)=>{
    // response.send('<h1 style="color:green;">HIII Dude</h1>');
    response.json({success:true,message:'Welcom backend zone'});
});

app.listen(8000,()=>{
    console.log('Port is listening');

})
