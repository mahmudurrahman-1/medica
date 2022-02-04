const button_3 = document.querySelector(".settings-3");
const mobileBody =document.querySelector(".mobile-body");
const button_4 = document.querySelector(".settings-4");
const button_5 = document.querySelector(".settings-5");
 

const displayBodyThree = function () {
    mobileBody.innerHTML = '';
  
      const html = `
      <p class="body-paragraph-2 ">Lorem ipsum Dolor</p>

      <div class="mobile-body-briefCase">
          <svg class="body-briefCase">
              <use xlink:href="icons/sprite.svg#icon-aid-kit"></use>
          </svg>
      </div>
      <button class="body-button">Lorem</button>
      <p class="body-paragraph-1">Lorem ipsum dolor. deleniti quas distinctio!</p>
      <p class="body-paragraph-2">lorem ipsum</p>
      `;
  
      mobileBody.insertAdjacentHTML('afterbegin', html);
  
  };
  button_3.addEventListener('click',e=>{
      e.preventDefault();
      displayBodyThree();
      console.log('clicked-3');
  });

  const displayBodyFive = function () {
    mobileBody.innerHTML = '';
  
      const html = `
      <p class="body-paragraph-list">Lorem ipsum Dolor</p>

      <div class="body-time-text">
          <div class="body-time">
              <p class="body-time-clock">8:45pm</p>
              <p class="body-time-date">29 auguest, 2020</p>

          </div>
          <div class="body-text">
              <p class="body-text-title">lorem impsum dolor</p>
              <button class="body-text-edit">edit</button>
          </div>

      </div>
      <div class="body-time-text">
          <div class="body-time">
              <p class="body-time-clock">8:45pm</p>
              <p class="body-time-date">29 auguest, 2020</p>

          </div>
          <div class="body-text">
              <p class="body-text-title">lorem impsum dolor</p>
              <button class="body-text-edit">edit</button>
          </div>

      </div>
      `;
  
      mobileBody.insertAdjacentHTML('afterbegin', html);
  
  };
  button_5.addEventListener('click',e=>{
    e.preventDefault();
    displayBodyFive();
    console.log('clicked-3');
});