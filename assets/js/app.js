let cl = console.log;

function add(x,y = 12){
    //var x; undefined
    //var y = 12;
    //var z = 20
    return x + y;
}

cl(add(3,5)); //x == 3,y == 5;
cl(add(3,2)); //x == 3,y == 2;
cl(add(100)); //x == 100,y == 12;

function calculateBill(total,tax = .05,tip = .1){
    return total +(total * tax) + (total * tip);
}

cl(calculateBill(6000,0.1,0.2));
cl(calculateBill(6000));

// example1//

function multiply(a, b = 5) {
    return a * b;
  }
  
  console.log(multiply(5, 2)); //10

  console.log(multiply(5)); //25
  
  
  //example2//
  
function calculateAge(father, son = 20,daughter = 16){
    return `total age of father, son and daughter  ${ father + son + daughter}`;
}
cl(calculateAge(48,15,11));