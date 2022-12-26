import express from 'express'
import mongoose, { Query } from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import *as dotenv from 'dotenv'
import postRoutes from './routes/postRouter.js'

dotenv.config()

const app =express()
const PORT = process.env.PORT || 4001
const URI = process.env.MONGODB_URI || "mongodb://localhost:27017/Blogify"

mongoose
  .connect(URI)
  .then(() => console.log('Mit MongoDB verbunden.'))
  .catch((err) => console.log('Verbinden mit MongoDB fehlgeschlagen.', err));

mongoose.connection.on('error', console.log);
mongoose.set({strictQuery:true})

app.use(express.json())
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))

app.use('/',(req,res)=>{res.send('Hallo')})
app.use('/posts',(req,res)=>{res.status(200).send('Hallo')})

app.listen(PORT,()=>{
        console.log(`Server läuft auf PORT : ${PORT}`);
})





