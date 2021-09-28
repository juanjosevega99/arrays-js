const numbers = [1, 30, 39, 29, 10, 13];

const res = numbers.every(item => item <= 40);
console.log(res);

const team = [
  {
    name: 'Nicolas',
    age: 12
  },
  {
    name: 'Andrea',
    age: 8
  },
  {
    name: 'Zulema',
    age: 2
  },
  {
    name: 'Santiago',
    age: 15  }
];

const res2 = team.every(item => item.age <= 15)
console.log(res2)