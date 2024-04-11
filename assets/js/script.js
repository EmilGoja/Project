// import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

// Swiper JS
const swiper = new Swiper('.mainSwiper', {
  // Optional parameters
  direction: 'horizontal',
  // slidesPerView:1,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

var prodSwiper = new Swiper(".prodSwiper", {
  slidesPerView: 5,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function toggleMenu() {
  var menu = document.getElementById("menuContainer");
  menu.classList.toggle("active");
}

// ##################################### Basket ###############################
// if(localStorage.getItem("basket" === null)){
//   localStorage.setItem('basket',JSON.stringify([]))
// }else{
//   const modalBody = document.querySelector('.list-group');
//   const basketData = JSON.parse(localStorage.getItem('basket'));
// let  basketAdd = "";
// basketData.map(item=>{
//     basketAdd+=`<li class="list-group-item"><img width="70" src="${item.image}"/>${item.title}</li>`
// })
// }
const basket = [];
const addtoCart =(addProd) =>{
  basket.push(addProd);
  const localBasket = JSON.stringify(basket);
  localStorage.setItem('basket', localBasket);
}

// ################################### Product Call ######################
document.addEventListener('DOMContentLoaded', function () {
  var salesLinks = document.querySelectorAll('.sales-links');
  function removeClass() {
    salesLinks.forEach(function (link) {
      link.classList.remove('active');
    });
  }
  function setLink(link) {
    removeClass();
    link.classList.add('active');
    localStorage.setItem('activeLink', link.getAttribute('href'));
  }
  function fetchData(href) {
    fetch('assets/data/products.json')
      .then(res => res.json())
      .then(data => {
        let div = '';
        const filterdata = data.filter(fd => fd.category === href.slice(1));
        filterdata.forEach(item => {
          div += `
                  <div class="product-card swiper-slide">
                      <a href=""><img style="object-fit:contain" height="200px" src="${item.image}" class="card-img-top" alt="..."></a>
                      <div class="card-body">
                          <h5 class="card-title"><a href="../pages/product.html?id=${item.id}">${item.name.length > 40 ? item.name.slice(0, 40) + '...' : item.name}</a></h5>
                          <div class="offer-rating">
                              <ul class="rating-list">
                                  <li><i class="fa-solid fa-star"></i></li>
                                  <li><i class="fa-solid fa-star"></i></li>
                                  <li><i class="fa-solid fa-star"></i></li>
                                  <li><i class="fa-solid fa-star"></i></li>
                                  <li><i class="fa-solid fa-star"></i></li>
                              </ul>
                          </div>
                          <div class="product-price">
                              <span>${item.price + '$'}</span>
                              <button class="btn btn-success btn-p"><i class="fa-solid fa-cart-shopping"></i></button>
                          </div>
                      </div>
                  </div>
                  `;
        });

        document.getElementById('product-con').innerHTML = div;
        history.pushState({}, '', href);
        filterdata.forEach((prod,c)=>{
          document.querySelectorAll('.btn-p')[c].onclick =() =>{
            addtoCart(prod);
          }
        })

      })
      .catch(err => console.log(err));
  }

  // function fetchDataforSales(href) {
  // fetch('assets/data/products.json')
  //   .then(res => res.json())
  //   .then(data => {
  //     let div = '';
  //     const filterDataSales = data.filter(fd => fd.category === href.slice(1));
  //     filterDataSales.forEach((item, index) => {
  //       if (index === 0 || index === 4) {
  //         div += ` <a href="#">
  //                         <img src="assets/img/1-17-600x600.png" alt="">
  //                     </a>
  //                     <div class="offer-rating">
  //                         <ul class="rating-list">
  //                             <li><i class="fa-solid fa-star"></i></li>
  //                             <li><i class="fa-solid fa-star"></i></li>
  //                             <li><i class="fa-solid fa-star"></i></li>
  //                             <li><i class="fa-solid fa-star"></i></li>
  //                             <li><i class="fa-solid fa-star"></i></li>
  //                         </ul>
  //                     </div>
  //                     <div>
  //                         <h4><a href="#">WOLFANG GA420 Action Camera 4K 60FPS 24MP</a></h4>
  //                         <div class="product-price">
  //                             <span>$159.77</span>
  //                             <button class="btn btn-success"><i class="fa-solid fa-cart-shopping"></i></button>
  //                         </div>
  //                     </div>`;
  //       } else {
  //         div += `<a href="#">
  //                         <img src="assets/img/2-13-600x600.png" alt="">
  //                     </a>
  //                     <div>
  //                         <div class="offer-rating">
  //                             <ul class="rating-list">
  //                                 <li><i class="fa-solid fa-star"></i></li>
  //                                 <li><i class="fa-solid fa-star"></i></li>
  //                                 <li><i class="fa-solid fa-star"></i></li>
  //                                 <li><i class="fa-solid fa-star"></i></li>
  //                                 <li><i class="fa-solid fa-star"></i></li>
  //                             </ul>
  //                         </div>
  //                         <div>
  //                             <h4><a href="#">WOLFANG GA420 Action Camera 4K 60FPS 24MP</a></h4>
  //                             <div class="product-price">
  //                                 <span>$159.77</span>
  //                                 <button class="btn btn-success"><i class="fa-solid fa-cart-shopping"></i></button>
  //                             </div>
  //                         </div>
  //                     </div>`;
  //       }
  //     });
  //     document.getElementById('deals-box').innerHTML = div;
  //   })
  //   .catch(error => console.error('Error fetching data:', error));
  // }
  var firstLink = salesLinks[0];
  if (firstLink) {
    setLink(firstLink);
    fetchData(firstLink.getAttribute('href'));
  }

  salesLinks.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      setLink(link);
      fetchData(link.getAttribute('href'));
    });
  });

});




// Theme Switcher

var button = document.getElementById('themeToggle');
var btnTxt = document.getElementById('themeTxt');
if (localStorage.getItem('theme') === null) {
  localStorage.setItem('theme', 'light');
} else {
  button.onclick = () => {
    if (btnTxt.innerHTML == "Dark Theme") {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
      btnTxt.innerHTML = 'Light Theme';
    } else {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
      btnTxt.innerHTML = 'Dark Theme';
    }
  }
}

if (localStorage.getItem('theme') === 'light') {
  document.body.classList.remove('dark-theme');
  btnTxt.innerHTML = 'Light Theme';
} else {
  document.body.classList.add('dark-theme');
  btnTxt.innerHTML = 'Dark Theme';
}

// change logo
const logo = document.getElementById('logo');
button.addEventListener('click', function () {
  if (localStorage.getItem('theme') === 'light') {
    logo.src = '../assets/img/logo-dark.png';
  } else {
    logo.src = '../assets/img/logo-electronic-light.png';
  }

})


// ########################## Countdown ######################
// Set the date we're counting down to
// var countDownDate = new Date("April 17, 2024 15:37:25").getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("demo").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);



// ################################# DROPDOWN ############################
var dropdownBtn = document.getElementById('dropdownBtn');
var dropdownMenu = document.getElementById('header-dropdown');
dropdownBtn.addEventListener('click', function () {
  if (dropdownMenu.style.display === 'none') {
    dropdownMenu.style.display = 'flex';
  } else {
    dropdownMenu.style.display = 'none';
  }
})


// ############################# Sign In ################################
document.getElementById('sign-in-link').addEventListener('click', function (event) {
  event.preventDefault();
  document.getElementById('overlay').style.display = 'block';
})
document.getElementById('close-btn').addEventListener('click', function () {
  document.getElementById('overlay').style.display = 'none';
})



// ########################### overlay #################################
document.addEventListener('DOMContentLoaded', function () {
  const divToHover = document.querySelector('#header-browse');
  const overlay = document.querySelector('#all-overlay');

  divToHover.addEventListener('mouseenter', function () {
    overlay.classList.add('active');
    divToHover.style.zIndex = '1001';
  });

  divToHover.addEventListener('mouseleave', function () {
    overlay.classList.remove('active');
    divToHover.style.zIndex = '';
  });
  const searchInput = document.getElementById('searchInput');
  const headerSearchForm = document.getElementById('header-search-form');

  searchInput.addEventListener('focus', function () {
    overlay.classList.add('active');
    headerSearchForm.classList.add('focused');
  });

  // searchInput.addEventListener('blur', function () {
  //   overlay.classList.remove('active');
  //   headerSearchForm.classList.remove('focused');
  // });
  document.body.addEventListener('click', function(event) {
    const clickedElement = event.target;

    if (!searchInput.contains(clickedElement) && !searchResultsBox.contains(clickedElement)) {
      overlay.classList.remove('active');
      headerSearchForm.classList.remove('focused');
    }
  });
});


// ############################## Filter Search Input ##########################
const searchInput = document.getElementById('searchInput');
const searchResultsBox = document.getElementById('searchResults');
const resultsCon = document.getElementById('results-con');
searchInput.addEventListener('input', function() {
    const searchTerm = searchInput.value.toLowerCase(); 
    fetch('assets/data/products.json')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(item => item.name.toLowerCase().includes(searchTerm)); 
            displayResults(filteredData); 
        })
        .catch(error => console.error('Error fetching data:', error));
});
function displayResults(results) {
    if (results.length === 0) {
      resultsCon.innerHTML = '<p>No results found</p>';
    } else {
        const html = results.map(item => `
        <a href="../pages/product.html?id=${item.id}">
        <div class="search-item">
            <img src="${item.image}">
            <div class="item-txt">
    <p>$${item.price}</p>
            <h4>${item.name}</h4>
</div>
            
        </div>
    </a>
        `).join('');
        resultsCon.innerHTML = html;
    }
    searchResultsBox.style.display = 'flex'; 
}
// searchInput.addEventListener('blur', function() {
//   searchResultsBox.style.display = 'none';
// });
document.body.addEventListener('click', function(event) {
  const clickedElement = event.target;

  if (!searchInput.contains(clickedElement) && !searchResultsBox.contains(clickedElement)) {
      searchResultsBox.style.display = 'none';
  }
});
