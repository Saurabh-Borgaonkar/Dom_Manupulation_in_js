let arr=[1,2,3,4,5,6];
let element;
//for loop

for (let index = 0; index < arr.length; index++) {
   console.log(arr[index]);
}

console.log("--------------")

//while loop

let i=0;
while (i<arr.length) {
    console.log(arr[i]);
    i++;
}

console.log("--------------");


//do while loop
i=0;
do {
    console.log(arr[i]);
    i++;
} while (i<arr.length);

//forin loop used for object

let obj={
    name:"Saurabh",
    rollno:20,
    branch:"Computer Sc",
}
for (const key in obj) {
    let element=obj[key];
        console.log(key,"  : ",element);        
}

//for of loop works for arr print element
let hi="saurabh";
for (const element of hi) {

    console.log(element);
}

let b=[1,2,4,6,7,7];
Array.from(b).forEach(e => {
    console.log(e);
});


let s=6;
let a=Array.from(Array(s).keys());
console.log(a.slice(1));
