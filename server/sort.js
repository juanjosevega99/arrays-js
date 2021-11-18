const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);

const numbers = [1, 30, 4, 21, 100000];
numbers.sort((a, b) => b - a);
console.log(numbers);

const words = [
  'réservé',
  'premier',
  'communiqué',
  'café',
  'adieu',
  'éclair',
  'banana'
];
words.sort();
console.log('🚀 ~ file: sort.js ~ line 22 ~ words', words);

const orders = [
  {
    customerName: 'Nicolas',
    total: 600,
    delivered: true
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false
  },
  {
    customerName: 'Santiago',
    total: 1840,
    delivered: true
  },
  {
    customerName: 'Valentina',
    total: 240,
    delivered: true
  }
];
orders.sort((a, b) => b.total - a.total);
console.log('🚀 ~ file: sort.js ~ line 37 ~ orders', orders);
