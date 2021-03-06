var mongoose = require('mongoose');

//Função chamada quando se da require nesse arquivo
module.exports = function(ass){

	db = mongoose.createConnection( 'mongodb://localhost/' + ass);

	var Schema = mongoose.Schema;


	//Definindo a estrutura da minha colection usuarios no db
	var cliente = Schema({
		cpf: String,
		nome: String,
		telPrimario: String,
		telSecundario: String,
		email: String,
		endereco: String,
		observacoes: String		
	},{ collection: 'cliente' });
	return db.model('cliente', cliente);
}