class User{
  constructor(username, age, gender){
    this.username = username;
    this.age = age;
    this.gender = gender;
  }

  fullName(){
    const { username, age, gender} = this;
    return `My name is ${username}, I am ${age} years old. I am a ${gender}`
  }
}
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const username = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const genderRadioBtns = document.querySelectorAll("input[type='radio']");

  let gender;
  genderRadioBtns.forEach(btn => {
    if(btn.checked){
      gender = btn.value;
    }
  })
  const user1 = new User(username, age, gender);
  alert(user1.fullName());
})