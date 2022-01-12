const list = [10, 15, 3, 7];
const list2 = [1, 8, 10, 21];
const k = 17;
const l = 19;

const exo5 = (list, k) => list.filter((e) => list.includes(k - e)).length > 1;

console.log(exo5(list, k));
console.log(exo5(list2, k));

// A refaire içi OKLM
