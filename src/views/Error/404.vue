<template>
    <LayoutDefault>
        <div class="error">
            <h1>Đã Xảy Ra lỗi</h1>
        </div>
    </LayoutDefault>
</template>

<script>
import LayoutDefault from "@/Layouts/LayoutDefault.vue";
export default {
    components: {
        LayoutDefault,
    },
};
</script>

<style>
.error {
    height: 100px;
    width: 100vw;
    margin-top: 100px;
}
</style>
