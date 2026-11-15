
/* ==================================
   JOHN WAINAINA PROFESSIONAL PORTFOLIO
   JavaScript functionality
================================== */


// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

  navMenu.classList.toggle("active");

  const isOpen = navMenu.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", isOpen);

});


// Close navigation when a link is clicked

document.querySelectorAll("#navMenu a").forEach(function (link) {

  link.addEventListener("click", function () {

    navMenu.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");

  });

});


// 2. AUTOMATIC FOOTER YEAR

document.getElementById("currentYear").textContent =
  new Date().getFullYear();


// 3. PROJECT FILTERING

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");


filterButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    // Remove active class from all buttons

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // Activate selected button

    button.classList.add("active");

    // Get selected category

    const selectedFilter = button.dataset.filter;

    // Filter project cards

    projectCards.forEach(function (card) {

      const projectCategory = card.dataset.category;

      if (
        selectedFilter === "all" ||
        selectedFilter === projectCategory
      ) {

        card.classList.remove("hidden");

      } else {

        card.classList.add("hidden");

      }

    });

  });

});


// 4. PROJECT BUTTONS

const projectButtons = document.querySelectorAll(
  ".project-card .project-action[data-project]"
);

const contactMessage = document.getElementById("contactMessage");

const subjectInput = document.getElementById("subject");


projectButtons.forEach(function (button) {

  button.addEventListener("click", function () {

    const projectName = button.dataset.project;

    subjectInput.value = "Enquiry about " + projectName;

    contactMessage.value =
      "Hello, I viewed your " + projectName +
      " project and would like to discuss a similar website.";

    document.getElementById("contact").scrollIntoView({
      behavior: "smooth"
    });

    setTimeout(function () {
      subjectInput.focus();
    }, 500);

  });

});


// 5. CONTACT FORM

const contactForm = document.getElementById("contactForm");

const formStatus = document.getElementById("formStatus");


// Email recipient

const recipient = "insightwebinar91@gmail.com";


contactForm.addEventListener("submit", function (event) {

  event.preventDefault();


  // Get form values

  const name = document.getElementById("name").value.trim();

  const email = document.getElementById("email").value.trim();

  const subject = document.getElementById("subject").value.trim();

  const message = document.getElementById("contactMessage").value.trim();


  // Check required fields

  if (!name || !email || !subject || !message) {

    formStatus.textContent =
      "Please complete all required fields.";

    return;

  }


  // Validate email

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {

    formStatus.textContent =
      "Please enter a valid email address.";

    return;

  }


  // Prepare email content

  const emailSubject = "Portfolio Enquiry: " + subject;


  const emailBody =
`Hello John,

You have received a new message through your professional portfolio website.

SENDER DETAILS

Name: ${name}

Email: ${email}

SUBJECT

${subject}

MESSAGE

${message}


This message was prepared through your portfolio contact form.`;


  // Create email link

  const mailtoLink =
    "mailto:" + recipient +
    "?subject=" + encodeURIComponent(emailSubject) +
    "&body=" + encodeURIComponent(emailBody);


  // Display message

  formStatus.textContent =
    "Opening your email application. Please review the message and press Send.";


  // Open visitor's email application

  window.location.href = mailtoLink;

});


// 6. SMOOTH SCROLLING

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

  link.addEventListener("click", function (event) {

    const targetId = link.getAttribute("href");

    if (targetId === "#") {
      return;
    }

    const targetElement = document.querySelector(targetId);

    if (targetElement) {

      event.preventDefault();

      targetElement.scrollIntoView({
        behavior: "smooth"
      });

    }

  });

});

