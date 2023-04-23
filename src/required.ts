interface User {
    name: string;
    age: number;
    email: string;
}

const users: Required<User> = { name: 'John Doe', age: 25, email: 'johndoe@pr.com' }; // Required makes all properties required

console.log(users); // { name: 'John Doe', age: 25, email: '