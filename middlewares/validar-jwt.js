const jwt = require('jsonwebtoken');


const validarJTW = (req, res=response, next) =>{

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok:false,
            msg: 'token no valido'
        })
    }

    try {
        
        const {uid, name} = jwt.verify(token, process.env.SECRET_JWT_SEED);
        console.log(uid, name)
        req.name = name;
        req.uid = uid;
    } catch (error) {
        console.log(error)
        return res.status(401).json({
            ok:false,
            msg: 'error en el token'
        })
    }

    next();
}



module.exports = {
    validarJTW
}