<template>
    <div class="category">
        <h3>{{ titleCountryParent }}分类</h3>
        <slot :slotCountry="countries"></slot>
<!--        <slot name="center">我是默认值，当没有传值时，我会出现</slot>
        <slot name="footer">我是默认值，当没有传值时，我会出现</slot>-->
    </div>
</template>

<script>
export default {
    name: "Category",
    data() {
        return {
            countries: [
                {name: '中国', id: 1},
                {name: '美国', id: 2},
                {name: '俄罗斯', id: 3},
                {name: '瑞士', id: 4},
            ],
        }
    },

    props: {
        listData: Array,
        titleCountryParent: String,
    },

}
</script>

<style>
.category {
    background-color: skyblue;
    height: 300px;
    width: 200px;
}

h3 {
    background-color: orange;
}

img {
    width: 100%;
}
</style>

<!--
    匿名插槽：没有命令，有且只有一个
    插槽可以理解成挖个坑，等着使用者传的值进行填充
    具名插槽：在父组件中，使用<slot name="center"></slot>标签，用于占位
    作用域插槽：在父组件中，使用<slot name="center" :msg="msg"></slot>标签，用于占位
    插槽的使用：
    1.在父组件中，使用<slot></slot>标签，用于占位
    2.在子组件中，使用<slot></slot>标签，用于占位
    3.在父组件中，使用<子组件></子组件>标签，用于调用子组件
    4.在子组件中，使用<父组件></父组件>标签，用于调用父组件
    5.在父组件中，使用<子组件></子组件>标签，用于调用子组件，并且传递数据
    6.在子组件中，使用props接收父组件传递过来的数据

 -->