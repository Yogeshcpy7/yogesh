document.addEventListener("DOMContentLoaded", function () {
  const dropdownLinks = document.querySelectorAll(".dropdown-menu a");
  const content = document.getElementById("content");
  const serviceBtn = document.getElementById("service");
  const homeBtn = document.getElementById("home");
  const aboutBtn = document.getElementById("about");
  const contactBtn = document.getElementById("contact");
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  // Image gallery content
  const galleryImages = {
      civil: [
        
          "skybuilding/civil1.jpeg",
          "skybuilding/civil2.jpeg",
          "skybuilding/civil3.jpeg",
          "skybuilding/c1.jpeg",
          "skybuilding/c2.jpeg",
          "skybuilding/c3.jpeg",
          "skybuilding/c4.jpeg",
          "skybuilding/c5.jpeg",
         
      ],
      peb: [
        "skybuilding/peb/peb1.jpeg",
        "skybuilding/peb/peb2.jpeg",
        "skybuilding/peb/peb3.jpeg",
        "skybuilding/peb/peb4.jpeg",
        "skybuilding/peb/peb5.jpeg",
        "image1.jpg",
        "skybuilding/peb/peb1.jpeg",
        "image3.jpg"
      ],
      steel: [
        "skybuilding/steelbuilding/1.jpeg",
        "skybuilding/steelbuilding/2.jpeg",
        "skybuilding/steelbuilding/3.jpeg",
        "skybuilding/steelbuilding/4.jpeg",
        "skybuilding/steelbuilding/5.jpeg",
        "skybuilding/steelbuilding/6.jpeg",
        "skybuilding/steelbuilding/7.jpeg",
        "skybuilding/steelbuilding/1.jpeg",
        "skybuilding/steelbuilding/2.jpeg",
        "skybuilding/steelbuilding/3.jpeg",
       
      ],
      tensile: [
          "skybuilding/tensile/t1.jpeg",
          "skybuilding/tensile/t2.jpeg",
          "skybuilding/tensile/t3.jpeg",
          "skybuilding/tensile/t4.jpeg",
          "skybuilding/tensile/t5.jpeg",
          "skybuilding/tensile/t6.jpeg",
          "skybuilding/tensile/t7.jpeg",
          "skybuilding/tensile/t3.jpeg",
          "skybuilding/tensile/tensile3.jpeg",
          "skybuilding/tensile/tensile4.jpeg",
      ],
      skylight: [
        "skybuilding/skylights/sky1.jpeg",
        "skybuilding/skylights/sky2.jpeg",
        "skybuilding/skylights/sky3.jpeg",
        "skybuilding/skylights/sky4.jpeg",
        "skybuilding/skylights/s1.jpeg",
        "skybuilding/skylights/s2.jpeg",
        "skybuilding/skylights/s3.jpeg",
        "skybuilding/skylights/s4.jpeg",
        "skybuilding/skylights/s5.jpeg",
      ],
      architecture: [
        "skybuilding/architecture/a1.jpeg",
        "skybuilding/architecture/a2.jpeg",
        "skybuilding/architecture/a4.jpeg",
        "skybuilding/architecture/a3.jpeg",
        "skybuilding/architecture/a5.jpeg",
        "skybuilding/architecture/a6.jpeg",
        "skybuilding/architecture/a4.jpeg",
        "skybuilding/architecture/a1.jpeg"
      ],
  };

  // Function to update gallery content
  function updateGallery(section) {
      const imagesHTML = galleryImages[section]
          .map(img => `<div class="gallery-item"><img src="${img}" alt="${section} image"></div>`)
          .join("");
      content.innerHTML = `<h1>${section.charAt(0).toUpperCase() + section.slice(1)} Gallery</h1>
                           <div class="gallery">${imagesHTML}</div>`;
      closeDropdown();
  }

  // Function to update page content
  function updateContent(title, description) {
      content.innerHTML = `<h1>${title}</h1><p>${description}</p>`;
      closeDropdown();
  }

  // Attach event listeners to dropdown items
  dropdownLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const section = this.getAttribute("data-section");
          updateGallery(section);
      });
  });

  // Attach event listeners to navbar links
  homeBtn.addEventListener("click", () => updateContent(`<style>
  /* Basic Styles */
  body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 20px;
      text-align: center;
      background-color: #f8f8f8;
  }

  h1 {
      margin-bottom: 20px;
  }

  /* Card Container */
  .card-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      max-width: 1200px;
      margin: auto;
  }

  /* Card Design */
  .card {
      background: white;
      width: 300px;
      border-radius: 10px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      text-align: left;
      transition: transform 0.3s ease-in-out;
  }

  .card:hover {
      transform: translateY(-5px);
  }

  /* Card Image */
  .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
  }

  /* Card Content */
  .card-content {
      padding: 15px;
  }

  .card-content h3 {
      margin: 0;
      font-size: 20px;
      color: #333;
  }

  .card-content p {
      font-size: 14px;
      color: #666;
      margin: 10px 0;
  }

  /* Button */
  .btn {
      display: inline-block;
      padding: 8px 15px;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      font-size: 14px;
      transition: background 0.3s;
  }

  .btn:hover {
      background: #0056b3;
  }

  /* Responsive */
  @media (max-width: 768px) {
      .card {
          width: 90%;
      }
  }
</style>
</head>
<body>

<h3>Reliable | Efficeint | Innovative construction Services </h3>

<div class="card-container">
  <!-- Card 1 -->
  <div class="card">
      <img src="image1.jpg" alt="Service 1">
      <div class="card-content">
          <h3>PEB</h3>
          <p>Pre-Engineered Buildings (PEBs) are factory-made steel structures
          that are fabricated off-site and assembled on-site.</p>
          <a href="preEngineering.html" target="_self" class="btn">More</a>
      </div>
  </div>

  <!-- Card 2 -->
  <div class="card">
      <img src="skybuilding/peb/peb1.jpeg" alt="Service 2">
      <div class="card-content">
          <h3>WareHouse</h3>
          <p>Advanced engineering solutions for large projects.</p>
          <a href="warehouse.html" class="btn">More</a>
      </div>
  </div>

  <!-- Card 3 -->
  <div class="card">
      <img src="skybuilding/architecture/a2.jpeg" alt="Service 3">
      <div class="card-content">
          <h3>Architecture</h3>
          <p>Innovative Architectural Designs for Modern Infrastructure.</p>
          <a href="architecture.html" class="btn">More</a>
      </div>
      
  </div>
  <div class="card">
  <img src="skybuilding/tensile/t6.jpeg" alt="Service 1">
  <div class="card-content">
      <h3>Tensile</h3>
      <p>Tensile stength timeless structures</p>
      <a href="tensile.html" class="btn">More</a>
  </div>
</div>

<!-- Card 2 -->
<div class="card">
  <img src="skybuilding/skylights/s3.jpeg" alt="Service 2">
  <div class="card-content">
      <h3>Skybuilding</h3>
      <p>Elevation dreams, one floor at a time.</p>
      <a href="skybuilding.html" class="btn">More</a>
  </div>
</div>
</div>
</body>
</html>`,""));
  serviceBtn.addEventListener("click", () => updateContent(`  <section id="services" class="content">
  <h2>Our Services</h2>
  <p>We offer a variety of services to help you succeed.</p>
  <div class="service-carousel">
    <span class="arrow" id="prev">&#8249;</span>
    <div class="carousel-wrapper" id="carouselWrapper">
      <div class="card">
        <h3>Pre-Engineering Buildings</h3>
        <p>
          Customized and efficient building solutions designed off-site and
          assembled on location, offering cost-effective and durable
          structures.
        </p>
      </div>
      <div class="card">
        <h3>Composite Steel Buildings</h3>
        <p>
          Structures that combine steel and concrete materials, ensuring
          enhanced strength, flexibility, and cost-efficiency for modern
          construction.
        </p>
      </div>
      <div class="card">
        <h3>Skywalks</h3>
        <p>
          Elevated pedestrian walkways connecting buildings or providing
          safe passage over roads, designed with safety and aesthetics in
          mind.
        </p>
      </div>
      <div class="card">
        <h3>Warehouses</h3>
        <p>
          Highly functional and spacious storage buildings catering to
          industrial and commercial needs with durable construction
          materials.
        </p>
      </div>
      <div class="card">
        <h3>Membrane Tensile Structures</h3>
        <p>
          Innovative, lightweight structures using high-strength membrane
          material, ideal for roofing in open spaces like stadiums and
          auditoriums.
        </p>
      </div>
      <div class="card">
        <h3>Industrial Layout Development</h3>
        <p>
          Comprehensive planning and development of industrial spaces,
          optimizing land use, utility setup, and accessibility for
          businesses.
        </p>
      </div>
      <div class="card">
        <h3>Conventional Halls</h3>
        <p>
          Spacious halls designed for events, conferences, and social
          gatherings, equipped with modern amenities and efficient layouts.
        </p>
      </div>
      <div class="card">
        <h3>Food Courts</h3>
        <p>
          Design and construction of multi-cuisine dining areas that focus
          on accessibility, comfort, and hygiene for visitors.
        </p>
      </div>
      <div class="card">
        <h3>Amphitheaters</h3>
        <p>
          Open-air venues designed for performances and gatherings,
          featuring excellent acoustics and an audience-friendly layout.
        </p>
      </div>
      <div class="card">
        <h3>Auditoriums</h3>
        <p>
          Indoor venues designed for speeches, performances, and large
          gatherings, ensuring optimal sound and seating arrangements.
        </p>
      </div>
      <div class="card">
        <h3>Farmhouses</h3>
        <p>
          Residential properties in rural or semi-rural areas designed with
          comfort and luxury for leisure or agricultural purposes.
        </p>
      </div>
      <div class="card">
        <h3>Civil Works</h3>
        <p>
          Comprehensive construction services, including roads, bridges, and
          public infrastructure, ensuring durability and quality.
        </p>
      </div>
    </div>
    <span class="arrow" id="next">&#8250;</span>
  </div>
</section>`,""));
  aboutBtn.addEventListener("click", () => updateContent(`<section id="about" class="content">
  <h2>About Us</h2>
  <p>
    At <strong>DeepaFabTech</strong>, we specialize in providing innovative
    and high-quality solutions in the construction and engineering
    industries. With years of experience, we are a trusted name in:
  </p>

  <ul class="about-list">
    <li>
      <strong>Steel Buildings:</strong> Durable and cost-effective steel
      structures tailored to meet diverse industrial and commercial needs.
    </li>
    <li>
      <strong>Fabrication:</strong> Precision metal fabrication services for
      various applications, ensuring strength and reliability.
    </li>
    <li>
      <strong>Civil Engineering:</strong> Comprehensive civil engineering
      solutions, from planning to execution, designed to exceed
      expectations.
    </li>
    <li>
      <strong>Pre-Engineering Buildings (PEB):</strong> Cutting-edge
      pre-engineered building solutions that are efficient, flexible, and
      sustainable.
    </li>
    <li>
      <strong>Tensile Structures:</strong> Aesthetic and functional tensile
      structures perfect for canopies, stadiums, and architectural
      highlights.
    </li>
    <li>
      <strong>Architectural Designs:</strong> Innovative designs blending
      functionality and elegance, tailored to client requirements.
    </li>
    <li>
      <strong>Skylights:</strong> Energy-efficient skylight installations
      that enhance natural lighting and aesthetic appeal.
    </li>
  </ul>

  <p>
    Our team of experts is committed to delivering exceptional service and
    superior quality, ensuring that every project is a testament to our
    expertise and passion for excellence.
  </p>
</section>`,""));
  contactBtn.addEventListener("click", () => updateContent(`  <div class="contact-container">
  <section class="contact-section">
      <h2>Contact Us</h2>
      <div class="contact-info">
          <p><strong>Address:</strong> #102/1 Karihobanahalli, Andhralli Main Road, Nagasandra Post, Bangalore – 560073</p>
          <p><strong>Phone:</strong> +91 9980800925</p>
          <p><strong>Email:</strong> contact@deepafabtech.com</p>
      </div>
      <div class="business-hours">
          <h3>Business Hours</h3>
          <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
      </div>
  </section>
  
  <section class="contact-form">
      <h2>Send Us a Message</h2>
      <form>
          <input type="text" name="name" placeholder="Your Name" required>
          <input type="email" name="email" placeholder="Your Email" required>
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Submit</button>
      </form>
  </section>
  
  <div class="map-container">
      <h2>Find Us on Google Maps</h2>
      <iframe src="https://www.google.com/maps/place/Deepa+Fabtech/@13.014025,77.4803607,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae3d001655a4e7:0x9deb782bf5ea84ee!8m2!3d13.0140198!4d77.4829356!16s%2Fg%2F11ybzjdxjk?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D" allowfullscreen></iframe>
  </div>
</div>`,""));

  // Function to close the dropdown menu
  function closeDropdown() {
      navList.classList.remove("show");
  }

  // Mobile menu toggle
  menuToggle.addEventListener("click", function () {
      navList.classList.toggle("show");
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
      if (!event.target.closest(".navbar")) {
          navList.classList.remove("show");
      }
  });
});

// service slide
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

// Function to show the active slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(-${index * 100}%)`; // Moves the slide horizontally
    dots[i].classList.remove('active'); // Remove active class from all dots
  });
  dots[index].classList.add('active'); // Add active class to the current dot
}

// Automatically go to the next slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide when at the last one
  showSlide(currentIndex);
}

// Event Listener for the dots
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index; // Set currentIndex to the dot's index
    showSlide(currentIndex);
  });
});

// Start the carousel auto-sliding
setInterval(nextSlide, 3000); // Change slide every 3 seconds


//services page 
const carouselWrapper = document.getElementById('carouselWrapper');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
let currentSlide = 0;

function updateCarousel() {
    const cardWidth = document.querySelector('.card').offsetWidth;
    const offset = -currentSlide * cardWidth;
    carouselWrapper.style.transform = `translateX(${offset}px)`;
}

prev.addEventListener('click', () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1;
    updateCarousel();
});

next.addEventListener('click', () => {
    currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    updateCarousel();
});

const totalSlides = document.querySelectorAll('.card').length;
window.addEventListener('resize', updateCarousel);
updateCarousel();
//gallery 
document.addEventListener("DOMContentLoaded", function () {
  const dropdownLinks = document.querySelectorAll(".dropdown-menu a");
  const content = document.getElementById("content");

  // Content for each section
  const sections = {
      civil: "<h1>Civil Segment</h1><p>Information about Civil Segment...</p>",
      peb: "<h1>PEB</h1><p>Information about Pre-Engineered Buildings...</p>",
      steel: "<h1>Steel Building</h1><p>Details about Steel Buildings...</p>",
      tensile: "<h1>Tensile</h1><p>Details about Tensile structures...</p>",
      skylight: "<h1>Skylight</h1><p>Information about Skylight installations...</p>",
  };

  // Click event for dropdown items
  dropdownLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault(); // Prevent page reload
          const section = this.getAttribute("data-section1");
          content.innerHTML = sections[section] || "<h1>Welcome</h1><p>Select a category.</p>";
      });
  });
});




