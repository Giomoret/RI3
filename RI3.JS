class Cliente {
    #cpf
    constructor (nome, cpf, endereco){
        this.nome = nome
        this.endereco = endereco
        this.telefones = new Set()
        this.#cpf = cpf
    }
    #colocarMaiusculo(texto){
        return texto.toUpperCase()
    }
    #colocarMinusculo(texto){
        return texto.toLowerCase()
    }
    detalhe(){
        let saida = "Nome: " + this.#colocarMaiusculo(this.nome) + "\n"
        saida += "Estado: " + this.endereco.estado
               + " cidade: " + this.endereco.cidade
               + " rua: " + this.endereco.rua
               + " numero: " + this.endereco.numero + "\n"
        for (let tel of this.telefones){
            saida += "ddd: " + tel.ddd + " numero: " + tel.numero + "\n"
        }
        return saida
    }
    get pegarCPF(){
        return this.#cpf
    }
}
class Telefone {
    constructor (ddd, numero){
        this.ddd = ddd
        this.numero = numero
    }
     #colocarMaiusculo(texto){
        return texto.toUpperCase()
    }
    #colocarMinusculo(texto){
        return texto.toLowerCase()
    }
}

class Endereco{
    constructor (estado, cidade, rua, numero){
        this.estado = estado
        this.cidade = cidade
        this.rua = rua
        this.numero = numero
    }
    #colocarMaiusculo(texto){
        return texto.toUpperCase()
    }
    #colocarMinusculo(texto){
        return texto.toLowerCase()
    }
    
}
class Empresa {
    #cnpj
    constructor(razaoSocial, nomeFantasia, cnpj, endereco){
        this.endereco = endereco
        this.nomeFantasia = nomeFantasia
        this.razaoSocial = razaoSocial
        this.#cnpj = cnpj
        this.clientes = new Set()
        this.telefones = new Set()
    }
    #colocarMaiusculo(texto){
        return texto.toUpperCase()
    }
    #colocarMinusculo(texto){
        return texto.toLowerCase()
    }
    detalhe(){
        let saida = "Razão Social: " + this.razaoSocial + "\n"
        saida += "Nome fantasia: " + this.nomeFantasia + "\n"
        saida += "----------------\n"
        for (let c of this.clientes) {
            saida += c.detalhe() + "\n"
        }
        return saida
    }    

    get pegarCNPJ(){
        return this.#cnpj
    }
}


let endEmpresa = new Endereco("SP", "São José dos Campos", "Av Andrômeda", 1000)
let empresa = new Empresa("ABC LTDA", "Mercado Livre", "12345678000199", endEmpresa)

let c1 = new Cliente("João Paulo", "2222222222222", new Endereco("SP","São José dos Campos","Av Andrômeda",987))
c1.telefones.add(new Telefone("12345678","12345678"))
c1.telefones.add(new Telefone("12345678","12345678"))

let c2 = new Cliente("Gabriel L.", "11111111111", new Endereco("SP","São José dos Campos","Av Andrômeda",412))
c2.telefones.add(new Telefone("87654321","87654321"))
c2.telefones.add(new Telefone("87654321","87654321"))

let c3 = new Cliente("Emmanuel G.", "33333333333", new Endereco("SP","São José dos Campos","Av São João",789))
c3.telefones.add(new Telefone("12312312","12312312"))
c3.telefones.add(new Telefone("12312312","12312312"))

let c4 = new Cliente("Gustavo B.", "44444444444", new Endereco("SP","São José dos Campos","Av Andrômeda",452))
c4.telefones.add(new Telefone("32132132","32132132"))
c4.telefones.add(new Telefone("32132132","32132132"))

let c5 = new Cliente("Rafael M.", "55555555555", new Endereco("SP","São José dos Campos","Rua das Flores",123))
c5.telefones.add(new Telefone("23123123","23123123"))
c5.telefones.add(new Telefone("23123123","23123123"))

empresa.clientes.add(c1)
empresa.clientes.add(c2)
empresa.clientes.add(c3)
empresa.clientes.add(c4)
empresa.clientes.add(c5)

console.log(empresa.detalhe())