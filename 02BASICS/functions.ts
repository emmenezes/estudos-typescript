function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function getValue(val: number) {
  if (val > 0) {
    return true;
  }
  return "Try again";
}

function signUpUser(name: string, email: string, isActive: boolean) {}

let loginUser = (name: string, email: string, isActive: boolean = false) => {};

addTwo(2);
getUpper("sour");
signUpUser("Camila", "cam@mail.com", false);
loginUser("Paulo", "paulo@gmail.com");

const getHi = (): string => {
  return "Hiii";
};

// const heros = ['wonderwoman', 'doctor strange', 'gamora']
const heros = [1, 2, 3];

heros.map((hero) => {
  return `Hero is ${hero}.`;
});

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}
