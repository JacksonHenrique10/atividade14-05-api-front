const conectarBancoDeDados = require('../config/db');

async function insert(cliente) {
    const connection = await conectarBancoDeDados();
    try {
        /**
         * beginTransaction() inicia a transação.
         * commit() confirma a transação, aplicando todas as alterações feitas durante a transação.
         * rollback() reverte a transação, descartando todas as alterações feitas durante a transação.
         */
        await connection.beginTransaction();

        // Insere o cliente, a variável 'res' nos informa qual é o id do cliente para realizar os 'inserts' de endereços e telefones que contém chave estrangeira (FK)
        const res = await connection.query(
            'INSERT INTO cliente (nome, cpf, data_nasc, sexo, estado_civil, email, telefone) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [cliente.nome, cliente.cpf, cliente.data_nasc, cliente.sexo, cliente.estadoCivil, cliente.email, cliente.telefone]
        );
        console.log('RESULTADO INSERT CLIENTE =>', res);
        await connection.commit();
        console.log('Transação concluída com sucesso.');
    } catch (error) {
        await connection.rollback();
        console.log(error);
        return error;
    } 
}
module.exports = { insert };