type NumberOrStrings = number | string;

type NumbersOnly = Extract<NumberOrString, number>; // Only take number type

const nums: NumberOnly = 12

console.log(nums);
