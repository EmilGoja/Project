const header = document.querySelector('header');
header.innerHTML = `<nav>
<div class="top-bar">
    <div class="left-tb">
        <ul>
            <li><a href="#">Track Order</a></li>
            <li><a href="../pages/about.html">About Us</a></li>
            <li><a href="../pages/contact.html">Contact</a></li>
            <li><a href="../pages/faq.html">FAQ</a></li>
        </ul>
    </div>
    <div class="right-tb">
        <div class="header-contact">
            <i class="fa-solid fa-phone"></i>
            <p>You can contact us 24/7</p>
            <a href="tel:0800300353">0 800 300-353</a>
        </div>
        <div>
            <ul class="header-list">
                <li><a href="#" class="main-li">English</a>
                <ul>
                <li><a href="#">Azeri</a></li>
                <li><a href="#">Russian</a></li>
                <li><a href="#">Turkish</a></li>
              </ul>
                </li>
                <li><a href="#" class="main-li">USD</a>
                <ul>
                <li><a href="#">AZN</a></li>
                <li><a href="#">RUB</a></li>
                <li><a href="#">TRY</a></li>
              </ul>
                </li>
            </ul>
        </div>
        <div>
            <a href="#" class="theme-link" id="themeToggle">
                <div class="theme-icon"><i class="fa-regular fa-sun"></i></div>
                <span id="themeTxt">Dark Theme</span>
            </a>
        </div>
    </div>
</div>
<div class="header-main">
    <div class="logo-con"><a href="../index.html"><img src="../assets/img/logo-dark.png" id="logo" alt="Logo"></a></div>
    <div class="header-search-form" id="header-search-form">
        <div>

            <select name="product-cat" id="categories">
                <option class="select-value" value="" selected="selected">All</option>
                <option value="appliances">Appliances</option>
                <option value="camera-photo">Camera &amp; Photo</option>
                <option value="goods-for-games">Goods for Games</option>
                <option value="headphones-music">Headphones &amp; Music</option>
                <option value="laptops-computers">Laptops &amp; Computers</option>
                <option value="smartphone-gadges">Smartphone &amp; Gadges</option>
                <option value="smartwatches">Smartwatches</option>
                <option value="sports-recreation">Sports &amp; Recreation</option>
                <option value="tablet">Tablet</option>
                <option value="tv-monitor">TVs, Audio-Video</option>
            </select>
            <input type="search" id="searchInput" placeholder="Search for products...">
            <button><i class="fa-solid fa-magnifying-glass"></i></button>
            <div id="searchResults">
                <div class="search-keywords">
                    <span>Trending</span>
                        <ul>
                            <li><a href="#">ipad</a></li>
                                        <li><a href="#">watch</a></li>
                                        <li><a href="#">samsung</a></li>
                                        <li><a href="#">smartwatches</a></li>
                                        <li><a href="#">image-3-18</a></li>
                                        <li><a href="#">apple</a></li>
                                        <li><a href="#">camera</a></li>
                                        <li><a href="#">notebook</a></li>
                        </ul>
                </div>
                <div id="results-con"></div>
            </div>
        </div>
    </div>
    <div class="header-right">
        <div>
            <a href="#" id="sign-in-link">
                <div><i class="fa-regular fa-user"></i></div>
                <div>
                    <span>Sign In</span>
                    <p>Account</p>
                </div>
            </a>
        </div>
        <div class="action-icon">
            <a href="#"><i class="fa-regular fa-heart"></i></a>
        </div>
        <div class="basket-div">
            <a href="../pages/basket.html">
                <div class="action-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
                <div>
                    <span>Total</span>
                    <p>$0.00</p>
                </div>
            </a>
            <div class="cart-dropdown-menu">
                        <p>No products in the cart.</p>
                    </div>
        </div>
    </div>
    <div class="header-menu-button" onclick="toggleMenu()">
        <i class="fa-solid fa-bars"></i>
    </div>
</div>

<div class="menu-container" id="menuContainer">
    <div class="menu-items">
        <a href="#">1</a><a href="#">2</a><a href="#">3</a>
    </div>
</div>

<div class="header-bottom">
    <div class="header-browse" id="header-browse">
        <div class="header-categories-txt">
            <a href="#" id="dropdownBtn">
                <i class="fa-solid fa-bars"></i>
                <span>Browse Categories</span>
            </a>
        </div>
        <div class="header-dropdown" id="header-dropdown">
            <ul>
                <li><a href="#"><i class="fa-solid fa-mobile-screen-button"></i>Smartphone & Gadges</a></li>
                <li><a href="#"><i class="fa-solid fa-laptop"></i>Laptops & Computers</a></li>
                <li><a href="#"><i class="fa-solid fa-tv"></i>TVs, Audio-Video</a></li>
                <li><a href="#"><i class="fa-regular fa-clock"></i>Smartwatches</a></li>
                <li><a href="#"><i class="fa-solid fa-camera-retro"></i>Camera & Photo</a></li>
                <li><a href="#"><i class="fa-solid fa-headphones"></i>Headphones & Music</a></li>
                <li><a href="#"><i class="fa-solid fa-gamepad"></i>Goods for Games</a></li>
                <li><a href="#"><i class="fa-solid fa-vr-cardboard"></i> VR Technology</a></li>
                <li><a href="#"><i class="fa-solid fa-blender-phone"></i>Appliances</a></li>
                <li><a href="#"><i class="fa-solid fa-bicycle"></i>Sports and Recreation</a></li>
                <li><a href="#">New Products</a></li>
                <li><a href="#">Discounted Goods</a></li>
                <li><a href="#">Best Selling Products</a></li>
            </ul>
        </div>
    </div>
    <div class="menu-box">
        <nav>
            <ul class="menu">
                <li><a href="#">Home</a></li>
                <li><a href="#">Shop <i class="fa-solid fa-chevron-down"></i></a></li>
                <li><a href="#">Smartwatches</a></li>
                <li><a href="#">Laptops & Computers</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </nav>
    </div>
    <div>
        <li><a href="#"><i class="fa-solid fa-percent"></i> Best Discounts <i
                    class="fa-solid fa-chevron-down"></i></a></li>
    </div>
</div>
</nav>
<div id="overlay" style="display: none;">
<div id="centered-content">
    <div><img src="../assets/img/auth-modal-image.jpg" alt="Auth"></div>
    <div>
        <a href="#" id="close-btn"><i class="fa-solid fa-xmark"></i></a>
        <h4>Log in</h4>
        <form>
            <label for="username">Username or email address *</label>
            <input type="text" name="username" id="loginUsername" autocomplete="username">
            <label for="password">Password *</label>
            <input type="password" id="loginPassword" name="password">
            <div>
                <input type="checkbox" name="rememberme" value="forever">
                <span>Remember me</span>
            </div>
            <button type="submit" id="loginButton">Log in</button>
        </form>
        <a href="#">Lost your password?</a>
        <p>By continuing, you accept the Website Regulations , Regulations for the sale of alcoholic beverages and the <a href="#">Privacy Policy</a></p>
        <div>
            <p>You dont have an account yet?</p>
            <a href="../pages/register.html">Register Now</a>
        </div>
    </div>
</div>
</div>`;

