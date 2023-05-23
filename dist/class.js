"use strict";
// // Class
// class Employee {
//     // Atributos
//     private id: number;
//     private name: string;
//     private dept: string;
//     // Constructor
//     constructor(id: number, name: string, dept: string) {
//         this.id = id;
//         this.name = name;
//         this.dept = dept;
//         this.showInfo();
//     }
//     // Métodos
//     showInfo(): void {
//         console.log(`${this.name}  ${this.dept}`)
//     }
// }
// const emp = new Employee(1, 'John', 'IT');
// ----------------------------------------------
// Class
class Person {
    constructor() {
        this.zone = 'Caribean';
        this.city = 'Santo Domingo';
        this.country = 'Dominican Republic';
    }
    greet() {
        console.log('Hello!!!!');
    }
}
class Employee extends Person {
    // Atributos
    constructor(id, name, dept) {
        super();
        this.id = id;
        this.name = name;
        this.dept = dept;
        this.showInfo();
    }
    // Métodos
    showInfo() {
        console.log(`${this.name} ${this.zone} ${this.city}`);
    }
}
const emp = new Employee(1, 'Dominicode', 'Sales');
