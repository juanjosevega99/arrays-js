const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const newArray = [];
for (let index = 0; index < matrix.length; index++) {
  const array = matrix[index];
  for (let j = 0; j < array.length; j++) {
    const element = matrix[index][j];
    newArray.push(element);
  }
}

console.log('for', newArray);

const res = matrix.flat();
console.log('flat', res);

// Manual Flat
function deep(list) {
  let newList = [];
  if (typeof list != 'object') return [list];
  list.forEach(element => {
    newList = newList.concat(deep(element));
  });
  return newList;
}

const newArrayWithoutFlat = deep(matrix);
console.log(
  '🚀 ~ file: flat.js ~ line 32 ~ newArrayWithoutFlat',
  newArrayWithoutFlat
);
