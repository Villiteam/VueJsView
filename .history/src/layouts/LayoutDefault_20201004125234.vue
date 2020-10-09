<template>
    <div>
        <header id="home" class="hero-area">
            <nav
                class="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar menu-bg"
            >
                <div class="container">
                    <a href="index.html" class="navbar-brand"><h3>CPS</h3></a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="lni-menu"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul
                            class="navbar-nav mr-auto w-100 justify-content-end"
                        >
                            <li class="nav-item">
                                <a
                                    class="nav-link page-scroll active"
                                    href="#home"
                                    >Trang Chủ</a
                                >
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#features"
                                    >Tính Năng</a
                                >
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#team"
                                    >Team</a
                                >
                            </li>
                            <li class="nav-item">
                                <a class="nav-link page-scroll" href="#contact"
                                    >Liên Hệ</a
                                >
                            </li>
                            <li class="nav-item">
                                <a class="btn btn-singin" href="/login"
                                    >Đăng Nhập</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
        <slot />
        <footer>
            <!-- Footer Area Start -->
            <section id="footer-Content">
                <div class="container">
                    <!-- Start Row -->
                    <div class="row">
                        <!-- Start Col -->
                        <div
                            class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12"
                        >
                            <div class="footer-logo">
                                <img src="img/footer-logo.png" alt="" />
                            </div>
                        </div>
                        <!-- End Col -->
                        <!-- Start Col -->
                        <div
                            class="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12"
                        >
                            <div class="widget">
                                <h3 class="block-title">Company</h3>
                                <ul class="menu">
                                    <li><a href="#"> - About Us</a></li>
                                    <li><a href="#">- Career</a></li>
                                    <li><a href="#">- Blog</a></li>
                                    <li><a href="#">- Press</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- End Col -->
                        <!-- Start Col -->
                        <div
                            class="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12"
                        >
                            <div class="widget">
                                <h3 class="block-title">Product</h3>
                                <ul class="menu">
                                    <li><a href="#"> - Customer Service</a></li>
                                    <li><a href="#">- Enterprise</a></li>
                                    <li><a href="#">- Price</a></li>
                                    <li><a href="#">- Scurity</a></li>
                                    <li><a href="#">- Why SLICK?</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- End Col -->
                        <!-- Start Col -->
                        <div
                            class="col-lg-2 col-md-6 col-sm-6 col-xs-6 col-mb-12"
                        >
                            <div class="widget">
                                <h3 class="block-title">Download App</h3>
                                <ul class="menu">
                                    <li><a href="#"> - Android App</a></li>
                                    <li><a href="#">- IOS App</a></li>
                                    <li><a href="#">- Windows App</a></li>
                                    <li><a href="#">- Play Store</a></li>
                                    <li><a href="#">- IOS Store</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- End Col -->
                        <!-- Start Col -->
                        <div
                            class="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-mb-12"
                        >
                            <div class="widget">
                                <h3 class="block-title">Subscribe Now</h3>
                                <p>
                                    Appropriately implement calysts for change
                                    visa wireless catalysts for change.
                                </p>
                                <div class="subscribe-area">
                                    <input
                                        type="email"
                                        class="form-control"
                                        placeholder="Enter Email"
                                    />
                                    <span
                                        ><i class="lni-chevron-right"></i
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <!-- End Col -->
                    </div>
                    <!-- End Row -->
                </div>
            </section>
            <!-- Footer area End -->
        </footer>
    </div>
</template>

<script>
import "@/assets/Css/Default.css";
export default {};
</script>

<style></style>
