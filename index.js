const test = document.querySelector(".slide__testi");
const nameVal = document.querySelector(".name");
const jobVal = document.querySelector(".job");
const image = document.querySelector(".image");
const slidebtn = document.querySelectorAll(".slide-btn");

const testimonials = [
  {
    testimoni: `"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future"`,
    name: "Tanya Sinclair",
    job: "UX Engineer",
    pic: "https://raw.githubusercontent.com/driback/coding-bootcamp-testimonials-slider/main/images/image-tanya.jpg",
  },
  {
    testimoni: `"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer"`,
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    pic: "https://raw.githubusercontent.com/driback/coding-bootcamp-testimonials-slider/main/images/image-john.jpg",
  },
];

const [tanya, john] = testimonials;

const { testimoni: testa, name: nata, job: jota, pic: pita } = tanya;
const { testimoni: tejo, name: najo, job: jojo, pic: pijo } = john;

console.log(testa);
console.log(tejo);

const array1 = () => {
  test.innerText = testa;
  nameVal.innerText = nata;
  jobVal.innerText = jota;
  image.src = pita;
};

const array2 = () => {
  test.innerText = tejo;
  nameVal.innerText = najo;
  jobVal.innerText = jojo;
  image.src = pijo;
};

window.addEventListener("DOMContentLoaded", array1);

slidebtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.target;
    const left = target.classList.contains("slide__button--left");

    left ? array1() : array2();
  });
});
