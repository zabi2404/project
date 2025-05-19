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



// GENERATING CARDS DYNAMICALLY
const cardData = [
  {
    img: "./images/icons/LEDGER-CARD/Frame 1261153021.png",
    date: "20/01/2025",
    heading: "Cracking the Crypto Code",
    description: "A deep dive into blockchain trading stratgies and trends",
    link: "./blog2.html",
  },
  {
    img: "./images/icons/LEDGER-CARD//Frame 1261153021 (1).png",
    date: "20/01/2025",
    heading: "Cracking the Crypto Code",
    description: "A deep dive into blockchain trading stratgies and trends",
    link: "./blog2.html",
  },
  {
    img: "./images/icons/LEDGER-CARD//Frame 1261153021 (2).png",
    date: "20/01/2025",
    heading: "Cracking the Crypto Code",
    description: "A deep dive into blockchain trading stratgies and trends",
    link: "./blog2.html",
  },
  {
    img: "./images/icons/LEDGER-CARD//Frame 1261153021 (3).png",
    date: "20/01/2025",
    heading: "Cracking the Crypto Code",
    description: "A deep dive into blockchain trading stratgies and trends",
    link: "./blog2.html",
  },
  {
    img: "./images/icons/LEDGER-CARD//Frame 1261153021 (4).png",
    date: "20/01/2025",
    heading: "Cracking the Crypto Code",
    description: "A deep dive into blockchain trading stratgies and trends",
    link: "./blog2.html",
  },
  {
    img: "./images/icons/LEDGER-CARD//Frame 1261153021 (2).png",
    date: "20/01/2025",
    heading: "Cracking the Crypto Code",
    description: "A deep dive into blockchain trading stratgies and trends",
    link: "./blog2.html",
  },
  {
    img: "./images/icons/LEDGER-CARD//Frame 1261153021 (3).png",
    date: "20/01/2025",
    heading: "Cracking the Crypto Code",
    description: "A deep dive into blockchain trading stratgies and trends",
    link: "./blog2.html",
  },
  {
    img: "./images/icons/LEDGER-CARD//Frame 1261153021 (4).png",
    date: "20/01/2025",
    heading: "Cracking the Crypto Code",
    description: "A deep dive into blockchain trading stratgies and trends",
    link: "./blog2.html",
  },
  {
    img: "./images/icons/LEDGER-CARD//Frame 1261153021 (1).png",
    date: "20/01/2025",
    heading: "Cracking the Crypto Code",
    description: "A deep dive into blockchain trading stratgies and trends",
    link: "./blog2.html",
  },
];

const currentPage = window.location.pathname;
let container = document.getElementById("ledger-container");
if(container){
let loadbutton = document.getElementById("loadmore");


const batchSizeMap = {
  "/blog.html": 6,
  "/index.html": 5,
  "/blog2.html": 3,
};

let batchsize = 0;
batchsize = batchSizeMap[currentPage] || 0;
console.log(currentPage + batchsize)

let index = 0;



function createCard(data) {
  
  const card = document.createElement("div");

   if (batchsize === 3) {
     card.className = "LedgerCard ";
     
   } else if (batchsize === 6) {
     card.className = "LedgerCard blogledgercard";
   } else {
     card.className = "LedgerCard";
   }
  card.innerHTML = `
      
       
            <div>
              <img src="${data.img}" height="50%" width="50%" alt="" />
            </div>
            <div class="LC-section">
              <div class="GradientWrapper">
                <div class="GradientL GL1"></div>
    
                <div class="GradientL GL3"></div>
                <div class="GradientL GL4"></div>
              </div>
              <p>${data.date}</p>
              <h4>${data.heading}</h4>
              <p>${data.description}</p>
              <div>
                <a href="${data.link}" >Read Blog <img src="./images/icons/LEDGER-CARD/Frame.svg" alt=""></a>
              </div>
            </div>
          
      
      
      `;
  return card;
}


  function loadCard() {
    const nextiterate = cardData.slice(index, index + batchsize);
    nextiterate.forEach((data) => {
      container.insertBefore(createCard(data), container.firstChild);

    });
    index += batchsize;
  
    if (index >= cardData.length) {
      loadbutton.style.display = "none";
    }
  }
  
  if(currentPage=='/blog.html'){
loadbutton.addEventListener("click", (e)=>{
    e.preventDefault();
    loadCard();
});
  }
  
loadCard();
}







