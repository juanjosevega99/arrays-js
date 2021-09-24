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

const response = orders.filter(item => item.delivered && item.total >= 1000);
console.log(response);

const search = query => {
  return orders.filter(item => {
    return item.customerName.includes(query);
  });
};

console.log(search('Santiago'));
