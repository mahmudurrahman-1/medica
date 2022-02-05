const button_3 = document.querySelector(".settings-3");
const mobileBody =document.querySelector(".mobile-body");
const button_4 = document.querySelector(".settings-4");
const button_5 = document.querySelector(".settings-5");
const submitText=document.querySelector(".body-form"); 



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

  const inputs=[];
  submitText.addEventListener('submit',event=>{
      event.preventDefault();
     const submitInput=new FormData(event.target);
     const extractedValue= Object.fromEntries(submitInput.entries());
     const date = new Date();
    const optionsTime={
        minute:'numeric',
        hour:'numeric',
    }
    const optionsDate={
        day:'numeric',
        month:'long',
        year:'numeric',
    }
    const dateTimes=new Intl.DateTimeFormat('en-US',optionsTime).format(date);
    const dateDate=new Intl.DateTimeFormat('en-US',optionsDate).format(date);
     const dataText = {
         name:extractedValue.title,
         time:dateTimes,
         date: dateDate,
         description:extractedValue.textinput

     }
     inputs.push(dataText);
     
     localStorage.setItem('textarea',JSON.stringify(inputs,'\t',2));
  });

  const displayBodyFive = function () {
      const getJson=localStorage.getItem('textarea');
      const lists=JSON.parse(getJson);
      localStorage.setItem('five','5');

      mobileBody.innerHTML = '';
    lists.map((div,i)=>{
    const html = `
    <p class="body-paragraph-list">${div.name}</p>

    <div class="body-time-text">
        <div class="body-time">
            <p class="body-time-clock">${div.time}</p>
            <p class="body-time-date">${div.date}</p>

        </div>
        <div class="body-text">
            <p class="body-text-title">${div.description}</p>
            <button class="body-text-edit">edit</button>
        </div>

    </div>
   
    `;

    mobileBody.insertAdjacentHTML('afterbegin', html);

  });
    
  
  };
  button_5.addEventListener('click',e=>{
    e.preventDefault();
    displayBodyFive();
    console.log('clicked-3');
});

const displayBodyFour = function () {
    mobileBody.innerHTML = '';
    localStorage.setItem('five','6');

  
      const html = `
      <div class="mobile-body-main">
      <label for="textinput" class="body-input-Head">Enter your notes</label>
       <form class="body-form">
          <input name="title" type="text" class="body-input-title" placeholder="title here......." required />
          <textarea name="textinput" type="text" class="body-input" placeholder="Write here......." required></textarea>
         <button type="submit" id="output-button" class="body-button">Enter your text</button>
       </form>
       </div>
      `;
      mobileBody.insertAdjacentHTML('afterbegin', html);
  };
  button_4.addEventListener('click',e=>{
      e.preventDefault();
      displayBodyFour();
      console.log('clicked-4');
  });
