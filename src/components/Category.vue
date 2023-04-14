<template>
    <div class="category">
        <h3>{{titleCountryParent}}分类</h3>
        <slot name="center">我是默认值，当没有传值时，我会出现</slot>
        <slot name="footer">我是默认值，当没有传值时，我会出现</slot>
    </div>
</template>

<script>
export default{
    name:"Category",

    props:{
        listData:Array,
        titleCountryParent:String,
    },

}
</script>

<style>
.category{
    background-color: skyblue;
    height: 300px;
    width: 200px;
}
h3{
    background-color: orange;
}
img{
    width: 100%;
}
</style>

<!--
    匿名插槽：没有命令，有且只有一个
    插槽可以理解成挖个坑，等着使用者传的值进行填充

 -->