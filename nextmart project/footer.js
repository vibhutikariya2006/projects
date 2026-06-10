const footerLinks = [
  {
    title: "Resources",
    links: ["About Us", "Shop", "Cart", "Brands", "Mobile App"]
  },
  {
    title: "Support",
    links: ["Reviews", "Contact", "Return Policy", "Online Support", "Money Back"]
  },
  {
    title: "Store Info",
    links: [
      "Best Seller",
      "Top Sold Items",
      "New Arrivals",
      "Flash Sale",
      "Discount Products"
    ]
  }
];

const socialIcons = [
  "ri-facebook-circle-fill",
  "ri-twitter-line",
  "ri-linkedin-box-fill",
  "ri-dribbble-line"
];

const paymentCards = [
  "./src/footer-card-1.png",
  "./src/footer-card-2.png",
  "./src/footer-card-3.png",
  "./src/footer-card-4.png",
  "./src/footer-card-5.png",
  "./src/footer-card-6.png"
];

const footer = document.getElementById("footer");

footer.innerHTML = `
<div class="bg-[#0E0E0E] text-white">
  <div class="max-w-7xl mx-auto px-4 py-12">

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

      <!-- Contact Column -->
      <div class="space-y-6">

        <div class="flex gap-4">
          <i class="ri-customer-service-2-line text-3xl text-[#F5B020]"></i>

          <div>
            <a href="#" class="text-lg font-semibold text-[#F5B020]">
              91 2345 678
            </a>

            <p class="text-sm text-[#B7B7B7]">
              Call our Hotline 24/7
            </p>
          </div>
        </div>

        <div class="text-[#B7B7B7] text-sm">
          <p>57 Heol Isaf Station Road, Cardiff, UK</p>
          <a href="#">info@example.com</a>
        </div>

        <div class="flex gap-3">
          ${socialIcons
            .map(
              icon => `
              <a href="#"
                 class="w-10 h-10 rounded-full border border-[#ffffff26]
                 flex items-center justify-center text-[#B7B7B7]
                 hover:bg-[#F5B020] hover:text-white">
                 <i class="${icon}"></i>
              </a>
            `
            )
            .join("")}
        </div>

      </div>

      <!-- Dynamic Link Columns -->
      ${footerLinks
        .map(
          section => `
          <div>
            <h4 class="text-xl font-semibold mb-5">
              ${section.title}
            </h4>

            <ul class="space-y-2">
              ${section.links
                .map(
                  link => `
                    <li>
                      <a href="#"
                        class="text-[#B7B7B7] hover:text-[#F5B020]">
                        ${link}
                      </a>
                    </li>
                  `
                )
                .join("")}
            </ul>
          </div>
        `
        )
        .join("")}

      <!-- Subscribe Column -->
      <div>
        <h4 class="text-xl font-semibold mb-5">
          Subscribe
        </h4>

        <p class="text-[#B7B7B7] mb-5">
          Stay informed about upcoming events,
          webinars, and exciting happenings.
        </p>

        <div class="relative">
          <input
            type="email"
            placeholder="Email Address"
            class="w-full h-12 bg-[#1A1A1A]
            border border-[#ffffff1f]
            rounded-full px-4 pr-12 text-white"
          >

          <button
            class="absolute right-1 top-1/2
            -translate-y-1/2 w-10 h-10
            rounded-full bg-[#F5B020]
            flex items-center justify-center">

            <i class="ri-arrow-right-line"></i>

          </button>
        </div>
      </div>

    </div>

    <!-- Bottom Section -->
    <div
      class="border-t border-gray-700
      mt-10 pt-6 flex flex-col
      md:flex-row justify-between
      items-center gap-4">

      <p class="text-[#B7B7B7] text-sm">
        Copyright © 2025
        <span class="text-[#F5B020]">
          Nexmart
        </span>
        . All Rights Reserved.
      </p>

      <div class="flex gap-2 flex-wrap">
        ${paymentCards
          .map(
            img => `
              <img src="${img}" alt="card">
            `
          )
          .join("")}
      </div>

    </div>

  </div>
</div>
`;