const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const productRoutes=require('./routes/product.routes');
const authRoutes=require('./routes/auth.routes');
// const { db } = require('./models/products')
const app = express();
const port = 3000
//configuraciones
app.use(morgan('dev'));

mongoose.connect('mongodb+srv://admin:Mvpemq100v@cluster0.1fihi.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db => console.log('conectado a la DB'))
.catch(err => console.error(err))
app.use(express.urlencoded({extended: false}))



//rutas
app.use('/products', productRoutes)
app.use('/auth', authRoutes)
app.get('/',(req,res)=>{
    res.send('Hello tripulante Nicolas')
})
// app.get('/',(req,res)=>{res.send('Hello juan')
// })
app.post('/app', (req,res)=>{res.send('Esta es un request post')})
//inicio del server
app.listen(port,()=>{
    console.log(`escuchando en puerto ${port}`
    )});