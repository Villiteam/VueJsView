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
import "@/assets/Css/Login.css";
import LayoutDefault from "@/Layouts/LayoutDefault.vue";

export default {
    components: {
        LayoutDefault,
    },
};
</script>

<style></style>
