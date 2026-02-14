let c=5;
function fact(c)
{
let arr=Array.from(Array(c+1).keys());
console.log(arr.slice(1));
    let f =arr.slice(1,).reduce((a,b)=>{
        return a*b
    })
    console.log('factorial is : ',f);

}
fact(c);
