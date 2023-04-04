//decorators

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, {__version: version});
    }
}

@apiVersion("1.10")
class Api{ }

const api = new Api();

console.log(api.__version)











// function ExibirNome(target: any) {
//     console.log(target);
// }

// @ExibirNome
// class funcionario{

// }





























//generics

// function concatArray(...itens: any[]): any[] {
//     return new Array().concat(...itens);
// }

// const numArray = concatArray([54,12,"yuri"],[122]);
// console.log(numArray);


















// class character {
//     protected name?: string;
//     stregth: number;
//     skill: number;

//     /**
//      *data modifiers 
//     public
//     private
//     protected
//      */
    



//     constructor(name:string, stregth:number,skill:number) {
        
//         this.name = name;  
//        this.stregth = stregth;
//        this.skill =skill;
//     }
//     attack(): void{
//         console.log(`Attack ${this.stregth}`);
//     }
//     alterarnome( nome:string): void {
//     this.name = nome;
//     }
//     apresentar(): void{
//         console.log(this.name);
//     }

// }

// class Magician extends character{
//     magicPoint?:number;
//     constructor(
//         name: string,
//         stregth: number,
//         skill: number,
//         magicPoint: number
//     ) {
//         super(name, stregth, skill);
//         this.magicPoint = magicPoint;

        
//     }
// }

// const p1 = new character("yurizao", 12, 98);
// p1.alterarnome("yurizaasao")
// p1.attack();
// console.log(p1.apresentar());

// const p2 = new Magician("Zulu",7,50,1000)
// p2.apresentar();







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