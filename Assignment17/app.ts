const num1 = document.getElementById("num1") as HTMLInputElement;
const num2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("add")!;

const numArray: number[] = [];
const stringArray: string[] = [];



function add(num1:number, num2:number){
  return num1 + num2;
}

button.addEventListener("click",()=>{
  const n1 = num1.value;
  const n2 = num2.value;

  const result = add(+n1, +n2);

  numArray.push(result);
  console.log(result, numArray);
})


