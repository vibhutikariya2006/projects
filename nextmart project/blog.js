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
  },
  {
    image: "./src/news-27.jpg",
    category: "Wireless",
    author: "Mical Von",
    title: "Feel like you’re actually experiencing the action in real life with the VR"
  },
  {
    image: "./src/news-28.jpg",
    category: "Wireless",
    author: " Alex Beniwal",
    title: "Smartphones have largely replaced personal digital assistant"
  },
  {
    image: "./src/news-29.jpg",
    category: "Wireless",
    author: "Haris Gulati",
    title: "It sports crisp, transparent visuals and uses a 5.7-inch 1080p OLED"
  },
  {
    image: "./src/news-30.jpg",
    category: "Wireless",
    author: "Alex Hels",
    title: "Feel like you’re actually experiencing the action in real life with the VR"
  },
  {
    image: "./src/news-31.jpg",
    category: "Wireless",
    author: "Mical Von",
    title: "Smartphones have largely replaced personal digital assistant"
  },

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


    <div class="flex items-center gap-3 mt-5">

      <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
        ${news.category}
      </span>

      <span class="text-sm text-gray-700 font-medium">
        By ${news.author}
      </span>

    </div>

  
    <h3 class="text-lg md:text-xl font-bold leading-tight mt-4 transition duration-300 group-hover:text-blue-700">

      ${news.title}

    </h3>

  </div>

`).join("");