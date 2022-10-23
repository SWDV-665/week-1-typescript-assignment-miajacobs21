// creating a Grocery class
class Grocery {
  // properties:data type
  name: string;
  department: string;
  quantity: number;
  price: number;

  // adding a constructor
  constructor(n: string, d:string, q: number, p: number){
      this.name = n;
      this.department = d;
      this.quantity = q;
      this.price = p;
  }
}

// creating a grocery items list
// **new keyword is used to inititalise objects**
let list_of_items = [
  new Grocery("milk", "dairy", 3, 10),
  new Grocery("bread", "bakery", 6, 25),
  new Grocery("egg", "dairy", 11, 10)
]

// **accessing the html element with id app**
const ele = document.getElementById("app");

// creatiing a <p> element for each item in the grocery list and
// appending it to the html page - use ${e.property name} - the rest shows up as text 
// in HTML doc 
list_of_items.forEach(e => {
  const p = document.createElement("p");
  p.textContent = `${e.name} (${e.department}) | qty:${e.quantity} $${e.price}`;
  ele.appendChild(p);
});