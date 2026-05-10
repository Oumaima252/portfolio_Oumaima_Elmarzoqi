// script.js

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// SCROLL BUTTON
const scrollBtn = document.getElementById("scrollBtn");

scrollBtn.addEventListener("click", () => {
  document.getElementById("projects").scrollIntoView({
    behavior:"smooth"
  });
});


// MODAL
const modal = document.getElementById("modal");
const detailsBtns = document.querySelectorAll(".detailsBtn");
const closeModal = document.getElementById("closeModal");

detailsBtns.forEach(button => {
  button.addEventListener("click", () => {
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if(e.target === modal){
    modal.style.display = "none";
  }
});


// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    formMessage.innerText = "Please fill all fields!";
    return;
  }

  formMessage.innerText = "Message sent successfully!";
  contactForm.reset();
});


// FETCH API
const loadPosts = document.getElementById("loadPosts");
const postsContainer = document.getElementById("postsContainer");
const loader = document.getElementById("loader");

loadPosts.addEventListener("click", async () => {

  postsContainer.innerHTML = "";
  loader.innerText = "Loading...";

  try{

    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=6"
    );

    const data = await response.json();

    loader.innerText = "";

    data.forEach(post => {

      const div = document.createElement("div");

      div.classList.add("post");

      div.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;

      postsContainer.appendChild(div);

    });

  }catch(error){

    loader.innerText = "Error loading posts.";

  }

});