// Type assertions

let channel : any = 'Dominicode';

// hay dos formas de hacer type assertions

// 1. Con los signos de mayor y menor
let channelStr = <string>channel;

// 2. Con la palabra reservada as
let channelStr2 = channel as string;

// ahora lo mismo pero con un Canvas HTML Element 

// Assertion con los signos de mayor y menor
const myCanvas = <HTMLCanvasElement>document.getElementById('main');

// Assertion con la palabra reservada as
const myCanvas2 = document.getElementById('main') as HTMLCanvasElement;

