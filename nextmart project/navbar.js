const categories = [
  "Phone & Tablets",
  "Laptop & Desktop",
  "Sound Equipment",
  "Power Accessories",
  "Fitness Wearable",
  "Peripherals",
  "Smart Electronics",
  "Home Appliance",
  "Drone & Camera"
];

const languages = [
  {
    code: "EN",
    flag: "https://flagcdn.com/w40/gb.png"
  },
  {
    code: "DE",
    flag: "https://flagcdn.com/w40/de.png"
  },
  {
    code: "FR",
    flag: "https://flagcdn.com/w40/fr.png"
  },
  {
    code: "IT",
    flag: "https://flagcdn.com/w40/it.png"
  }
];

const navLinks = [
  {
    title: "Home",
    dropdown: [
      "Electronics",
      "Grocery",
      "Fish & Meat",
      "Vegetable",
      "Furniture",
      "Medical",
      "Kids",
      "Gardening",
      "Watch",
      "Pet"
    ],
    links: "index.html"
  },

  {
    title: "Shop",
    dropdown: [
      "Shop Page 1",
      "Shop Page 2",
      "Cart",
      "Checkout",
      "Account"
    ],
    links: "shop.html"
  },

  {
    title: "Pages",
    dropdown: [
      "About Us",
      "Log In",
      "Sign Up",
      "404"
    ],
    links: "#"
  },

  {
    title: "Blog",
    dropdown: [
      "Blog Grid",
      "Blog Standard",
      "Blog Details"
    ],
     links: "blog.html"
  },

  {
    title: "Contact",
    dropdown: [],
    links: "contact.html"
  }
];


// Desktop Categories


document.getElementById("categoryMenu").innerHTML =
  categories
    .map(
      item => `
      <li class="px-5 py-3 hover:bg-gray-100 cursor-pointer">
        ${item}
      </li>
    `
    )
    .join("");


// Search Categories


document.getElementById("searchCategoryMenu").innerHTML =
  categories
    .map(
      item => `
      <li class="px-5 py-3 hover:bg-gray-100 cursor-pointer">
        ${item}
      </li>
    `
    )
    .join("");


// Mobile Categories


document.getElementById("mobileCategoryMenu").innerHTML =
  categories
    .map(
      item => `
      <li class="px-5 py-3 border-b hover:bg-gray-100 cursor-pointer">
        ${item}
      </li>
    `
    )
    .join("");


// Languages


document.getElementById("languageMenu").innerHTML =
  languages
    .map(
      lang => `
      <div class="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer">

        <img
          src="${lang.flag}"
          alt="${lang.code}"
          class="w-5 h-5 rounded-full object-cover"
        >

        <span>${lang.code}</span>

      </div>
    `
    )
    .join("");


// Desktop Navigation


document.getElementById("navMenu").innerHTML =
  navLinks
    .map(item => {
      if (item.dropdown.length > 0) {
        return `
          <li class="relative group">

            <a
              href="${item.links || "#"}"
              class="flex items-center gap-1 py-2"
            >
              ${item.title}
              <i class="ri-arrow-down-s-line"></i>
            </a>

            <ul
              class="absolute top-full left-0 bg-white shadow-lg min-w-[230px] hidden group-hover:block z-50"
            >
              ${item.dropdown
                .map(
                  sub => `
                    <li class="px-5 py-3 hover:bg-gray-100 cursor-pointer">
                      ${sub}
                    </li>
                  `
                )
                .join("")}
            </ul>

          </li>
        `;
      }

      return `
        <li>
          <a href="${item.links || "#"}" class="py-2 block">
            ${item.title}
          </a>
        </li>
      `;
    })
    .join("");


// Mobile Navigation


document.getElementById("mobileNavMenu").innerHTML =
  navLinks
    .map(
      item => `
      <li class="border-b">

        <div class="mobile-dropdown px-5 py-3 flex justify-between items-center">

          <a href="${item.links || "#"}">
            ${item.title}
          </a>

          ${
            item.dropdown.length
              ? `<i class="ri-add-line mobile-icon cursor-pointer"></i>`
              : ""
          }

        </div>

        ${
          item.dropdown.length
            ? `
            <ul class="hidden bg-gray-50">

              ${item.dropdown
                .map(
                  sub => `
                    <li class="px-10 py-3 hover:bg-gray-100">
                      ${sub}
                    </li>
                  `
                )
                .join("")}

            </ul>
          `
            : ""
        }

      </li>
    `
    )
    .join("");

// Mobile Toggle Buttons


const menuBtn = document.getElementById("menuBtn");
const categoryBtn = document.getElementById("categoryBtn");

const mobileMenu = document.getElementById("mobileMenu");
const mobileCategories = document.getElementById("mobileCategories");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    mobileCategories.classList.add("hidden");
  });
}

if (categoryBtn) {
  categoryBtn.addEventListener("click", () => {
    mobileCategories.classList.toggle("hidden");
    mobileMenu.classList.add("hidden");
  });
}


// Mobile Dropdown


document.addEventListener("click", e => {
  if (!e.target.classList.contains("mobile-icon")) return;

  const parentLi = e.target.closest("li");

  const submenu = parentLi.querySelector("ul");

  if (submenu) {
    submenu.classList.toggle("hidden");

    e.target.classList.toggle("ri-add-line");
    e.target.classList.toggle("ri-subtract-line");
  }
});
