class character {
    name: string ="";
    stregth: number;
    skill: number;

    /**
     *
     */
    constructor(name:string, stregth:number,skill:number) {
        
        this.name = name;  
       this.stregth = stregth;
       this.skill =skill;
    }
    attack(): void{
        console.log(`Attack ${this.stregth}`);
    }

}

const p1 = new character("yurizao", 12, 98);

p1.attack();









// let ligado: boolean = false; // dessa forma a var estará travada nesse tipo de variavel
// let nome: string = "Yuri";
// let idade: number = 0;


// let produto: object = {
//     names: "Felipe",
//     cidade: "sp",
//     idade: 30,
// }
// type ProdutoLoja = {
//     nome: string,
//     preco: number,
//     quantidade: number,
// }

// let meuProduto: ProdutoLoja = {
//     nome: "Yuri Ramos",
//     preco: 30,
//     quantidade: 30,
// }

// let dados: string[] = ["yuri", "nome", "preco"];

// let dado2: Array<string> = [];

// let info: (string | number)[] = ["info", 25, "nome", "preco", "quantidade"]

// //tuplas
// let boleto:[string, number, number]=["boleto",199.90,564646464654646464564654646]
// //metodos de arrays

// /**
//  * mDatas
//  */
// let aniversario: Date = new Date("2022-12");

// // functions

// function addNumber(n: number, y: number): number{
//     return n+y
// }
// console.log(addNumber(5, 6))

// function CallToPhone(n: number | string ) : number| string {
//     return n;
// }

// console.log(CallToPhone("1321333"))

// // funcçoes async

// async function getDatabase(id: number):Promise<string> {
//     return "felipe"
// }

// //types x interface

// type robot = {
//     id: number;
//     name: string;
// };

// const bot: robot = {
//     id: 1,
//     name: "bot",
// }









// type heroi={
//     name: string;
//     vulgo: string;
// }

// function printaObjeto(pessoa: heroi) {
//     console.log(pessoa);
// }
// printaObjeto({
//     name: "Yurizao",
//     vulgo: "o gostosao",
// })

// console.log("hellow dark my oud friend");