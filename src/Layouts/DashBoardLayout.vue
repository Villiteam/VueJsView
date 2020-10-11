<template>
    <div class="Wrap">
        <div class="Left">
            <a class="Profile">
                <img class="ProfileImg" src="" />
                <span class="ProfileName">Nguyen Loc</span>
            </a>
            <ul class="SideBar">
                <li class="DropDown">
                    <a class="SideBarLink">
                        <font-awesome-icon icon="home" class="SideBarIcon" />
                        <span class="SideBarTitle">DashBoard</span>
                    </a>
                </li>
                <li class="DropDown">
                    <a class="SideBarLink">
                        <font-awesome-icon
                            icon="book-open"
                            class="SideBarIcon"
                        />
                        <span class="SideBarTitle">Bảng Điểm</span>
                    </a>
                </li>
                <li class="DropDown">
                    <a class="SideBarLink">
                        <font-awesome-icon icon="book" class="SideBarIcon" />
                        <span class="SideBarTitle">Bài Tập</span>
                    </a>
                </li>
                <li class="DropDown">
                    <a class="SideBarLink">
                        <font-awesome-icon
                            icon="chalkboard-teacher"
                            class="SideBarIcon"
                        />
                        <span class="SideBarTitle">Học Online</span>
                    </a>
                </li>
                <li class="DropDown">
                    <a class="SideBarLink">
                        <font-awesome-icon icon="table" class="SideBarIcon" />
                        <span class="SideBarTitle">Thời Khóa Biểu</span>
                    </a>
                </li>
                <li class="DropDown">
                    <a class="SideBarLink">
                        <font-awesome-icon
                            icon="address-card"
                            class="SideBarIcon"
                        />
                        <span class="SideBarTitle">Hồ Sơ</span>
                    </a>
                </li>
                <li class="DropDown">
                    <a class="SideBarLink">
                        <font-awesome-icon
                            icon="bookmark"
                            class="SideBarIcon"
                        />
                        <span class="SideBarTitle">Sổ Đầu Bài</span>
                    </a>
                </li>
                <li class="DropDown">
                    <a class="SideBarLink">
                        <font-awesome-icon icon="scroll" class="SideBarIcon" />
                        <span class="SideBarTitle">Sổ Sao Đỏ</span>
                    </a>
                </li>
                <li class="DropDown">
                    <a class="SideBarLink">
                        <font-awesome-icon
                            icon="briefcase"
                            class="SideBarIcon"
                        />
                        <span class="SideBarTitle">Giáo Án</span>
                    </a>
                </li>
            </ul>
        </div>
        <div class="Right">
            <div class="Content">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
import "@/assets/Css/DashBoard.css";
export default {};
</script>

<style></style>
