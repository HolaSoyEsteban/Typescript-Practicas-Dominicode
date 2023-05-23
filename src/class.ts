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

    public zone = 'Caribean';
    protected city = 'Santo Domingo';
    private country = 'Dominican Republic';

    constructor() {

    }

    greet(): void {
        console.log('Hello!!!!');
    }
}

class Employee extends Person {
    // Atributos

    constructor(private readonly id: number, private readonly name: string, private readonly dept: string) {
        super();
        this.showInfo();
    }

    // Métodos
    private showInfo(): void {
        console.log(`${this.name} ${this.zone} ${this.city}`);
    }
}

const emp = new Employee(1, 'Dominicode', 'Sales');
