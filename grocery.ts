//  creating a Grocery class
class Grocery {
    // adding properties with their data type
    name: string;
    quantity: number;
    price: number;
    department: string;

    // adding a constructor
    constructor(n: string, q: number, p: number, d: string){
        this.name = n;
        this.quantity = q;
        this.price = p;
        this.department = d;
    }
}

// adding a list of grocery items
// NOTE - "new" is used to inititalise objects
let list_of_items = [
    new Grocery("milk", 3, 10, "Dairy"),
    new Grocery("bread", 6, 25, "Bakery"),
    new Grocery("egg", 11, 10, "Dairy")
]

// **ACCESS HTML - element with id "app"**
const ele = document.getElementById("app");

// **creating a <p> element for each item in the grocery list and
// append it to the html page**
list_of_items.forEach(e => {
  const p = document.createElement("p");
  p.textContent = `${e.name} ${e.quantity} ${e.department} ${e.price}`;
  ele.appendChild(p);
});