// process objeto global que siempre corre en node y es modificado dependiendo el env. donde corre

// ===========================
// PUERTO
// ===========================
//EN HEROKU SE ACTUALIZA AUTOMATICAMENTE
process.env.PORT = process.env.PORT || 3000;


// ===========================
// ENTORNO
// ===========================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'; //heroku pone la variable NODE_ENV pero en otros servicios hacen algo igual 


// ===========================
// VENCIMIENTO DEL TOKEN
// ===========================
process.env.CADUCIDAD_TOKEN = '48h';

// ===========================
// SEED DE AUTENTICACIÓN
// ===========================


//SE DECLARA VARIABLE DE ENTORNO EN HEROKU CON COMANDO heroku config:set SEED="";
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ===========================
// BASE DE DATOS
// ===========================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

// ===========================
// GOOGLE CLIENT ID
// ===========================
process.env.CLIENT_ID = process.env.CLIENT_ID || '897829567863-lto8v58aic1rfk3mts2n4bggqm24qrb7.apps.googleusercontent.com';