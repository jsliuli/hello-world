<template>
<div>
    {{msg}}
    <h3>{{messageParent}}</h3>
    <h3>{{dateNumParent}}</h3>
    <button @click="bta">按钮</button>
</div>
</template>

<script>
export default {
    name: "Child",
    data() {
        return {
            msg:"This is Child component哼哼哼啊啊啊啊啊啊啊啊啊啊啊啊"
        }
    },
    props:{
        messageParent:{
            type:String,
        },
        dateNumParent:{
            type:String,
        }
    },
    methods: {
        bta() {
            this.$emit("changeBta", this.msg);
        }
    },
/*    props:["messageParent","dateNumParent"],*/
/*
* 父传子
* 在父组件中，使用v-bind动态绑定一个自定义属性，用于给子组件传递数据
* 在子组件中，使用props接收父组件传递过来的数据
 */
}
</script>

<style scoped>

</style>