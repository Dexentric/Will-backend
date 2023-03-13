const mongoose = require('mongoose');
mongoose.set('strictQuery', false);


const connectDB = async ()=>{
    try {
        const connect = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        
           console.log(`connected to ${connect.connection.host}`);
       } catch (error) {
            console.log(`error occuring in the db${error}`)
          }  
}

module.exports = connectDB