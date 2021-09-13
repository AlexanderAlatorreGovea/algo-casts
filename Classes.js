const p = {
  name: "mosh",
  //es6 shorter syntax walk(){}
  walk(n) {
    console.log(n);
  },
  treeWalker() {},
};
//bind
const walk = p.walk.bind(p);
console.log(walk);

function r() {
  console.log(this.name);
}
//call
r.call(p);

class Person {
  constructor(name) {
    this.name = name;
  }

  walk() {
    return this.name;
  }
}

const alex = new Person("alex");
console.log(alex.walk());

class Teacher extends Person {
  constructor(name, degree) {
    //super is for parent's constructor to (super references parent class)

    super(name);
    this.degree = degree;
  }

  teach() {
    console.log("teach");
  }
}

const teacher = new Teacher("mosh", "Msc");
console.log(teacher.walk());
console.log(teacher.degree);

/* Arrow function */

const ppppp = {
  talk() {
    setTimeout(function () {
      console.log("this", this);
    }, 200);
  },
};

ppppp.talk();
