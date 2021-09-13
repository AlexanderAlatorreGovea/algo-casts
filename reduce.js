//always return your accumulator

const items = [
  { name: "rice", price: 5 },
  { name: "beans", price: 15 },
  { name: "Jello", price: 35 },
  { name: "bread", price: 0.5 },
];

// // let tPrice = 0;
// // items.forEach(item => {
// //    return tPrice += item.price
// // })

const totalPrice = items.reduce((total, item) => {
  return total + item.price;
}, 0);

console.log(totalPrice);

const people = [
  { name: "alex", price: 53 },
  { name: "josh", price: 15 },
  { name: "jill", price: 35 },
  { name: "kyle", price: 22 },
  { name: "jKyle", price: 22 },
];

const filtered = people.filter(item => item.price !== 22)
console.log(filtered)

const result = people.reduce((groupedPeple, person) => {
  const age = person.age;
  if (groupedPeple[age] == null) groupedPeple[age] = [];
  groupedPeple[age].push(person);
  return groupedPeple;
}, {});
console.log(result);

const prices = [1, 3, 4, 5, 5, 33];

const reduceArrayEx = prices.reduce((acc, value) => {
  const newVal = value + 1;
  if (newVal <= 20) {
    acc.push(newVal);
  }
  return acc;
}, []);
console.log(reduceArrayEx);
