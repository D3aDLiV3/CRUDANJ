require('./config/conexion');

const express= require('express')
const port = (process.env.porrt||3000)

const app = express()

app.use(express.json())

app.set('port',port)

app.use('/api', require('./rutas'));


app.listen(app.get('port'),(error)=>{
    if(error)
    {console.log('error al iniciar el servidor: '+error)}
    else{
        console.log('servidor iniciado en el prueto: '+port)
    }
})

