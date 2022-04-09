export default class Negociacao{
    #data; //#impede que o valor seja alterado fora da classe
    #quantidade;
    #valor;

    constructor(data,quantidade,valor){
        this.#data = data;
        this.#quantidade = quantidade;
        this.#valor = valor;
    }

    get data(){ //get permite ler (somente) propriedades privadas
        return this.#data;
    }

    get quantidade(){
        return this.#quantidade;
    }

    get valor(){
        return this.#valor;
    }

    get volume(){
        return this.#quantidade*this.#valor
    }
}