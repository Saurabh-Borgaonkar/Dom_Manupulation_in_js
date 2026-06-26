let arr=[1,2,3,4];

console.log(arr);

// insert element in arr at last 
arr.push(5);
console.log(arr);

// remove last element
arr.pop();
console.log(arr);

//insert at first
arr.unshift(1);
console.log(arr);

//remove first
arr.shift();
console.log(arr);

// cheak element if  present retuirn true else false
 console.log(arr.includes(4));

//cheak index of element
 console.log(arr.indexOf(4));

// //join all elements
//  console.log(arr.join('-'));

//  //find elements in range
//  console.log(arr.slice(1,3))

//  console.log(arr.splice(1,3));

 //normal for loop

//  console.log(arr);
//  for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
//  }

//  // 
//  for(let a of  arr){
//     console.log(a);
//  }
//  arr.forEach(ele => {
//     console.log(ele);
//  });

 //Adavance functions in js

 //map

 let ans=arr.map(ele=>{
   console.log(ele*ele);
 })
 console.log(arr);

 //filtre

 let even=arr.filter(ele=>{
    return ele%2==0;
 })
 console.log(even);

 let odd=arr.filter(ele=>{
    return ele%2!=0;
 })
 console.log(odd);

 //reduce finction

 let sum1=arr.reduce((sum,i)=>{
    return sum+i;
 })
 console.log((sum1));
 console.log(arr);

 //find

//  const f=arr.find()
const f=arr.find(x=>{
   return x==3;
})
console.log(f);

//some
// agr condition satify hoga to true else false
const s=arr.some(x=>x>3);
console.log(s);


//every
const e=arr.every(x=>x>=1);
console.log(e);