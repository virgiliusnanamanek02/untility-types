interface User {
  name : string
  age : number
  email : string
}


const pickUser :Pick<User, 'name'| 'age'> = {name: 'Nana', age:22}

console.log(pickUser);
