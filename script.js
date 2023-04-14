let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

// Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};

// JavaScript code for sending email from contact form

document.getElementById("contact-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting
  
  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  
  // Construct email body
  var body = "Name: " + name + "%0A";
  body += "Email: " + email + "%0A";
  body += "Message: " + message;
  
  // Open default email client with pre-filled email fields
  window.location.href = "mailto:you@example.com?subject=Contact%20Form%20Submission&body=" + body;
});
                               