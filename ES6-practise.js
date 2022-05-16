// Problem 1:

let mouse = "micropack";
const keyBoard = "logitech";
const pcComponent = {
  cpu: "Intel",
  monitor: "Hp",
  mobo: "Asus",
};

// Problem 2:

const pcDescreption = `My pc have so many components. The brand name of the mouse I have is ${mouse}, and the keyboard is ${keyBoard} branded. The internal part is designed with ${pcComponent.cpu}. The motherboard I use is ${pcComponent.mobo}`;

// Problem 3.1:

const oneParam = (input1) => input1 / 5;

// Problem 3.2:

const twoParam = (input1, input2) => (input1 + 2) * (input2 + 2);

// Problem 3.3:

const threeParam = (input1, input2, input3) => input1 * input2 * input3;

// Problem 3.4:

const multiLineArrow = (input1, input2) => {
  const input1Add = input1 + 2;
  const input2Add = input2 + 2;
  const result = input1Add * input2Add;
  return result;
};

// Problem 4: done reading JS function declaration vs arrow function.
// Problem 4.5: done reading difference between var, let, const.

// Problem 5:

const age = [12, 45, 56, 13, 64, 73, 33];
const newAge = age.map((age) => age * 5);

// Problem 6:

const age2 = [13, 14, 22, 33, 36, 60];
const oddAge = age2.filter((age2) => age2 % 2 != 0);

// Problem 7:

const products = [
  { name: "mobile", price: 12000 },
  { name: "tupi", price: 50 },
  { name: "monitor", price: 5000 },
  { name: "mouse", price: 300 },
  { name: "wardrobe", price: 7000 },
];
const findProduct = products.find((product) => product.price == 5000);

// Problem 8:

const obj = {
  name: "mobile",
  color: "black",
  shape: "rectangular",
  weight: 150,
};
const { shape, color } = obj;

// Problem 9

const arr = [30, 29, 18, 44, 52, 88];
const [one, two, three] = [30, 29, 18];

// Problem 10

const funcWithThreeParam = (param1, param2, param3 = 7) =>
  param1 + param2 + param3;
