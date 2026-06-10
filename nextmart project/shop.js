let allProducts = [];
let currentView = "list"; // default

const container = document.getElementById("container");
const gridBtn = document.getElementById("gridBtn");
const listBtn = document.getElementById("listBtn");

const fetchAPI = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error("API cannot be fetched");
    }

    const data = await res.json();

    allProducts = data.products;

    renderData(allProducts);

  } catch (error) {
    console.log(error);
  }
};

fetchAPI();

gridBtn.addEventListener("click", () => {
  currentView = "grid";

  gridBtn.classList.add("bg-blue-600", "text-white");
  listBtn.classList.remove("bg-blue-600", "text-white");
  listBtn.classList.add("bg-gray-200");

  renderData(allProducts);
});

listBtn.addEventListener("click", () => {
  currentView = "list";

  listBtn.classList.add("bg-blue-600", "text-white");
  gridBtn.classList.remove("bg-blue-600", "text-white");
  gridBtn.classList.add("bg-gray-200");

  renderData(allProducts);
});

function renderData(products) {

  container.innerHTML = "";

  // container layout
  if (currentView === "grid") {
    container.className =
      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6";
  } else {
    container.className =
      "max-w-7xl mx-auto space-y-6";
  }

  products.forEach((product) => {

    const discount = product.discountPercentage
      ? `-${Math.round(product.discountPercentage)}%`
      : "-10%";

    const oldPrice = (
      product.price +
      (product.price * product.discountPercentage) / 100
    ).toFixed(2);

    const card = document.createElement("div");

    // GRID VIEW
    if (currentView === "grid") {

      card.className =
        "rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group";

      card.innerHTML = `
        <div class="p-4 h-52 flex items-center justify-center overflow-hidden">
          <img
            src="${product.thumbnail}"
            alt="${product.title}"
            class="h-full object-contain transition duration-300 group-hover:scale-110"
          >
        </div>

        <div class="p-4">

          <p class="text-xs uppercase text-gray-500 mb-2">
            ${product.category}
          </p>

          <h2 class="font-bold text-lg line-clamp-2 min-h-[56px]">
            ${product.title}
          </h2>

          <div class="flex items-center gap-2 mt-3">
            <span class="text-red-500 font-bold text-xl">
              $${product.price}
            </span>
          </div>

          <div class="flex items-center mt-3">
            <span class="text-yellow-500">
              <i class="ri-star-fill"></i> ${product.rating}
            </span>
          </div>

          <button
            class="w-full mt-4 bg-blue-600 hover:bg-black text-white py-2 rounded-lg transition"
          >
            Add To Cart
          </button>

        </div>
      `;

    }

    // LIST VIEW
    else {

      card.className =
        "bg-white border rounded-lg shadow-sm hover:shadow-lg transition duration-300 overflow-hidden";

      card.innerHTML = `
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 p-6 items-center">

          <div class="relative flex justify-center">

            <span
              class="absolute top-0 left-0 bg-green-500 text-white font-bold text-sm w-14 h-14 rounded-full flex items-center justify-center">
              ${discount}
            </span>

            <img
              src="${product.thumbnail}"
              alt="${product.title}"
              class="w-full max-w-xs object-contain hover:scale-105 transition duration-300">
          </div>

          <div>

            <h5 class="uppercase text-gray-500 text-sm mb-2">
              ${product.category}
            </h5>

            <h2 class="text-2xl font-bold text-blue-700 mb-3">
              ${product.title}
            </h2>

            <div class="flex items-center gap-3 mb-2">

              <span class="text-3xl font-bold text-red-500">
                $${product.price}
              </span>

              <span class="text-gray-400 line-through text-lg">
                $${oldPrice}
              </span>

            </div>

            <p class="text-green-600 font-semibold mb-6">
              <i class="ri-check-fill"></i> In Stock
            </p>

            <button
              class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition">
              Add To Cart
            </button>

          </div>

          <div class="border-l-0 lg:border-l lg:pl-8">

            <ul class="space-y-3 text-gray-700 list-disc pl-5">

              <li>${product.description}</li>
              <li>Brand: ${product.brand || "N/A"}</li>
              <li>Rating: ${product.rating}</li>
              <li>Category: ${product.category}</li>

            </ul>

          </div>

        </div>
      `;
    }

    container.appendChild(card);

  });
}