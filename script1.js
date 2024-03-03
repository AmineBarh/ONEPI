const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const nextBtnFourth = document.querySelector(".next-3");
const prevBtnFifth = document.querySelector(".prev-4");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;


function part1Check()
{
  if (document.form.firstName.value == "")
  {
      showAlert("Please add your first name.","error");
      return false;
  }
if (!/^[a-zA-Z][a-zA-Z0-9_]+$/.test(document.form.firstName.value)) {
      showAlert(" Invalid first name ", "error");
      return false; 
}
  if (document.form.lastName.value == "")
  {
      showAlert("Please add your last name.","error");
      return false;
  }
  if (!/^[a-zA-Z][a-zA-Z0-9_]+$/.test(document.form.lastName.value)) {
    showAlert(" Invalid last name ", "error");
    return false; 
}
  if (document.form.studID.value == "")
  {
      showAlert("Please add your student ID.","error");
      return false;
  }
  if(document.form.studID.value.length !=8){
    showAlert(" StudentID contains 8 caracters ", "error");
    return false; 
  }
  if (!/^[a-zA-Z0-9]/.test(document.form.studID.value)) {
    showAlert(" StudentID contains letters and digits only ", "error");
    return false; 
}
  showAlert("","reset");
  return true;
}

function part2Check()
{
  if (document.form.email.value == "")
  {
      showAlert("Please add your email address.","error");
      return false;
  }
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(document.form.email.value)) {
    showAlert(" Email adress is invalid ", "error");
    return false; 
}
  if (document.form.phone.value == "")
  {
      showAlert("Please add your phone number.","error");
      return false;
  }
  if(document.form.phone.value.length !=8){
    showAlert(" Phone number is invalid ", "error");
    return false;
  }
  showAlert("","reset");
  return true;
}

function part3Check()
{
  const today = new Date();
  const inputDate = new Date(document.form.dateBirth.value)
  if (document.form.dateBirth.value == "")
  {
      showAlert("Please add your date of birth.","error");
      return false;
  }
  if (inputDate > today)
  {
      showAlert("Birth date is not valid.","error");
      return false;
  }
  if (document.form.gender.value == "")
  {
      showAlert("Please select your gender.","error");
      return false;
  }
  showAlert("","reset");
  return true;
}

function part4Check()
{
  if (document.form.username.value == "")
  {
      showAlert("Please add your username.");
      return false;
  }
  if (document.form.password.value.length < 8)
  {
      showAlert("Password is not strong enough","error");
      return false;
  }
  if (!/(?=.*\d)(?=.*[a-zA-Z])/.test(document.form.password.value))
  {
      showAlert("Password must contain at least a digit and a letter ","error");
      return false;
  }
  showAlert("","reset");
  return true;
}

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  if (part1Check())
  {
    slidePage.style.marginLeft = "-25%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  if (part2Check())
  {
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  if (part3Check())
  {
    slidePage.style.marginLeft = "-75%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});
nextBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  if (part4Check())
  {
    slidePage.style.marginLeft = "-100%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
});
submitBtn.addEventListener("click", function(){
  if (part5Check())
  {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    setTimeout(function(){
      alert("Your Form Successfully Signed up");
      location.reload();
    },800);
  }
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "40px";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFifth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
//custom alert
function showAlert(message, type = "info") {
  const alertContainer = document.getElementById("alert-container");
  const alertMessage = document.getElementById("alert-message");
  const alert = document.getElementById("alert");
  const closeButton = document.getElementById("alert-close");
  alertMessage.textContent = message;

  if (type === "success") {
    alert.classList.add("success");
  } else if (type === "error") {
    alert.classList.add("error");
    closeButton.style.display = "block";
  } else if(type=="reset"){
    alert.classList.remove("success", "error");
    closeButton.style.display = "none";
  } 

  alertContainer.style.display = "block";

  
  closeButton.addEventListener("click", function() {
    alertContainer.style.display = "none";
  });
}
