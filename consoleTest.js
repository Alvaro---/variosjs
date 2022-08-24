function abc(){
    console.log(a)
    var a;
}
let b=20;
const c=1;

abc()


const girl = {
    name: 'Anna',
    info: { age: 20, number: 123 }
  };
  
//   const newGirl = { ...girl }; //Shallow Copy
  const newGirl = JSON.parse(JSON.stringify(girl));
  console.log("a", JSON.stringify(girl))
  newGirl.info.age = 30;
  console.log(girl.info.age, newGirl.info.age);