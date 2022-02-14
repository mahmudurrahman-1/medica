const mobileHeader = document.querySelector(".mobile-header");

const userFunc = function () {
  const User = localStorage.getItem("myInfo");
  const UserJs = JSON.parse(User);
  mobileHeader.innerHTML = "";

  const html = `
   <p class="h1">${UserJs[0].Name}</p>
    <button class="mobile__top-button">...</button>
  `;
  mobileHeader.insertAdjacentHTML("beforeend", html);
};

window.addEventListener("load", userFunc());

const bodyform = document.querySelector(".body-form");
bodyform.addEventListener("submit", (e) => {
  e.preventDefault();
});
const mobileBody = document.querySelector(".div-3");
const button_5 = document.querySelector(".settings-5");

const valueSubmit = document.getElementById("output-button");
const valueTitle = document.querySelector(".body-input-title");
const valueDescription = document.querySelector(".body-input");

const todoData = [];
const todoAPp = function () {
  const date = new Date();
  const optionsTime = {
    minute: "numeric",
    hour: "numeric",
  };
  const optionsDate = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const dateTimes = new Intl.DateTimeFormat("en-US", optionsTime).format(date);
  const dateDate = new Intl.DateTimeFormat("en-US", optionsDate).format(date);
  const dataText = {
    name: valueTitle.value,
    time: dateTimes,
    date: dateDate,
    description: valueDescription.value,
  };
  todoData.push(dataText);
  console.log(todoData);
  //   valueTitle.value = valueDescription = "";
  //   valueDescription.blur();
  localStorage.setItem("TodoData", JSON.stringify(todoData, "\t"));
};

/******Button -5 */

const validEnter = (e) => {
  if (valueTitle.value.length > 5 && valueDescription.value.length > 5) {
    return (valueSubmit.disabled = false);
  } else {
    return (valueSubmit.disabled = true);
  }
};

const displayBodyFive = function () {
  const getJson = localStorage.getItem("TodoData");
  const lists = JSON.parse(getJson);

  mobileBody.innerHTML = "";
  lists.map((div) => {
    const html = `
   <div class="media">
  <div class="h3 media-body mr-5">
    <h5 class="h1 mt-0 mb-1">${div.time}</h5>
   ${div.date}
  </div>

 <div class="media-body">
    <p class="h2 font-weight-bold text-break mt-0 mb-1">${div.name}</p>
       <p class="h2 font-weight-normal text-break mt-0 mb-1">${div.description}</p>


  </div>

</div>
    `;

    mobileBody.insertAdjacentHTML("afterbegin", html);
  });
};
button_5.addEventListener("click", (e) => {
  currentSlide(3);
  displayBodyFive();
});

/**********************slider */
/*make firstone visible */
let number = 1;
showSlides(number);

function currentSlide(n) {
  number = n;
  return showSlides(number);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("div");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    /* make all slides display none */
  }
  slides[n - 1].style.display = "block";
  /*make the clicked one display */
}
