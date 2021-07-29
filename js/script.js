// SERVICES SECTION

// declaring the variables
let service = document.querySelector(".services-list");
let services = document.querySelectorAll(".services-list-link");
let servicesArrow = document.querySelectorAll(".services-list-item-arrow");
let servicesImg = document.querySelectorAll(".services-description-img");
let servicesDescription = document.querySelectorAll(
  ".services-description-text"
);

// setting up the document

function nameSetUp(i) {
  services[i].dataset.serviceName = services[i].innerText;
  servicesImg[i].dataset.serviceName = services[i].innerText;
  servicesDescription[i].dataset.serviceName = services[i].innerText;
}
function displaySetUp(i) {
  for (let i = 1; i < services.length; i++) {
    servicesImg[i].style.display = "none";
    servicesDescription[i].style.display = "none";
  }
}

function documentSetUp() {
  for (let i = 0; i < services.length; i++) {
    nameSetUp(i);
    displaySetUp(i);
  }
  services[0].classList.add("services-active-tab");
  servicesArrow[0].classList.add("active-arrow");
}

documentSetUp();

// setting up the tab switch functionality

function serviceSwitch(event) {
  for (let i = 0; i < services.length; i++) {
    servicesImg[i].style.display = "none";
    servicesDescription[i].style.display = "none";
    services[i].classList.remove("services-active-tab");
    servicesArrow[i].classList.remove("active-arrow");
  }

  for (let i = 0; i < services.length; i++) {
    if (
      event.target.dataset.serviceName === servicesImg[i].dataset.serviceName
    ) {
      servicesImg[i].style.display = "block";
      services[i].classList.add("services-active-tab");
      servicesArrow[i].classList.add("active-arrow");
      servicesDescription[i].style.display = "block";
    }
  }
}

service.addEventListener("click", serviceSwitch);

// AMAZING WORK SECTION

//setting up the variables and the section
let portfolioItem = document.querySelectorAll(".portfolio-gallery-item");
let portfolioItemName = document.querySelectorAll(
  ".portfolio-gallery-hover-section"
);
let portfolioListItem = document.querySelectorAll(".portfolio-list-item");
let portfolioList = document.querySelector(".portfolio-list");
let portfolioListLink = document.querySelectorAll(".portfolio-list-link");
let portfolioLoadButton = document.querySelector(".portfolio-load-button");
let buttonFilterSwitch = true;

for (let i = 12; i < portfolioItem.length; i++) {
  portfolioItem[i].style.display = "none";
}
// setting up the load more button
function portfolioLoad() {
  for (let i = 0; i < portfolioItem.length; i++) {
    portfolioItem[i].style.display = "block";
  }
  for (let i = 0; i < portfolioListLink.length; i++) {
    portfolioListLink[i].classList.remove("portfolio-active-tab");
  }
  portfolioLoadButton.style.display = "none";
  buttonFilterSwitch = false;
  portfolioListLink[0].classList.add("portfolio-active-tab");
}

portfolioLoadButton.addEventListener("click", portfolioLoad);

//setting up the portfolio filter

function activeTabSwitch(event) {
  for (let i = 0; i < portfolioListLink.length; i++) {
    portfolioListLink[i].classList.remove("portfolio-active-tab");
  }
  event.target.classList.add("portfolio-active-tab");
}

function portfolioSwitch(event) {
  for (let i = 0; i < portfolioItem.length; i++) {
    portfolioItem[i].style.display = "none";
  }

  if (event.target.className === "portfolio-list") {
    return;
  }
  if (event.target.innerText === "All" && buttonFilterSwitch === true) {
    for (let i = 0; i < 12; i++) {
      portfolioItem[i].style.display = "block";
    }
    activeTabSwitch(event);
  } else if (event.target.innerText === "All" && buttonFilterSwitch === false) {
    for (let i = 0; i < portfolioItem.length; i++) {
      portfolioItem[i].style.display = "block";
    }
    activeTabSwitch(event);
  } else {
    for (let i = 0; i < portfolioItem.length; i++) {
      portfolioItem[i].style.display = "none";
    }

    for (let i = 0; i < portfolioItemName.length; i++) {
      if (event.target.innerText === portfolioItemName[i].innerText) {
        portfolioItem[i].style.display = "block";
      }
    }
    activeTabSwitch(event);
  }
}

portfolioList.addEventListener("click", portfolioSwitch);

//REVIEWS SLIDER

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
  autoplay: true,
  autoplaySpeed: 2500,
  cssEase: "linear",
});

$(".slider-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  focusOnSelect: true,
  autoplay: true,
  speed: 1000,
  centerMode: true,
  centerPadding: "0",
  cssEase: "linear",
});
