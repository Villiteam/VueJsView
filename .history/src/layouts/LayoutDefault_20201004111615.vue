<template>
    <div>
        <nav
            class="navbar navbar-expand-md bg-inverse fixed-top scrolling-navbar"
        >
            <div class="container">
                <a href="index.html" class="navbar-brand"
                    ><img src="img/logo.png" alt=""
                /></a>
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
                    <ul class="navbar-nav mr-auto w-100 justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link page-scroll active" href="#home"
                                >Home</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#services"
                                >About</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#features"
                                >Services</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#showcase"
                                >Showcase</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#pricing"
                                >Pricing</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#team"
                                >Team</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#blog"
                                >Blog</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="nav-link page-scroll" href="#contact"
                                >Contact</a
                            >
                        </li>
                        <li class="nav-item">
                            <a class="btn btn-singin" href="#">Download</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <slot />
    </div>
</template>

<script>
export default {};
</script>

<style></style>
