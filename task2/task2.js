//task2 3/9/2025
var _a;
(_a = document.getElementById("product-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var product = {
        name: document.getElementById("name").value,
        description: document.getElementById("description").value,
        price: parseFloat(document.getElementById("price").value),
        quantity: parseInt(document.getElementById("quantity").value),
    };
    localStorage.setItem("product", JSON.stringify(product));
    document.getElementById("product-card").innerHTML = "\n        <div class=\"card\">\n            <h3>".concat(product.name, "</h3>\n            <p>").concat(product.description, "</p>\n            <p><strong>$").concat(product.price, "</strong></p>\n            <p>Quantity: ").concat(product.quantity, "</p>\n        </div>\n    ");
});
