require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const workoutRouters = require('./routes/workout');



const app = express();

app.use(express.json());
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next();
});

//routes
app.use('/api/workouts', workoutRouters);



mongoose.connect(process.env.mongo_uri)
        .then(()=>{
            console.log('database connected!')
            app.listen(process.env.port, () => {
                console.log(`server started at port: ${process.env.port}`);
            })
        })
        .catch((err)=>{console.log(err)});




