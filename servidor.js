require('dotenv').config();

const mysql = require('mysql2')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '',
    database: 'teste'

})

conexao.connect((err) => {
    if (err) {
        console.log('Erro ao conectar', err)
        return
    }
    console.log('Conexão estabelecida')
})

const sql = `
  CREATE TABLE IF NOT EXISTS produtos (
    nome VARCHAR(100) NOT NULL PRIMARY KEY,
    preco DECIMAL (10, 2) UNSIGNED NOT NULL,
    estoque INT UNSIGNED,
    categoria VARCHAR(100) NULL,
    descricao VARCHAR(100) NULL
    
  )
`

conexao.query(sql, (err) => {
    if (err) throw err;
    console.log('Tabela criada com sucesso')
})


module.exports = conexao