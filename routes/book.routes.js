const {Router} = require('express');
const { createBook, updateBook, deleteBook, viewBooks, viewBook, buscarpornombre } = require('../controllers/book.controller');


const router = Router();


//TODO Crear/subir libro 
router.post('/create', createBook)

//TODO Actualizar libro
router.put('/update/:id', updateBook)

//TODO Eliminar libro
router.delete('/delete/:id', deleteBook)

//TODO Mostrar libros existentes
router.get('/', viewBooks)

//TODO Mostrar libro en especifico
router.get('/:id', viewBook)

//TODO Buscar por nombre
router.get('/name/:name', buscarpornombre)
module.exports = router;