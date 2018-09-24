const jwt = require('jsonwebtoken');
// ==============================
// Verificar Token
// ==============================

let verificaToken = (req, res, next) => {
    let token = req.get('token');//Nombre del header que se busca puede ser Autorization etc..

    // res.json({
    //     token: token
    // });

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario; //payload contenia el usuario encriptado
        next(); //Sigue con la ejecucion del codigo cuando se usa verifica token dentro de las llamadas de WS
    });


};

// ==============================
// Verificar AdminRole
// ==============================

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El usuario no es administrador'
            }
        });
    }

};

// ==============================
// Verificar Token para imagen
// ==============================

let verificaTokenImg = (req, res, next) => {

    let token = req.query.token;//Se manda en la url al solicitar ws

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario; //payload contenia el usuario encriptado
        next(); //Sigue con la ejecucion del codigo cuando se usa verifica token dentro de las llamadas de WS
    });



};

module.exports = {
    verificaToken,
    verificaAdmin_Role,
    verificaTokenImg
}