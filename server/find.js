const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕'
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔'
  },
  {
    name: 'Hot dog',
    price: 34,
    id: '🌭'
  },
  {
    name: 'Hot cakes',
    price: 355,
    id: '🥞'
  }
];

const res = products.find(item => item.id === '🍔')
console.log(res)
const res2 = products.findIndex(item => item.id === '🍔')
console.log(res2)