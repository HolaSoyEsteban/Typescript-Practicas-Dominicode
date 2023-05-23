function greet (name: string): void {
    console.log(`Hello, ${name.toUpperCase()} !!`);
}

greet('Dominicode');

function greet2 (name: string = 'User'): void {
    console.log(`Hello, ${name.toUpperCase()} !!`);
}

greet2();

// ----------------------------------------------

function getNumber () : number {
    return Math.floor(Math.random() * 100);
}

console.log(getNumber());

function printPosition(position: {lat: number, long: number}): void {
    console.log(`Latitud y Longitud: LAT: ${position.lat} LON: ${position.long}`);
}

printPosition({lat: 12.123, long: -12.123});

function printPosition2(position: {lat: number, long?: number}): void {
    console.log(`Latitud y Longitud: LAT: ${position.lat} LON: ${position.long}`);
}

printPosition2({lat: 12.123});

function printPosition3(position: {lat: number, long: number | string}): void {
    console.log(`Latitud y Longitud: LAT: ${position.lat} LON: ${position.long}`);
}

printPosition3({lat: 12.123, long: '5555'});

