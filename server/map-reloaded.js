const orders = [
  {
    customerName: 'Nicolas',
    total: 60,
    delivered: true
  },
  {
    customerName: 'Zulema',
    total: 120,
    delivered: false
  },
  {
    customerName: 'Santiago',
    total: 180,
    delivered: true
  },
  {
    customerName: 'Valentina',
    total: 1000,
    delivered: true
  }
];

const response = orders.map(item => {
  return {
    ...item,
    tax: 0.19
  };
});

console.log('response', response);
console.log('original', orders);

const iva = orders.map(item => {
    return {
        ...item,
        iva: item.total + (item.total * 0.19)
    }
})

console.log('response', iva);   