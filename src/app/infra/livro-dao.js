class LivroDao {

    constructor(db) {
        this._db = db;
    } //estancia do banco de dados e referencia ao bd

    adiciona() {
        return new Promise((resolve, reject) => {
            this._db.run(`
            INSERT INTO LIVROS (
                titulo,
                preco,
                descricao
            ) values (?, ?, ?)
            `,
                [
                    livro.titulo,
                    livro.preco,
                    livro.descricao
                ],
                function (err) {
                    if (err) {
                        console.log(err);
                        return reject('Não foi possível adicionar o livro!');
                    }
                    resolve();
                }
            )
        });
        //usado metedo run p/instruções que não retornem nenhum dados
    }

    lista() {
        return new Promise((resolve, reject) => {
            this._db.all(
                'SELECT * FROM livros', //sql que deseja executar qnd for chamado a função
                (erro, resultados) => {
                    if (erro) return reject('Não foi possível listar os livros!');

                    return resolve(resultados);
                }
            )
        });
    }
}

module.exports = LivroDao;