// Get modal and close button
const modal = document.getElementById("popupModal");
const closeModal = document.getElementById("closeModal");
const modalBody = document.getElementById("modalBody");

// Get all nav links
const navLinks = document.querySelectorAll(".nav-link");

//Content for each section 
const modalContent = {
    Home:`
     <h2>Welcome to My Portfolio</h2>
    <p>Hi! I’m Naitik Sharma, a passionate web developer in the making. 
    This website showcases my skills, projects, and the services I offer. 
    Scroll around and get to know me better!</p>
    `,
    About: `
    <h2>About Me</h2>
    <p>I’m a self-taught web developer with expertise in HTML, CSS, and JavaScript, 
    currently learning advanced frameworks like React and Tailwind CSS. 
    I aim to build interactive, visually appealing, and functional websites for individuals and businesses.</p>
    `,
    Services:`
    <h2>My Services</h2>
    <ul>
        <li>Custom Website Design & Development</li>
        <li>Front-end Development with HTML, CSS, JavaScript</li>
        <li>Basic SEO Setup</li>
        <li>Website Redesign & Optimization</li>
    </ul>
    `,
    Projects: `
    <h2>My Projects</h2>
    <p>Here are some projects I've worked on:</p>
    <ul>
        <li><strong>SS Collection</strong> – An upcoming e-commerce store for clothing.</li>
        <li><strong>Portfolio Website</strong> – Showcasing my skills and services.</li>
        <li>Interactive Form with validation</li>
        <li><strong>HTML/CSS Projects</strong> – Small UI design demos and layouts.</li>
    </ul>
    `,
    Contact:`
    <h2>Contact Me</>
    <p>Email: <a href="mailto:naitikbkn@gmail.com">naitikbkn@gmail.com</a></p>
    <p>Phone: +91 9024505301</p>
    `
};

// Show modal when nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page reload
    const section = link.getAttribute("data-section");
    modalBody.innerHTML = modalContent[section] || `<p>Content not available.</p>` ;
    modal.style.display = "block";
  });
});

// Close modal when "x" is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
