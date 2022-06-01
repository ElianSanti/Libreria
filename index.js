const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
//const path = require('path')
require('dotenv').config();



//Crear el servidor/aplicación de express
const app = express();

//Conexión con la base de datos
dbConnection();

//CORS
app.use(cors());

//Directorio publico
app.use( express.static('public'));

//Lectura y parseo(conversión) del body
app.use( express.json());

//Rutas
app.use( '/api/auth', require('./routes/auth.routes'));
app.use('/api/book', require('./routes/book.routes'));

//Mostrar demas rutas
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html') );
})


//Asignar puerto
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});