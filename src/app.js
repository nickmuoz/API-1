const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const productRoutes=require('./routes/product.routes');
const authRoutes=require('./routes/auth.routes');
const customerRoutes = require('./routes/customer.routes');
const serviceRoutes = require('./routes/service.routes');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const sendMail = require('./routes/SendMail.routes');


app.use(morgan('dev'));
app.set('port',process.env.PORT||3000)
app.use(cors())
//lineas nuevas pendiente terminar node mailer 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// mongoose.connect('mongodb://localhost:27017')
mongoose.connect('mongourlconnection')
.then(db => console.log('conectado a la DB'))
.catch(err => console.error(err))
app.use(express.urlencoded({extended: false}))



//rutas
app.use('/products', productRoutes)
app.use('/auth', authRoutes)
app.use('/customers', customerRoutes)
app.use('/service', serviceRoutes)
app.use('/mail', sendMail)

//api method get
app.get('/',(req,res)=>{
    res.send('On line')
})

//api method post
app.post('/app', (req,res)=>{res.send('Esta es un request post')})

//inicio del server
app.listen(app.get('port'),()=>{
    console.log(`escuchando en puerto ${app.get('port')}`
    )});
