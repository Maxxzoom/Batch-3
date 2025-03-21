// toggle for navbar
// const togglebtn = document.getElementById("menu-toggle");
// const navLinks = document.getElementById("nav-links");

// togglebtn.addEventListener("click", () => {
//   navLinks.classList.toggle("active");
// });

// carousel
// document.addEventListener("DOMContentLoaded", () => {
//   let currentIndex = 0;
//   const slides = document.querySelectorAll(".slide");
//   const dots = document.querySelectorAll(".dot");
//   const prevBtn = document.querySelector(".prev");
//   const nextBtn = document.querySelector(".next");
//   console.log(slides.length);
//   console.log(dots);

//   function showSlide(index) {
//     slides.forEach((slide) => slide.classList.remove("active"));
//     dots.forEach((slide) => slide.classList.remove("active"));
//     slides[index].classList.add("active");
//     dots[index].classList.add("active");
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }
//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   }

//   dots.forEach((dot) => {
//     dot.addEventListener("click", (e) => {
//       currentIndex = parseInt(e.target.dataset.index);
//       showSlide(currentIndex)
//     });
//   });
//   nextBtn.addEventListener("click", nextSlide);
//   prevBtn.addEventListener("click", prevSlide);

// });

// autocarousel
// let currentIndex = 0;

// function autoSlideCarousel() {
//   // console.log("timer called");
//   const carouselInner = document.querySelector(".carousel-inner");
//   const totalSlides = document.querySelectorAll(".carousel-item");
//   currentIndex = (currentIndex + 1) % totalSlides.length;
//   carouselInner.style.transform = `translateX(-${currentIndex * 100}%) `;
// }

// // Auto slide every 2 second
// setInterval(autoSlideCarousel, 3000);

// Contact form

document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("SSQqKIEdG4CwfC3PQ");

  document
    .getElementById("contactform")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      console.log(e);

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
      };

      emailjs.send("service_ux3neyg", "template_nyqpdwd", templateParams).then(
        function (response) {
          document.getElementById("statusmessage").innerText =
            "Message sent Successfully";
        },
        function (error) {
          document.getElementById("statusmessage").innerText =
            "Failed to send message, Please try again...!";
        }
      );
    });
});

// projects
document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    { name: "Counter", url: "./projpages/counter.html" },
    { name: "To-Do List", url: "./projpages/todo.html" },
    { name: "Digital Clock", url: "./projpages/digital.html" },
    { name: "BMI Calculator", url: "./projpages/BMIcalculator.html" },
    { name: "Temperature Converter", url: "./projpages/TempConverter.html" },
    { name: "Stopwatch", url: "./projpages/Stopwatch.html" },
    { name: "Quiz", url: "./projpages/Quiz.html" },
    { name: "Weather App", url: "./projpages/Weather.html" },
    { name: "Random Jokes", url: "./projpages/Jokes.html" },
    {
      name: "Text to Speech Converter",
      url: "./projpages/Texttospeechconverter.html",
    },
  ];

  const projectContainer = document.getElementById("projectContainer");
  const searchBar = document.getElementById("searchBar");

  function displayProjects(filteredProjects) {
    projectContainer.innerHTML = "";
    filteredProjects.forEach((project) => {
      const projectBox = document.createElement("div");
      projectBox.classList.add("project-box");
      projectBox.textContent = project.name;
      projectBox.onclick = () => openProject(project.url);
      projectContainer.appendChild(projectBox);
    });
  }

  function openProject(url) {
    window.location.href = url;
  }

  searchBar.addEventListener("input", function () {
    const searchText = searchBar.value.toLowerCase();
    const filteredProjects = projects.filter((project) =>
      project.name.toLowerCase().includes(searchText)
    );
    displayProjects(filteredProjects);
  });

  displayProjects(projects); // Initial rendering
});

const products = [
  {
    id: 1,
    name: "SmartPhone",
    Price: 299,
    image: "",
  },
  {
    id: 2,
    name: "Laptop",
    Price: 699,
    image: "",
  },
  {
    id: 3,
    name: "Headphone",
    Price: 99,
    image: "",
  },
  {
    id: 4,
    name: "SmartWatch",
    Price: 199,
    image: "",
  },
];

const cartCount = document.getElementById("cartCount");
const cartDropdown = document.getElementById("cartDropdown");
const cartItemsList = document.getElementById("cartItems");

function renderProducts() {
  const productContainer = document.getElementById("productContainer");
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const div = document.createElement("div");
    div.classList.add("product-box");
    div.innerHTML = `
                  <img src="${product.image}" alt="${product.name}" onclick="openDetailsPage(${product.id})">
                  <h3>${product.name}</h3>
                  <p>$${product.Price}</p>
                  <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
              `;
    productContainer.appendChild(div);
  });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const productIndex = cart.findIndex((item) => item.id === id);

  if (productIndex !== -1) {
    cart[productIndex].quantity += 1;
  } else {
    const product = products.find((p) => p.id === id);
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  cartCount.textContent = totalItems;
}
function toggleCartDropdown() {
  cartDropdown.style.display =
    cartDropdown.style.display === "block" ? "none" : "block";
  showCartItems();
}

function showCartItems() {
  let cart = JSON.parse(localStorage.getItem("cart") || []);
  cartItemsList.innerHTML = "";
  let totalPrice = 0;
  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.Price} X ${item.quantity} `;
    cartItemsList.appendChild(li);
    totalPrice += item.Price * item.quantity;
  });
  document.getElementById("cartTotal").textContent = totalPrice;
}

function openDetailsPage(id) {
  localStorage.setItem("selectedProduct", id);
  window.location.href = "details.html";
}

updateCartCount();
renderProducts();
