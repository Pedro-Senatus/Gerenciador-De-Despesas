import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import router from './routes/dataExpenses.js'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(express.json())
app.use(cors())
app.use(router)

mongoose.connect(process.env.CONNECTIONSTRING)
.then(()=>{
    app.emit('pronto')
}).catch((error)=>{
    console.log(`Erro na conexão com o banco ${error}`)
})
    
app.on('pronto', ()=>{

    app.listen(3000, ()=> console.log("server on http://localhost:3000"))
})

