type NumberOrString = number | string;

type NumberOnly = Exclude<NumberOrString, string>;
type StringOnly = Exclude<NumberOrString, number>;

const num: NumberOnly = 123;
const str: StringOnly = "Makan Nasi";

console.log(num, str);
