// Q1 ------------------------------------------------------------------------------------------------------
// function Car(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;

//     this.getCarInfo = ()=>{
//         console.log(`Make: ${make}`);
//         console.log(`Model: ${model}`);
//         console.log(`Year: ${year}`);
//     }
// }
// let c = new Car('Audi', 'A6', 2013);
// c.getCarInfo();


// Q2------------------------------------------------------------------------------------------------------
// function Animal(name, sound){
//     this.name = name;
//     this.sound = sound;
    
// }

// Animal.prototype.makeSound = ()=>{
//     console.log(`${this.name} has a sound of ${this.sound}`);
// }
// function Dog(name, sound) { }

// Dog.prototype = new Animal().prototype;
// Dog.prototype.constructor = Dog;

// Dog.prototype.fetch = ()=>{
//     console.log(`${name} is fetched`)
// }

// let d1 = new Dog('Buddy', 'Bark')
// d1.makeSound();
// d1.fetch();


//Q3
// function BankAccount(balance){
//     var balance = balance;

//     this.getBalance = ()=>{
//         console.log(balance);
//     }
//     this.deposit = (amt)=>{
//         balance += amt;
//         console.log(`${amt} deposited. New balance: ${balance}`);
//     }
//     this.withdraw = (amt)=>{
//         if(amt > balance){
//             console.log('Insufficient funds');
//             return;
//         }
//         balance -= amt;
//         console.log(`${amt} withdrawn. New balance: ${balance}`);
//     }
// }
// let b = new BankAccount(1000);
// b.getBalance();
// b.deposit(1000);
// b.withdraw(500);
// b.withdraw(2000);


//Q4
// function Shape(){
//     this.getArea = ()=>{
//         return 0;
//     }
// }
// function Circle(radius){
//     this.getArea = ()=>{
//         return 3.14 * radius * radius;
//     }
// }
// function Rectangle(length, breadth){
//     this.getArea = ()=>{
//         return length * breadth;
//     }
// }
// Circle.prototype = new Shape();
// Circle.prototype.constructor = Circle;
// Rectangle.prototype = new Shape();
// Rectangle.prototype.constructor = Rectangle;

// let c1 = new Circle(5);
// console.log(c1.getArea());
// let r1 = new Rectangle(5, 5);
// console.log(r1.getArea());



//Q5
// function Vehicle(make, model, year){
//     this.make = make;
//     this.model = model;
//     this.year = year;

    
// }

// Vehicle.prototype.getDetails = ()=>{
//     console.log(`${make}, ${model}, ${year}`)
// }

// function Car(doors){
//     this.doors = doors;
// }

// Car.prototype = new Vehicle('BMW', 'B1', 2018);
// Car.prototype.constructor = Car;

// let car1 = new Car(4);
// console.log(car1.doors);
// car1.getDetails();


//Q6
function MathUtil(){ }
MathUtil.add = (num1, num2)=>{
    return num1 + num2;
}

MathUtil.sub = (num1, num2)=>{
    return num1 - num2;
}

MathUtil.mul = (num1, num2)=>{
    return num1 * num2;
}

MathUtil.div = (num1, num2)=>{
    return num1 / num2;
}
console.log(MathUtil.add(1,5))
console.log(MathUtil.sub(1,5))
console.log(MathUtil.mul(1,5))
console.log(MathUtil.div(1,5))



//Q7
function Book(title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary = ()=>{
        console.log(`${title} is written by ${author} in the year ${year}.`);
    }

    this.setYear = (newYear)=>{
        this.year = newYear;
        console.log(`${year} has been updated to: ${newYear}`)
    }
    
}
let book1 = new Book('Hey there', 'Anonymous', 2013);
book1.getSummary();
book1.setYear(2024);



//Q8
function User(username, password, address){
    this.username = username;
    this.password = password;
    this.address = address;

    this.getAddress = ()=>{
        console.log(`${username} lives in ${address.street} in ${address.city} in ${address.country}`);
    }
}

function Address(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
}
let address1 = new Address('Society', 'Pune', 'India');

let user1 = new User('Ronit', '123456', address1);
user1.getAddress();



//Q9
function Shape(){
    this.getArea = ()=>{
        return 0;
    }
}
function Square(sideLength){
    this.getArea = ()=>{
        return sideLength * sideLength;
    }
}
function Triangle(base, height){
    this.getArea = ()=>{
        return 0.5 * base * height;
    }
}
Square.prototype = new Shape();
Square.prototype.constructor = Square;
Triangle.prototype = new Shape();
Triangle.prototype.constructor = Triangle;

let s1 = new Square(5);
console.log(`Area of a sqaure having side 5 is: ${s1.getArea()}`);
let t1 = new Triangle(5, 5);
console.log(`Area of a triangle having base and height as 5 and 5 is: ${t1.getArea()}`);
