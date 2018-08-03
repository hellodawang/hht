<template>
    <div class="hht_content_header">
        <i class="icon icon_menu" @click="showSideBar=!showSideBar"></i>
        <div class="menubar">
            <div class="mail"><span class="mail-text">5</span></div>
            <div class="message"><span class="message-text">3</span></div>
            <div class="language">
                <el-dropdown>
                    <span class="el-dropdown-link">
                        中文<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>英文</el-dropdown-item>                             
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="avator">
                <img src="../../assets/图层 36@3x.png" alt="">
            </div>
            <div class="loginOut">退出</div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang='scss' scoped>
</style>