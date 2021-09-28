const items = [1, 2, 3, 3, 2, 3, 10];

const response = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }
  return obj;
}, {});

console.log(response);

const list = [];

for (let index = 0; index < 30; index++) {
  list.push(Math.floor(Math.random() * 11));
}

console.log(list)

const result = list.reduce(
  (obj, value) => {
    if (value < 5) obj['1-4'] += 1;
    else if (value < 9) obj['5-8'] += 1;
    else obj['9-10'] += 1;

    return obj;
  },
  {
    '1-4': 0,
    '5-8': 0,
    '9-10': 0
  }
);

console.log(result)