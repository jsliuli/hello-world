<template>
<div>
    <h2>我是About组件</h2>
</div>
</template>

<script>
export default {
    name: "About",
    beforeDestroy() {
        console.log("About组件被销毁了")
    },
    mounted() {
        console.log("About组件被挂载了")
        console.log(this.$route)//每个组件都有一个$route属性，它是一个对象，包含了当前路由的信息
        console.log(this.$router)//整个应用只有一个router对象，它包含了应用中所有的路由信息
    }
}
</script>

<style scoped>

</style>