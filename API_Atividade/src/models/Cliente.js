class Cliente {
    constructor(pId, pNome, pDataNasc, pCpf, pSexo, pEstadoCivil, pEmail, pTelefone, pDatCad) {
        this.id = pId;
        this.nome = pNome;
        this.data_nasc = this.DataConvert(pDataNasc);
        this.cpf = pCpf;
        this.sexo = pSexo;
        this.estadoCivil = pEstadoCivil;
        this.email = pEmail;
        this.telefone = pTelefone;
        this.dataCadastro = pDatCad;
    }

    DataConvert(value) {
        if (value) {
            let [dia, mes, ano] = value.split('/');
            let dataFormatada = `${ano}-${mes}-${dia}`;
            return dataFormatada;
        }
        return null;
    }

    get Nome() { return this.nome; }
    set Nome(value) { this.nome = value }

    get Data_nasc() { return this.data_nasc; }
    set Data_nasc(value) { this.data_nasc = value }

    get Cpf() { return this.cpf; }
    set Cpf(value) { this.cpf = value }

    get Sexo() { return this.sexo; }
    set Sexo(value) { this.sexo = value }

    get EstadoCivil() { return this.estadoCivil; }
    set EstadoCivil(value) { this.estadoCivil = value }

    get Telefone() { return this.telefone; }
    set Telefone(value) { this.telefone = value }
}
module.exports = Cliente;
