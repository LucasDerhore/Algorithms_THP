function compare(nums, target) {
  // Je boucle sur tout mes elements
  for (let i = 0; i < nums.length; i++) {
    // Diff = La différence pour arrivé au target
    let diff = target - nums[i];
    // Condition Si j'ai la diff donc c'est Vrai
    if (nums.includes(diff)) {
      return true;
    }
  }

  // Si j'ai pas la diff, c'est faux
  return false;
}

const nums = [10, 15, 3, 7];
const k = 17;
const l = 19;

console.log(compare(nums, k));
console.log(compare(nums, l));

// A gérer les doublons
