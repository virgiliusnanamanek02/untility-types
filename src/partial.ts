interface User {
    name: string;
    age: number;
    email: string;
}

const user: Partial<User> = { name: 'John Doe' };  // Partial makes all properties optional

console.log(user); // { name: 'John Doe' }