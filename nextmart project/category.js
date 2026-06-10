const productsContainer = document.getElementById("slider");

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    renderProducts(data.products);

  } catch (error) {
    console.error(error);
  }
}

function renderProducts(products) {
  productsContainer.innerHTML = products.map(product => `
    <div class="w-[250px] text-center p-4 border bg-gray-100 rounded-lg hover:shadow-xl transition duration-300 hover:bg-white">
      <img
        src="${product.thumbnail}"
        alt="${product.title}"
        class="w-[160px] h-[160px] object-contain mx-auto hover:scale-110 transition duration-300"
      >

      <h3 class="font-bold mt-4">
        ${product.title}
      </h3>

      <p class="text-gray-500">
        Stock: ${product.stock}
      </p>
    </div>
  `).join("");
}

fetchProducts();