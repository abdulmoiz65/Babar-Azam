document.addEventListener("DOMContentLoaded" , function(){
    var navbar = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
        <div class="logo">
            <a href="./index.html">
            <img src="./assets/bobzylogo2.png" alt="">
            </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html"><i class="fa-solid fa-diamond"></i>Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="peoples.html"><i class="fa-solid fa-diamond"></i>Babar</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#mycont"><i class="fa-solid fa-diamond"></i>Contacts</a>
                </li>
            </ul>
            <ul class="navbar-nav language">
                <li class="nav-item dropdown"> 
                    <button class="nav-link btn btn-secondary" id="languagesDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Languages
                    </button>
                    <div class="dropdown-menu" aria-labelledby="languagesDropdown">
                        <a class="dropdown-item" href="arabic.html">Arabic</a>
                        <a class="dropdown-item" href="french.html">French</a>
                        <a class="dropdown-item" href="english.html">English</a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</nav>`;

var footer = `
<div class="container-fluid footer">
<div class="row justify-content-center">
    <div class="col col1 col-lg-2 col-md-4 col-sm-5 col-12">
    <img src="./assets/bobzylogo2.png" alt="">
    </div>
    <div class="col col2  col-lg-2 col-md-4 col-sm-5 col-12">
        <p> +213698600472</p>
    </div>
    <div class="col col3  col-lg-3 col-md-4 col-sm-5 col-12">
        <a href="mailto:contact@babarazam.com">contact@babarazam.com</a>
    </div>
    <div class="col col4 col-lg-2 col-md-4 col-sm-5 col-12">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-instagram"></i>
    </div>
</div>
<div class="footer-col mt-3 copyright">
    <p style="color: gray;">&copy; Bobbzy the king 2024</p>
</div>
</div>`;

document.querySelector("#mynav").innerHTML = navbar;
document.querySelector("#myfooter").innerHTML = footer;


} )