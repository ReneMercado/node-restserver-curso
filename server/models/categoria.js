var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var categoriaSchema = new Schema({
    descripcion: { type: String, required: false },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }
});


module.exports = mongoose.model('Categoria', categoriaSchema);