let student={
name:"Saurabh",
age:"20",
sec:'A',
};
// console.log(student.name);
// console.log(student.age);
// student.phone=7498059665;
// console.log(student);

// delete student.sec;
// console.log(student)

for(key in student){
    console.log(key,student[key]);
}

let person={
    name:"Shubham",
    age:20,
    address:{
        city:"Indore",
        place:"Newyork city",
    }
}
console.log(person);


//object \

let obj1={
    a:1,
}
let obj2={
    b:2,
}
let merged={...obj1,...obj2};
console.log(merged);

//object keys

console.log(Object.keys(person));

//object entries

console.log(Object.entries(student));

//object assing
console.log(Object.assign(student));

//hasown property 
console.log(person.hasOwnProperty("name"));

//object.freeze after freez we cantnt change anything in object

Object.freeze(person);
person.age=30;
console.log(person);

//object seal
Object.seal(student);
console.log(student);

//deep and shallow copy