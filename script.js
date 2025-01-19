const part1 = "TWFnc2hpQ1RG";
const part2 = "e3RoZV93M2Jf";
const part3 = "ZDNjb2RlZF9zd";
const part4 = "WNjc2VzZnVseX0=";
const notify_flag = part1+part2+part3+part4;

function Function1() 
{
  let x=100;
  let y=200;
  return (x+y)*3.14;
}

function Function2() 
{
  let str="This does not matter.";
  for (let i=0;i<100;i++) 
  {
    str += " ";
  }
  return str;
}

function obscureFlag() 
{
  let hidden="";
  for (let i=0;i<5;i++) 
  {
    hidden+="X";
  }
  return hidden;
}

let result1=Function1();
let result2=Function2();

console.log("Just some random values to distract:");
console.log(result1);
console.log(result2);

console.log("The flag is hidden in the code!");
console.log("The hidden flag is: " + notify_flag);
