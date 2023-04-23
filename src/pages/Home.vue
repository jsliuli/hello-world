<template>
<div>
    <h2>我是Home组件</h2>
    <div style="display: flex;flex-direction: row;justify-content: center">
        <router-link to="/home/news"><h5>news</h5></router-link>
        <router-link to="/home/message"><h5>message</h5></router-link>
        <router-view></router-view>
    </div>
</div>
</template>

<script>
export default {
    name: "Home",
    beforeDestroy() {
        console.log("Home组件被销毁了")
    },
    mounted() {
        console.log("Home组件被挂载了")
    }
}
</script>

<style scoped>

</style>