let dropdown = document.querySelector('.header-browse');
dropdown.style.display = "none";
// document.getElementsByClassName('menu').style.marginLeft="0";
document.getElementById('logo').src = "../assets/img/logo-electronic-light.png"
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
console.log(productId)
const contentDiv = document.getElementById('site-content');
fetch(`../assets/data/products.json?id=${productId}`)
    .then(response => response.json())
    .then(product => {
        let div = '';
        const prod = product[productId - 1];
        div += ` <div class="prod-con"><div class="prod-img-div"><img style="object-fit:contain"  src="${prod.image}" class="card-img-top" alt="..."></div>
        <div>
        <h1>${prod.name}</h1>
        <div class="ratingAndReview">
        <div class="offer-rating">
            <ul class="rating-list">
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
                <li><i class="fa-solid fa-star"></i></li>
            </ul>
        </div>
        <div><a href="#">${prod.review} reviews</a></div>
       </div>
        <span class="prod-price">$${prod.price}</span>
        <div class="prod-stock">In Stock</div>
        <div class="prod-char">
            <ul>
                <li>lorem</li>
                <li>Lorem</li>
                <li>6.5</li>
            </ul>
        </div>
        <button class="btn-p add-to-cart">Add to cart</button>
        <div class="add-to-wishlist">
            <div><a href="#"><i class="fa-regular fa-heart"></i> Add to wishlist</a></div>
            <div>
               <p><span>2 people</span> favorited this product</p>
            </div>
        </div>
        <ul class="prod-delivery">
            <li><strong>Delivered today</strong> (order Mon-Fri before 12:00, delivery between 17:00 and 22:00)</li>
            <li><strong>Including</strong> shipping costs, sent by blonwe.com</li>
            <li>Pick up at a blonwe.com collection point is possible</li>
            <li>30 days to change your mind and free returns</li>
            <li>Day and night customer service</li>
        </ul>
        <div class="prod-tags">
            <div><span>SKU: </span><span>1</span></div>
            <div>
                <span>Categories: <strong>${prod.category}</strong></span>
                <a href="#"></a>
            </div>
            <div><span>Tags: </span><strong>${prod.tags}</strong></div>
        </div>
        <ul class="prod-icon-links">
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
            <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
        </ul></div></div>`
        document.getElementById('product-main').innerHTML = div;

        let contentUl = '';
        contentUl+=`<ul><li><a href="#">Home</a></li><li><a href="#">${product[productId-1].category}</a></li><li>${product[productId-1].name}</li></ul>`;
        contentDiv.innerHTML = contentUl;
        document.querySelector('.btn-p').onclick =() =>{
            addtoCart(prod);
          }
    })
    .catch(error => {
        console.error('Error:', error);
    });