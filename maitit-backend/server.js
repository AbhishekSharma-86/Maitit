import express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js';
import Cors from 'cors';

//App config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = "mongodb+srv://AbhiSharma_86:AbhishekSharma@cluster0.x8kmh.mongodb.net/?retryWrites=true&w=majority"
//Middleware
app.use(express.json());
app.use(Cors());
//DB config
mongoose.connect(connection_url, )

//API endpoints
app.get('/', (req, res)=> res.status(200).send("Hello world"));
app.post('/maitit/card', (req, res)=>{
    const dbCard = req.body;

    Cards.create(dbCard, (err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(data);
        }
    })
});

app.get('/maitit/card', (req, res)=>{
    Cards.find((err, data)=>{
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(200).send(data);
        }
    })
})
//Listener
app.listen(port, ()=> console.log(`listening at localhost:${port}`));
