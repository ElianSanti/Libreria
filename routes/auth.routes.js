const {Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, validarToken } = require('../controllers/auth.controller');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJTW } = require('../middlewares/validar-jwt');


const router = Router();

//!Crear nuevo usuario
router.post( '/new', [
    check('name', 'Debe contener un nombre').notEmpty(),
    check('email','El Email es obligatorio').isEmail(),
    check('password','La contraseña debe de tener minimo 6 digitos').isLength({min:6}),
    validarCampos
],crearUsuario); 

//!Login de usuario 
router.post( '/', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña debe tener minimo 6 caracteres').isLength({min:6}),
    validarCampos
], loginUsuario);

//!Validar y revalidar Token
router.get( '/renew', validarJTW, validarToken);



module.exports = router;