let buttonDiv = document.getElementsByClassName("Coin-Table-nav")[0];


if(buttonDiv){
  let button = buttonDiv.getElementsByClassName("btn");
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
      console.log(button[i]);
      for (let i = 0; i < button.length; i++) {
        button[i].classList.remove("active");
      }
      button[i].classList.add("active");
    });
  }
}


let profileIcon = document.getElementById("PF-icon");
let modal = document.getElementById("myModal");
let close = document.getElementById("closeM");

profileIcon.addEventListener("click", ()=>{
modal.style.display="block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target==modal) {
    modal.style.display = "none";
  }
  
});


// let input = document.getElementsByTagName("input");
// for (let i = 0; i <= 2; i++) {
//   input[i].addEventListener("click", () => {

//     console.log(input[i]);
//     for (let j = 0; j <=2; j++) {
//       input[j].classList.remove("activeinput");
//     }
//     input[i].classList.add("activeinput");
//   });
// }

// window.addEventListener("click", () => {
//   for (let j = 0; j <= input.length; j++) {
//     input[j].classList.remove("activeinput");
//   }
// });

