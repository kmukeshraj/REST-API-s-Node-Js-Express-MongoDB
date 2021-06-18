const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/REST_API').then(()=>{
console.log('mon connected...');
})
  
cl

const app = express();

const productRoute = require('./Routes/Product.route');

app.use('/products', productRoute);

// 404 handler and pass to error handler
app.use((req, res, next)=> {
 const err = new Error("Not Found");
 err.status = 404;
 next(err);

})

// Error Handler
app.use((err,req,res,next) => {
res.status(err.status || 500);
res.send({
    error:{
        status:err.status || 500,
        message: err.message
    }
})

});



app.listen(3001,()=>{
    console.log('expr 3001');
})












// const http=require('http');
// const server=http.createServer((req,res) => {
// res.write('i m listening');
// res.end();
// })

// server.listen(3001,()=>{
//     console.log('started on 3000')
// })