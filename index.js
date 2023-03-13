const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cors = require('cors');
// const bodyParser = require('body-parser');
const fileRoutes = require('./routes/file-upload-routes');
const connectDB = require('./database');
require('dotenv').config();
const userRouter = require("./routes/userRoutes")
// const bodyParser = require('body-parser');
const { notFound,errorHandler } = require("./errorMiddleware/errorMiddleware")
// const app = express()
//const Authroutes = require('./routes/auth-routes');

connectDB();
const port = process.env.PORT || 8000;
const app = express();
app.use(cors());

app.use(express.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.get("/",(req,res)=>{
  res.send("we are here")
})
app.use('/api', fileRoutes.routes);
// !mine
app.use("/api",userRouter)
app.use(errorHandler)
app.use(notFound)
//app.use('/api', Authroutes.routes);

//app.listen(port, () => console.log(`server is listening on url http://localhost:${port}`));

app.listen(port, () => {
    console.log("server running successfully");
  });
  