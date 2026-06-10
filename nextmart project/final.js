// marquee tag ni items add karva mate 
const featuredItems = [
  {
    img: "./src/featured-1.png",
    title: "Computer & Laptop"
  },
  {
    img: "./src/featured-2.png",
    title: "Television"
  },
  {
    img: "./src/featured-3.png",
    title: "Audio & Video"
  },
  {
    img: "./src/featured-4.png",
    title: "Mobile & Tablets"
  },
  {
    img: "./src/featured-5.png",
    title: "Smart Watches"
  },
  {
    img: "./src/featured-6.png",
    title: "Camera & Drones"
  },
  {
    img: "./src/featured-7.png",
    title: "Headphones"
  },
  {
    img: "./src/featured-8.png",
    title: "Games"
  }
];

function renderFeatured() {
  const container = document.getElementById("featuredContainer");

  container.innerHTML = featuredItems.map(item => `
    <div class="flex items-center gap-3 inline-flex">
      <div class="w-11 h-11 rounded-full border flex items-center justify-center">
        <img src="${item.img}" alt="${item.title}">
      </div>
      <h2 class="text-[16px] font-semibold text-gray-800">
        ${item.title}
      </h2>
    </div>
  `).join("");
}

renderFeatured();

// marquee tag repeatiton 
  const marquee = document.querySelector(".featuredContainer");

  marquee.innerHTML += marquee.innerHTML;
  marquee.innerHTML += marquee.innerHTML;


// Popular category ni js 
const slider1 = document.getElementById("slider1");

async function fetchProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    rendercategories1(data.products);
    startSlider(data.products.length);

  } catch (error) {
    console.error(error);
  }
}

function rendercategories1(products) {
  slider1.innerHTML = products.map(product => `
    <div class="min-w-[200px] flex-shrink-0 text-center">
      <img
        src="${product.thumbnail}"
        class="w-[160px] h-[160px] object-contain bg-gray-100 mx-auto hover:shadow-xl hover:bg-white transition duration-300 hover:scale-110"
      >

      <h3 class="font-bold mt-4">
        ${product.title}
      </h3>

      <p>
        ${product.stock} items
      </p>
    </div>
  `).join("");
}

function startSlider() {

  let index = 0;

  const card = slider1.firstElementChild;

  if (!card) return;

  const cardWidth = card.offsetWidth + 30;
  const totalCards = slider1.children.length;

  setInterval(() => {

    index++;

    if (index >= totalCards - 4) {
      index = 0;
    }

    slider1.style.transform =
      `translateX(-${index * cardWidth}px)`;

  }, 2500);

}
fetchProducts();



// Today's Popular Picks Section JS 
const customProducts = [
  {
    badge: "-6%",
    badgeColor: "bg-green-500",
    stock: "In Stock",
    stockColor: "text-green-600",
    stockIcon: "./assestes/icon-1.png",
    buttonText: "Add To Cart",
  },
  {
    badge: "HOT",
    badgeColor: "bg-red-500",
    stock: "In Stock",
    stockColor: "text-green-600",
    stockIcon: "./src/icon-1.png",
    buttonText: "Add To Cart",
  },
  {
    stock: "Stock Out",
    stockColor: "text-red-600",
    stockIcon: "./src/icon-2.png",
    buttonText: "Not Available",
  },
  {
    badge: "HOT",
    badgeColor: "bg-red-500",
    stock: "In Stock",
    stockColor: "text-green-600",
    stockIcon: "./assestes/icon-1.png",
    buttonText: "Add To Cart",
  },
  {
    stock: "In Stock",
    stockColor: "text-green-600",
    stockIcon: "./assestes/icon-1.png",
    buttonText: "Add To Cart",
  },
  {
    stock: "In Stock",
    stockColor: "text-green-600",
    stockIcon: "./assestes/icon-1.png",
    buttonText: "Add To Cart",
  },
];


const sliderCards = document.getElementById("slider-cards");


async function fetchProducts1() {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await response.json();

    // Merge API Data + Custom Data
    const products = data.products.map((product, index) => ({
      ...product,
      ...customProducts[index],
    }));

    renderProducts1(products);
    startSlider1();

  } catch (error) {
    console.error(error);

    sliderCards.innerHTML = `
      <div class="text-center text-red-500 text-lg py-10">
        Failed to load products.
      </div>
    `;
  }
}


function renderProducts1(products) {

  sliderCards.innerHTML = products
    .map(
      (product) => `
      
<div class="group flex-shrink-0 min-w-[250px] sm:min-w-[280px] md:min-w-[300px] lg:min-w-[320px] bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl transition duration-300">

    <!-- Image Section -->
    <div class="relative bg-gray-50 p-6 overflow-hidden">

        <img
            src="${product.thumbnail}"
            alt="${product.title}"
            class="w-full h-52 object-contain transition duration-500 group-hover:scale-110"
        >

        ${
          product.badge
            ? `
        <span class="w-[40px] h-[40px] absolute top-4 left-4 px-3 py-1 rounded-full text-white text-xs font-semibold flex items-center justify-center ${product.badgeColor}">
          ${product.badge}
        </span>
        `
            : ""
        }

        <!-- Hover Icons -->
        <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">

            <button class="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-600 hover:text-white">
                <i class="ri-eye-line"></i>
            </button>

            <button class="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-600 hover:text-white">
                <i class="ri-heart-line"></i>
            </button>

            <button class="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-blue-600 hover:text-white">
                <i class="ri-arrow-left-right-line"></i>
            </button>

        </div>

    </div>

    <!-- Content -->
    <div class="p-5">

        <p class="text-sm text-gray-500 uppercase">
            ${product.category}
        </p>

        <h3 class="mt-2 text-lg font-semibold text-gray-800 line-clamp-2 min-h-[56px]">
            ${product.title}
        </h3>

        <div class="mt-3 flex items-center gap-2">
            <span class="text-xl font-bold text-red-500">
                $${product.price}
            </span>
        </div>

        <!-- Rating -->
        <div class="flex items-center gap-1 text-yellow-400 mt-3">

            ${'<i class="ri-star-fill"></i>'.repeat(
              Math.round(product.rating)
            )}

            <span class="text-gray-500 text-sm ml-1">
                (${product.rating})
            </span>

        </div>

        <!-- Stock -->
        <div class="flex items-center gap-2 mt-3">

            <img
              src="${product.stockIcon}"
              alt="stock"
              class="w-4 h-4"
            >

            <span class="${product.stockColor} text-sm font-medium">
              ${product.stock}
            </span>

        </div>

        <!-- Button -->
            <button
            class="mt-4 w-full py-2 bg-blue-700 text-white rounded-full font-medium opacity-0 translate-y-3 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:translate-y-0 hover:bg-black ">
            ${product.buttonText}
        </button>
       

    </div>

</div>

`
    )
    .join("");
}

fetchProducts1();


function startSlider1() {
  let index = 0;

  const card = sliderCards.children[0];
  const cardWidth = card.offsetWidth + 50;

  sliderCards.style.transition = "0.5s";

  setInterval(() => {
    index++;

    if (index >= sliderCards.children.length) {
      index = 0;
    }

    sliderCards.style.transform =
      `translateX(-${index * cardWidth}px)`;

  }, 3000);
}
// Scrolling section 3 
const subheading = document.getElementById("subheading");

const categories11= [
  "ALL",
  "Mobile",
  "Watch",
  "Audio",
  "Video",
  "Internet",
  "Music",
  "Power"
];

subheading.innerHTML = categories11
  .map(
    (category1, index) => `
      <a
        href="#"
        class="${
          index === 0
            ? "text-[#003EAC]"
            : "text-[#111111] hover:text-[#003EAC]"
        } text-[16px] font-medium pr-[40px]"
      >
        ${category1}
      </a>
    `
  )
  .join("");


const sliderCards1 = document.getElementById("slider-cards1");

async function fetchProducts2() {
  try {
    const response = await fetch(
      "https://dummyjson.com/products"
    );

    const data = await response.json();

    renderProducts2(data.products);

    setTimeout(() => {
      startSlider2();
    }, 100);

  } catch (error) {
    console.log(error);
  }
}

function renderProducts2(products) {

  sliderCards1.innerHTML = products.map(product => {

    const stockPercent =
      Math.min(product.stock, 100);

    return `
    
      <div class="group flex-shrink-0 w-[235px] bg-white rounded-lg overflow-hidden hover:shadow-xl">

        <div class="relative flex items-center justify-center p-6 overflow-hidden">

          <img
            src="${product.thumbnail}"
            alt="${product.title}"
            class="w-full h-[180px] object-contain transition-transform duration-500 group-hover:scale-110"
          >

          <button
            class="absolute top-3 left-3 w-12 h-12 rounded-full bg-[#10CB23] text-white text-sm">
            -${Math.round(product.discountPercentage)}%
          </button>

        </div>

        <div class="p-4">

          <h3 class="text-sm font-semibold text-gray-500 uppercase">
            ${product.category}
          </h3>

          <h4 class="font-bold text-base mt-2 line-clamp-2">
            ${product.title}
          </h4>

          <h5 class="text-red-600 text-lg font-semibold mt-2">
            $${product.price}
          </h5>

          <div class="w-full h-[5px] bg-[#E3E7EB] rounded mt-2">
            <div
              class="h-[5px] bg-[#27D82E] rounded"
              style="width:${stockPercent}%"
            ></div>
          </div>

          <p class="text-[#7C7C7C] text-sm mt-2">
            Available:
            <span class="text-black font-medium">
              ${stockPercent}%
            </span>
          </p>

          <button
            class="mt-4 w-full py-2 bg-blue-700 text-white rounded-full opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-black">
            Add To Cart
          </button>

        </div>

      </div>

    `;

  }).join("");
}

function startSlider2() {

  const firstCard1 =
    sliderCards1.querySelector("div");

  if (!firstCard1) return;

  let index = 0;

  const cardWidth1 =
    firstCard1.offsetWidth + 30;

  const totalCards1 =
    sliderCards1.children.length;

  setInterval(() => {

    index++;

    if (index >= totalCards1 - 4) {
      index = 0;
    }

    sliderCards1.style.transform =
      `translateX(-${index * cardWidth1}px)`;

  }, 2500);

}

fetchProducts2();


// News Section mate js 
const newsData = [

  {
    image: "./src/news-1.jpg",
    category: "Virtual",
    author: "Alex Beniwal",
    title: "Feel like you're actually experiencing the action in real life with the VR"
  },

  {
    image: "./src/news-2.jpg",
    category: "Mobile",
    author: "Haris Gulati",
    title: "Smartphones have largely replaced personal digital assistant"
  },

  {
    image: "./src/news-3.jpg",
    category: "Virtual",
    author: "Alex Hels",
    title: "It sports crisp, transparent visuals and uses a 5.7-inch 1080p OLED"
  },

  {
    image: "./src/news-4.jpg",
    category: "Wireless",
    author: "Mical Von",
    title: "Wireless communications is the transmission of voice and data"
  }

];

const container = document.getElementById("newsContainer");

container.innerHTML = newsData.map(news => `

  <div class="group cursor-pointer">

    <!-- Image -->
    <div class="overflow-hidden rounded-lg">

      <img
        src="${news.image}"
        alt=""
        class="w-full h-[220px] md:h-[250px] object-cover transition-all duration-700 group-hover:scale-110"
      >

    </div>

    <!-- Meta -->
    <div class="flex items-center gap-3 mt-5">

      <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
        ${news.category}
      </span>

      <span class="text-sm text-gray-700 font-medium">
        By ${news.author}
      </span>

    </div>

    <!-- Title -->
    <h3 class="text-lg md:text-xl font-bold leading-tight mt-4 transition duration-300 group-hover:text-blue-700">

      ${news.title}

    </h3>

  </div>

`).join("");