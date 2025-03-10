
//task2 3/9/2025

//Task 1: Verify Interface PropertiesYou are given an object that follows an interface Person with properties name and age. Check if the age is above 18 and print "Adult" if true, otherwise print "Minor."

// interface Person {
//     name: string;
//     age: number;
// }

// const person1: Person = {
//     name: "John Doe",
//     age: 25
// };
// if (person1.age>18) {

//     console.log("Adult");
// }

// else {
//     console.log("Minor");
// }



//Task 2: Iterate Through an Array in an Interface You are given an object that follows an interface Teacher with properties name and subjects (an array of subjects). Print all the subjects the teacher teaches.

// interface Teacher {
//     name: string;
//     subjects: string[];
// }

// const teacher1: Teacher = {
//     name: "ali",
//     subjects: ["Math", "English", "Science"]
// };

// for (let i = 0; i < teacher1.subjects.length; i++) {
//     console.log( "ali is teaching "+" "+teacher1.subjects[i]);
// }


//Task 3: Modify Object in an Array of Interfaces You are given an array of Product interfaces, where each product has a name, price, and quantity. Write a script to decrease the price of each product by 15% if the quantity is greater than 5.


// interface Product {
//     name: string;   
//     price: number;
//     quantity: number;
// }

// const products: Product[] = [
//   { name: "Laptop", price: 1000, quantity: 3 },
//   { name: "Smartphone", price: 800, quantity: 7 },
//   { name: "Headphones", price: 200, quantity: 10 },
//   { name: "Keyboard", price: 50, quantity: 4 }
// ];

// products.forEach(product => {
//     if (product.quantity > 5) {
        // product.price *= 0.85;
//         product.price -=(product.price*0.15)
//     }
// });

// console.log(products);


//Task 4 : Create a form inside the HTML page that contains inputs for ( name , description, price and quantity) for product and when you submit the form it will save the product inside array in the local storage and then display all the products as a cards under the form.*use interface to create a structure for this product 
// interface Product {
//     name: string;
//     description: string;
//     price: number;
//     quantity: number;
// }

// function displayProducts() {
//     const productContainer = document.getElementById("product-card");
//     if (!productContainer) return;

//     const products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

//     productContainer.innerHTML = "";
//     for (const product of products) {
//         productContainer.innerHTML += `
//             <div class="card">
//                 <h3>${product.name}</h3>
//                 <p>${product.description}</p>
//                 <p><strong>$${product.price}</strong></p>
//                 <p>Quantity: ${product.quantity}</p>
//             </div>
//         `;
//     }
// }

// document.getElementById("product-form")?.addEventListener("submit", function (event) {
//     event.preventDefault();

//     const products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

//     const product: Product = {
//         name: (document.getElementById("name") as any).value,
//         description: (document.getElementById("description") as any).value,
//         price: parseFloat((document.getElementById("price") as any).value),
//         quantity: parseInt((document.getElementById("quantity") as any).value),
//     };

//     products.push(product);
//     localStorage.setItem("products", JSON.stringify(products));

//     displayProducts();
// });

// document.addEventListener("DOMContentLoaded", displayProducts);




///

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
}

function displayProducts() {
    const productContainer = document.getElementById("product-card");
    if (!productContainer) return;

    const products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

    productContainer.innerHTML = "";
    for (const product of products) {
        productContainer.innerHTML += `
            <div class="card" id="product-${product.id}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p><strong>$${product.price}</strong></p>
                <p>Quantity: ${product.quantity}</p>
            </div>
        `;
    }
}

document.getElementById("product-form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    const products: Product[] = JSON.parse(localStorage.getItem("products") || "[]");

    const product: Product = {
        id: Date.now(), 
        name: (document.getElementById("name") as any).value,
        description: (document.getElementById("description") as any).value,
        price: parseFloat((document.getElementById("price") as any).value),
        quantity: parseInt((document.getElementById("quantity") as any).value),
    };

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

    displayProducts();
});

document.addEventListener("DOMContentLoaded", displayProducts);
