const express = require("express");
const app     = express();
app.set("view engine", "hbs");

class Person {
   constructor(firstName, lastName, post, salary, age, experience) {
      this.firstName  = firstName;
      this.lastName   = lastName;
      this.post       = post;
      this.salary     = salary;
      this.age        = age;
      this.experience = experience;
   }
}

app.get("/", (req, res) => {

	let newPerson = new Person('Ivan', 'Petrov', 'waiter', '100500', '53', '7');
    res.render("hello.hbs",{
		"person" : newPerson,
    });
});
app.listen(3000);
