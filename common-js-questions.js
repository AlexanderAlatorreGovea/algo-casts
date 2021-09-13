let array = ["a", "b", "c"];

array = ["start", ...array, "end"];

array.unshift('hello')
array.push('the end')

console.log(array);

//Private variable in JS

function privateVar() {
  let private = "some string";
  return function () {
    return private;
  };
}
// let secVar = privateVar() this works
// console.log(secVar())

//this does not work
console.log(privateVar());

var hero = {
  name: "john doe",
  getSecretId: function () {
    console.log(this.name);
  },
};

//needs to rebidn because it lost the reference
var stoleSecretId = hero.getSecretId.bind(hero);
stoleSecretId();

//this will never lose it's reference
hero.getSecretId();
//
