
// require('dotenv').config()
import dotenv from 'dotenv'
import connectDB from './db/db.js';
import app from './app.js'

dotenv.config({
    path: './.env'
});
connectDB().
then(()=> {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Successfully connected to server on port ${process.env.PORT}`);
    })
}).catch((err)=>{
    console.log("Mongo db connection failed!!",err)
})



