"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empregado {
    constructor(nome, valorHora, totalHorasSemanais) {
        this.nome = nome;
        this.valorHora = valorHora;
        this.totalHorasSemanais = totalHorasSemanais;
    }
    calculaSalario() {
        return parseFloat((this.valorHora * this.totalHorasSemanais).toFixed(2));
    }
    imprimeDados() {
        console.log(`nome:${this.nome}`);
        console.log(`Valor r$:${this.valorHora}`);
        console.log(`horas semanais:${this.totalHorasSemanais}`);
        console.log(`Salário R$:${this.calculaSalario()}`);
    }
}
exports.default = Empregado;
