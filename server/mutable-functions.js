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

const myProducts = [];
console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

// const product = products.find(item => item.id === '🍔');
// if (product) {
//   myProducts.push(product);
// }

// const productIndex = products.findIndex(item => item.id === '🍔');
// if (productIndex !== -1) {
//   myProducts.push(products[productIndex]);
//   products.splice(productIndex, 1);
// }

console.log('products', products);
console.log('myProducts', myProducts);

// CHALLENGE CREATE A NEW ARRAY
const productsFilter = products.filter(item => item.id !== '🍔');
console.log('products', products);
console.log('myProducts', productsFilter);

// UPDATE
const productsV2 = [
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

const update = {
  id: '🥞',
  changes: {
    price: 200,
    description: 'delicious'
  }
};

const productIndexV2 = productsV2.findIndex(item => item.id === update.id);
productsV2[productIndexV2] = {
  ...productsV2[productIndexV2],
  ...update.changes
};
console.log(productsV2, 'update');

// CHALLENGE CREATE A NEW ARRAY
const newArray2 = productsV2.map(item => {
  if (item.id === update.id) {
    return {
      ...item,
      ...update.changes
    };
  } else {
    return {
      ...item
    };
  }
});
