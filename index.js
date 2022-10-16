// Write your solution here!
function beforeEach() {
  cats.length = 0;

  cats.push("Milo", "Otis", "Garfield");
}

let cats=["Milo", "Otis", "Garfield"]
  function destructivelyAppendCat(name){
    beforeEach();
    cats.push(name);
  }
  function destructivelyPrependCat(name){
    cats.unshift(name);
  }
  function destructivelyRemoveLastCat(){
    cats.pop();
  }
  function destructivelyRemoveFirstCat(){
    cats.shift();
  }
  
  function appendCat(name){

    let newCats_1 = [...cats,name];
   return newCats_1;
  }
  function prependCat(name){
     let newCats_2=[name,...cats];
     return newCats_2;

  }
   function removeLastCat(){
    let newCats_3= cats.slice(0,cats.length-1);
    return newCats_3;
   }
   function removeFirstCat(){
    let newCats_4= cats.slice(1);
    return newCats_4;
   }