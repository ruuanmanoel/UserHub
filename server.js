import express from 'express'
import publicRoutes from './routes/public.js'
const PORT = 3035
const app = express();
app.use(express.json());
app.use('/', publicRoutes)



app.listen(PORT,()=>{
    console.log('Servidor rodando')
})


