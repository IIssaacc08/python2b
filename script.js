window.addEventListener("scroll", () => {

let winScroll =
document.body.scrollTop ||
document.documentElement.scrollTop;

let height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight;

let scrolled =
(winScroll / height) * 100;

document.getElementById("progress-bar")
.style.width = scrolled + "%";

});

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

question.addEventListener("click", () => {

const answer =
question.nextElementSibling;

answer.style.display =
answer.style.display === "block"
? "none"
: "block";

});

});

let current = 0;

const slides =
document.querySelectorAll(".slide");

setInterval(() => {

slides[current].classList.remove("active");

current = (current + 1) % slides.length;

slides[current].classList.add("active");

},3000);