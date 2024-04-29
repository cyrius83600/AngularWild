const prettyPrintWilder = (users) => {
  users.map((user) => {
    console.log(`${user.name} is ${user.age} years old`);
  });
};

interface user{
	name:String;
	age:Number;
}
const wilders:user[] = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", age: 34 };
const user3 = { name: "Jacques", age: 25 };

wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
