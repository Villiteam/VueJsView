<template>
    <div class="container-login">
        <div class="wrapper">
            <form class="login-form">
                <span class="login-form-title">Đăng Nhập</span>
                <select name="Role" class="input">
                    <option value="Student">Học Sinh</option>
                    <option value="Teacher">Giáo Viên</option>
                    <option value="Parent">Phụ Huynh</option>
                    <option value="Admin">Quản Lí</option>
                </select>
                <input
                    class="input"
                    type="text"
                    name="UserName"
                    placeholder="Tên Đăng Nhập"
                />
                <input
                    class="input"
                    type="password"
                    name="PassWord"
                    placeholder="Mật Khẩu"
                />
                <button class="login-form-btn">Đăng Nhập</button>
                <a href="#" class="btn-google">
                    <img src="Images/icons/icon-google.png" alt="GOOGLE" />
                    Đăng Nhập Bằng Tài Khoản Google
                </a>
            </form>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.container-login {
    width: 100%;
    min-height: 100vh;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 15px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("Images/bg-01.jpg");
}
.wrapper {
    width: 500px;
    background: #fff;
    border-radius: 10px;
    position: relative;
    padding: 20px;
}
.login-form {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -moz-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    -o-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
}
.login-form-title {
    width: 100%;
    display: block;
    font-size: 25px;
    color: #555;
    line-height: 1.2;
    text-align: center;
    margin-bottom: 10px;
}
.btn-google {
    font-size: 16px;
    line-height: 1.2;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 100%;
    height: 60px;
    border-radius: 10px;
    box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
    -o-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    position: relative;
    z-index: 1;
    color: #555;
    background-color: #fff;
}
.btn-google img {
    width: 30px;
    margin-right: 15px;
    padding-bottom: 3px;
}
.btn-google::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    background: #a64bf4;
    background: -webkit-linear-gradient(45deg, #00dbde, #fc00ff);
    background: -o-linear-gradient(45deg, #00dbde, #fc00ff);
    background: -moz-linear-gradient(45deg, #00dbde, #fc00ff);
    background: linear-gradient(45deg, #00dbde, #fc00ff);
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}
.btn-google:hover:before {
    opacity: 1;
}
.btn-google:hover {
    color: #fff;
}
.input {
    position: relative;
    background-color: #f7f7f7 !important;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    color: #333;
    line-height: 1.2;
    font-size: 16;
    display: block;
    width: 100%;
    background: transparent;
    height: 50px;
    padding: 0 20px;
    margin-bottom: 10px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}
.input:hover {
    box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
    -o-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
    -ms-box-shadow: 0 1px 5px 0px rgba(0, 0, 0, 0.2);
}
.login-form-btn {
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    height: 50px;
    background-color: #333;
    border-radius: 10px;
    font-family: Poppins-Medium;
    font-size: 16px;
    color: #fff;
    line-height: 1.2;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
    position: relative;
    z-index: 1;
    margin-bottom: 10px;
}
.login-form-btn::before {
    content: "";
    display: block;
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    top: 0;
    left: 0;
    background: #a64bf4;
    background: -webkit-linear-gradient(45deg, #00dbde, #fc00ff);
    background: -o-linear-gradient(45deg, #00dbde, #fc00ff);
    background: -moz-linear-gradient(45deg, #00dbde, #fc00ff);
    background: linear-gradient(45deg, #00dbde, #fc00ff);
    opacity: 0;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
}
.login-form-btn:hover:before {
    opacity: 1;
}
</style>
