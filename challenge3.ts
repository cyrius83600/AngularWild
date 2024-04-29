class Person{
	name:String;
	age:Number;
	constructor(name:String, age:Number)
	{
		this.name = name;
		this.age = age;
	}
	
	tellMyName():void{
		console.log("I am " + this.name);
	}
	
	tellMyAge():void{
		console.log("I am " + this.age + " years old");
	}
}
let john = new Person("John", 40);
let mary = new Person("Mary", 35);

john.tellMyAge();
john.tellMyName();
mary.tellMyAge();
mary.tellMyName();
