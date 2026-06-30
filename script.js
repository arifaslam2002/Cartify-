const backgrounds = [
  "/bg-img/img-bg.jpg",
  "/bg-img/bg1.png",
  "/bg-img/bg2.png",
  "/bg-img/bg3.png",
  "/bg-img/bg4.png",
  "/bg-img/bg5.png",
];
async function getProducts() {
  const url = "https://dummyjson.com/products";
  const response = await fetch(url);
  const data = await response.json();
  const productContainer = document.getElementById("pro-card");
  data.products.forEach((product, index) => {
    function animateUpdate(type) {
    count.classList.remove("animate-plus","animate-minus");
    price.classList.remove("animate-plus","animate-minus");
    void count.offsetWidth;
    void price.offsetWidth;
    count.classList.add(type);
    price.classList.add(type);
}
    let quantity = 1;
    let originalPrice = product.price;
    const card = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("p");
    const btn = document.createElement("button");
    const div = document.createElement("div");
    const imgbg = document.createElement("div");
    const quantityContainer = document.createElement("div");
    const minusBtn = document.createElement("button");
    const count = document.createElement("span");
    const plusBtn = document.createElement("button");
    const priceRow = document.createElement("div");
    priceRow.classList.add("price-row");
    quantityContainer.classList.add("quantity-container");
    minusBtn.classList.add("qty-btn");
    plusBtn.classList.add("qty-btn");
    count.classList.add("qty-count");
    imgbg.classList.add("imgBg");
    div.appendChild(imgbg);
    div.classList.add("card-upcover");
    div.style.backgroundImage = `url(${backgrounds[index % backgrounds.length]})`;
    img.src = product.thumbnail;
    title.textContent = product.title;
    description.textContent = product.description;
    price.textContent = "$" + product.price;
    minusBtn.textContent = "-";
    count.textContent = "1";
    plusBtn.textContent = "+";
    btn.textContent = "Add to Cart";
    quantityContainer.appendChild(minusBtn);
    minusBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        count.textContent = quantity;
        price.textContent = "$" + (originalPrice * quantity).toFixed(2);
        animateUpdate("animate-minus");
      }
    });
    quantityContainer.appendChild(count);
    quantityContainer.appendChild(plusBtn);
    plusBtn.addEventListener("click", () => {
      quantity++;
      count.textContent = quantity;
      price.textContent = "$" + (originalPrice * quantity).toFixed(2);
     animateUpdate("animate-plus");
    });
    imgbg.appendChild(img);
    card.appendChild(div);
    card.appendChild(title);
    title.classList.add("product-title");
    card.appendChild(description);
    description.classList.add("product-description");
    priceRow.appendChild(quantityContainer);
    priceRow.appendChild(price);
    card.appendChild(priceRow);
    card.appendChild(btn);
    btn.classList.add("add-cart-btn");
    card.classList.add("product-card");
    productContainer.appendChild(card);
  });
}
getProducts();
