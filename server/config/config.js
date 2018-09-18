// process objeto global que siempre corre en node y es modificado dependiendo el env. donde corre

// ===========================
// PUERTO
// ===========================
//EN HEROKU SE ACTUALIZA AUTOMATICAMENTE
process.env.PORT = process.env.PORT || 3000;
