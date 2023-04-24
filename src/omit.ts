interface User {
  name: string
  age : number
  email : string
}

const omitUser: Omit<User, 'age'> = {name: "Vicky", email: "nana@gmail"}

console.log(omitUser);
