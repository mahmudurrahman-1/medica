const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};

/********* */
const signUpName = document.getElementById("signupName");
const signUpEmail = document.getElementById("signupEmail");
const signUpPassword = document.getElementById("signupPassword");
const signUprePassword = document.getElementById("signuprePassword");

//---------------
const password = document.querySelector(".re-pass").value;
const password1 = document.querySelector(".re-passc").value;

/************* */
const labelFormSignUp = document.querySelector(".form__signup");
const Datas = [];
labelFormSignUp.addEventListener("submit", (event) => {
  event.preventDefault();
  const information = new FormData(event.target);
  const dataExtracted = Object.fromEntries(information.entries());
  let data = {
    Name: dataExtracted.name,
    Email: dataExtracted.email,
    Password: dataExtracted.password,
    Repassword: dataExtracted.passwordConfirm,
    Id: Math.trunc(Math.random() * 10 + 1),
  };
  Datas.push(data);
  signUpName.value =
    signUpEmail.value =
    signUpPassword.value =
    signUprePassword.value =
      "";
  signUprePassword.blur();
  localStorage.setItem("myInfo", JSON.stringify(Datas, "\t", 2));

  alert("registration successfull");
});
// const output= localStorage.getItem("myInfo");
// /* json to js object */

// const Profile =JSON.parse(output);
// console.log(Profile);
/********************Login in user */
const enterEmail = document.querySelector(".login-Email");
const enterPassword = document.querySelector(".login-Password");
const loginSubmit = document.getElementById("submit-to-login");
const enterEmailId = document.getElementById(".login-Email");
const enterPasswordId = document.getElementById(".login-Password");

// validate login button

const validateLogin = (e) => {
  console.log(e.value);

  if (enterEmail.value.includes("@") && enterPassword.value.trim().length > 4) {
    return (loginSubmit.disabled = false);
  } else {
    return (loginSubmit.disabled = true);
  }
};

// start login successfully
loginSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  const output = localStorage.getItem("myInfo");
  /* json to js object */
  const Profile = JSON.parse(output);
  Profile.map((information) => {
    if (
      enterEmail.value === information.Email &&
      enterPassword.value === information.Password
    ) {
      alert("login successfull");
      window.location.replace("./assets/UI/upload.html");
      localStorage.setItem("profile", Math.random() < 10);
    } else {
      alert("login failed");
    }
  });
});

const UI = localStorage.getItem("ui");
if (UI === "1") {
}

//login form
// loginForm.addEventListener("submit",event=>{
//     event.preventDefault();
// //console.log('submitted');
//     const data = new FormData(event.target);
//     const dataOutput=Object.fromEntries(data.entries());
//     console.log(dataOutput.enterEmail,dataOutput.enterPassword);
//         //apply map to array

// });

// const convertExtractedData = '\n' + JSON.stringify(dataExtracted, '\t1', 3);
//     var finalData = JSON.parse(convertExtractedData);
// const {email:mail}= finalData;
// const {password:password2}=finalData;
// const {password:password3}=finalData;
// console.log(mail,password3,password2);

const RegistrationPass1 = document.querySelector(".re-pass");
const RegistrationPass2 = document.querySelector(".re-passc");
const signupSubmit = document.getElementById("submit-to-signup");

const checkPass = (e) => {
  console.log(e.value);
  if (RegistrationPass1.value === RegistrationPass2.value) {
    return (signupSubmit.disabled = false);
  } else {
    return (signupSubmit.disabled = true);
  }
};
// const bluring=()=>{
//     signUpEmail.value="";
//     signUpPassword.value="";
//     signUprePassword.value="";
// };

/**********button2,3,4,5 */
