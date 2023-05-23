"use strict";
function greet(name) {
    console.log(`Hello, ${name.toUpperCase()} !!`);
}
greet('Dominicode');
function greet2(name = 'User') {
    console.log(`Hello, ${name.toUpperCase()} !!`);
}
greet2();
// ----------------------------------------------
function getNumber() {
    return Math.floor(Math.random() * 100);
}
console.log(getNumber());
function printPosition(position) {
    console.log(`Latitud y Longitud: LAT: ${position.lat} LON: ${position.long}`);
}
printPosition({ lat: 12.123, long: -12.123 });
function printPosition2(position) {
    console.log(`Latitud y Longitud: LAT: ${position.lat} LON: ${position.long}`);
}
printPosition2({ lat: 12.123 });
function printPosition3(position) {
    console.log(`Latitud y Longitud: LAT: ${position.lat} LON: ${position.long}`);
}
printPosition3({ lat: 12.123, long: '5555' });
