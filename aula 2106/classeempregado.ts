class Empregado{
    nome:string
    valorHora:number
    totalHorasSemanais:number
    constructor(nome:string,valorHora:number, totalHorasSemanais:number){
        this.nome = nome
        this.valorHora = valorHora
        this.totalHorasSemanais  = totalHorasSemanais
    }
    calculaSalario():number{
        return parseFloat((this.valorHora * this.totalHorasSemanais).toFixed(2))
    }

    imprimeDados():void{
        console.log(`nome:${this.nome}`)
        console.log(`Valor r$:${this.valorHora}`)
        console.log(`horas semanais:${this.totalHorasSemanais}`)
        console.log(`Salário R$:${this.calculaSalario()}`)
        
    }
}
export default  Empregado