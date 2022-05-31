const mongoose = require('mongoose');


const dbConnection = async() =>{
    try {
        await mongoose.connect( process.env.BD_CNN);

        console.log('Db Online')
    } catch (error) {
        console.log(error)
        throw new Error('La base de datos no pudo inicializarse');
    }

}


module.exports = {
    dbConnection
}