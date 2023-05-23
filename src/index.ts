// Tipos básicos

let myTypeString: string = 'Dominicode';
let myTypeNumber: number = 30;
let myTypeBoolean: boolean = true;

// Arrays

let arrNumber : number[] = [1,2,3,4,5];
let arrString : string[] = ["Uno","Dos","Tres"];
let arrBoolean : boolean[] = [true,false,true];

let arrAny : any[] = [1,"Dos",true];

// Tupla

let tuplePlayers: [string, number, boolean] = ['Dominicode', 30, true];

// Tupla Array

let tupleArrayPlayers: [string, number, boolean][];

tupleArrayPlayers = [
    ['Nombre1', 29, true],
    ['Nombre2', 30, true],
    ['Nombre3', 31, false],
];

// Inferecia de tipos
let myVariable;

let myVariable1: string;

let myVariable2 = 'Hola mundo';

// Composicion de tipos

 // Unions
 let myVariable3: string | number | null;
 myVariable3 = 'Hola mundo';

