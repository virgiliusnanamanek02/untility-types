interface User {
  name : string
  age : number
  email : string
}


const readOnlyUser: Readonly<User> = {name: "Nana", age:22, email: "nana@gmail.com"}

console.log(readOnlyUser);

//@ts-expect-error
readOnlyUser.name = "Manek"; // Cannot assign to 'name' because it is a read-only property.

console.log(readOnlyUser);
