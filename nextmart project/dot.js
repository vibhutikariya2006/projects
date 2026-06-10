const slides = document.querySelectorAll(".slide");

const dots = document.querySelectorAll(".dot");

let current = 0;

// Show Slide
function showSlide(index){

  slides.forEach((slide)=>{
    slide.classList.remove("active");
  });

  dots.forEach((dot)=>{
    dot.classList.remove("active");
  });

  // 4 dots mate repeat
  let slideIndex = index % slides.length;

  slides[slideIndex].classList.add("active");
  dots[index].classList.add("active");

  current = index;
}

// Dot Click Event
dots.forEach((dot,index)=>{

  dot.addEventListener("click",()=>{

    showSlide(index);

  });

});

// Auto Slider
setInterval(()=>{

  current++;

  if(current >= dots.length){
    current = 0;
  }

  showSlide(current);

},2000);