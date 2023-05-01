const mongoose = require("mongoose");
const colors = require("colors")

mongoose.set('strictQuery', false)
const connectDB = async() => {
    try{
        // console.log("checl")
        const conn = await mongoose.connect("mongodb+srv://ayush:ayush@cluster0.vdqp1hq.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser: true,

      useUnifiedTopology: true,
       });
         console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
    }catch(error){
        console.log(`Error: ${error.message}`);
    process.exit();
    }
}

module.exports = connectDB;