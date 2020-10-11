<template>
    <LayoutDefault>
        <div class="container-login">
            <div class="wrapper">
                <form class="login-form" method="post">
                    <span class="login-form-title">Đăng Nhập</span>
                    <select v-model="Role" class="input">
                        <option value="Student">Học Sinh</option>
                        <option value="Teacher">Giáo Viên</option>
                        <option value="Parent">Phụ Huynh</option>
                        <option value="Admin">Quản Lí</option>
                    </select>
                    <input
                        required
                        class="input"
                        type="text"
                        v-model="UserName"
                        placeholder="Tên Đăng Nhập"
                    />
                    <input
                        required
                        class="input"
                        type="password"
                        v-model="PassWord"
                        placeholder="Mật Khẩu"
                    />
                    <button
                        class="login-form-btn"
                        @click.stop.prevent="login()"
                    >
                        Đăng Nhập
                    </button>
                    <a href="#" class="btn-google">
                        <img src="Images/icons/icon-google.png" alt="GOOGLE" />
                        Đăng Nhập Bằng Tài Khoản Google
                    </a>
                </form>
            </div>
        </div>
    </LayoutDefault>
</template>

<script>
import "@/assets/Css/Login.css";
import LayoutDefault from "@/Layouts/LayoutDefault.vue";

export default {
    components: {
        LayoutDefault,
    },
    data: () => ({
        UserName: "",
        PassWord: "",
        Role: "",
        error: null,
        success: false,
    }),
    methods: {
        login: async function() {
            setTimeout(() => {
                this.$router.push("/404");
            }, 2000);
        },
    },
};
</script>

<style></style>
