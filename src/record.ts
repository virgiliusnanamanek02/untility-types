interface CatInfo {
  age : number
  breed : string
}


type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy : { age: 12, breed: 'Persian'},
  boris : {age: 4, breed: 'Maine Coon'},
  mordred: {age: 3, breed: 'British Shorthair'}
}

console.log(cats);
console.log(cats.miffy);
console.log(cats.boris);
console.log(cats.mordred);

console.log(typeof cats);
