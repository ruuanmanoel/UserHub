import express from 'express'
import publicRoutes from './routes/public.js'
import privateRoutes from './routes/private.js'
import auth from './middlewares/auth.js'

const PORT = 3035
const app = express();
app.use(express.json());
app.use('/', publicRoutes)
app.use('/', auth, privateRoutes)



app.listen(PORT,()=>{
    console.log('Servidor rodando')
})


