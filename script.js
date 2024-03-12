"use strict";

class Animal {
	constructor(name, birthYear) {
		this.name = name;
		this.birthYear = birthYear;
	}

	// speak() {
	// 	console.log(this.name + " makes a noise.");
	// }

	showAge() {
		const age = (new Date().getFullYear() - this.birthYear) * 4;
		console.log(this.name + " is " + age + " years old.");
	}
}

// const dog = new Animal("Dog", 2018);
// const cat = new Animal("Cat", 2015);

// dog.speak(); // Dog makes a noise.
// cat.speak(); // Cat makes a noise.

// dog.showAge(); // Dog is 8062 years old.

class Dog extends Animal {
	constructor(name, birthYear) {
		//to pass properties to the parent class, use super
		super(name, birthYear);
	}

	speak() {
		console.log(this.name + " barks.");
	}
}

const grewa = new Dog("Grewa", 2015);
grewa.showAge();
grewa.speak();
