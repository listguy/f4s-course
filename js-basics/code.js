console.log("this code is inside a separate js file");

document.addEventListener("DOMContentLoaded", function () {
  document.body.innerHTML += `<div>Something interesting!</div>`;
});

/*
function   pow(x,n){
  let result= 1;
for(let i = 0;i < n;i ++)
{
 result *=x
}
  return result
}
        let x = prompt("x?", "")
        let n = prompt("n?", "")
if(n<0 )    {
  alert(`Power ${n} is not supported,
    please enter a non-negative integer number`)
} else alert(pow(x, n));
*/