

// COIN TABLE BUTTONS
let buttonDiv = document.getElementsByClassName("Coin-Table-nav")[0];

if (buttonDiv) {
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

profileIcon.addEventListener("click", () => {
  modal.style.display = "block";
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }

});






// GENERATING CARDS DYNAMICALLY
const cardData = [{
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
if (container) {
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

  if (currentPage == '/blog.html') {
    loadbutton.addEventListener("click", (e) => {
      e.preventDefault();
      loadCard();
    });
  }

  loadCard();
}


// TRADING PAGE BUTTONS

const Buysell = document.getElementById("buy-sell-buttonID");
if (Buysell) {
  const BSButton = Buysell.getElementsByTagName("button");

  for (let i = 0; i < BSButton.length; i++)
    BSButton[i].addEventListener("click", () => {
      for (let j = 0; j < BSButton.length; j++) {
        BSButton[j].classList.remove("buy-sell-button-active")
      }
      BSButton[i].classList.add("buy-sell-button-active")

    })
}


const marketLimitButton = document.getElementById("limit-market-buttonID");
if (marketLimitButton) {
  const MLButton = marketLimitButton.getElementsByTagName("button");

  for (let i = 0; i < MLButton.length; i++)
    MLButton[i].addEventListener("click", () => {
      for (let j = 0; j < MLButton.length; j++) {
        MLButton[j].classList.remove("limit-market-button-active")
      }
      MLButton[i].classList.add("limit-market-button-active")

    })
}


const tradeHistoryButton = document.getElementById("trade-history-buttonsID");

if (tradeHistoryButton) {



  const THButton = tradeHistoryButton.getElementsByTagName("button");

  for (let i = 0; i < THButton.length; i++)
    THButton[i].addEventListener("click", () => {
      for (let j = 0; j < THButton.length; j++) {
        THButton[j].classList.remove("trade-history-buttons-active")
      }
      THButton[i].classList.add("trade-history-buttons-active")

    })



  const steps = document.querySelectorAll('.step');
  const lines = document.querySelectorAll('.line');
  if (steps && lines) {
    for (let i = 0; i < steps.length; i++) {
      steps[i].addEventListener('click', function () {
        for (let j = 0; j <
          steps.length; j++) {
          steps[j].classList.toggle('active', j <= i);
        }
        for (let k = 0; k <
          lines.length; k++) {
          lines[k].classList.toggle('filled', k < i);
        }
      });
    }

  }


}



// DYNAMICALLY GENERATNG FOOTER TO ALL PAGES

const footer = document.getElementById("dynamicfooter");
if(footer)
{



footer.innerHTML = `
  <div class="footer-section">
    <div class="GradientWrapper">
      <div class="GradientFF GFF1"></div>
      <div class="GradientFF GFF2"></div>
      <div class="GradientFF GFF3"></div>
      <div class="GradientFF GFF4"></div>
    </div>

    <div class="footer-part fp1">
      <img class="logo" src="./images/icons/LOGOS/esyassoft 1.svg" alt="Logo" style="margin-bottom: 1rem" />
      <p>
        Multiply your money! With their user-friendly interface and expert
        market analysis, you'll be earning more in no time.
      </p>
      <div class="footer-icon">
        <div class="icon-div">
          <a href="#"><img src="./images/icons/footer-icons/Facebook.svg" alt="facebook-f" /></a>
        </div>
        <div class="icon-div">
          <a href="#"><img src="./images/icons/footer-icons/Twitter.svg" alt="twitter" /></a>
        </div>
        <div class="icon-div">
          <a href="#"><img src="./images/icons/footer-icons/Instagram.svg" alt="instagram-new" /></a>
        </div>
        <div class="icon-div">
          <a href="#"><img src="./images/icons/footer-icons/LinkedIn.svg" alt="linkedin" /></a>
        </div>
        <div class="icon-div">
          <a href="#"><img src="./images/icons/footer-icons/YouTube.svg" alt="youtube-play" /></a>
        </div>
      </div>
    </div>

    <div class="footer-part">
      <ul>
        <li class="fp-li">Product</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Security</li>
        <li>Business</li>
      </ul>
    </div>

    <div class="footer-part">
      <ul>
        <li class="fp-li">Company</li>
        <li>About Us</li>
        <li>Careers</li>
        <li>Blogs</li>
      </ul>
    </div>

    <div class="footer-part fp4">
      <ul>
        <li class="fp-li">Contact Us</li>
        <li>123, Street, New York</li>
        <li>info@esyasoft.com</li>
        <li>(025) 8692700</li>
      </ul>
    </div>
  </div>
`;


}