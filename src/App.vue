<template>
    <div id="app">
        <!-- <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld/>
        <DemoTest/>
        <ChildCom/>
        <Child :messageParent="message" :dataNumParent="dataNum" @changeBtn="change"/> -->
        <Category :titleCountryParent="titleCountry">
            <ul v-for="c in countries" :key="c.id" slot="center">
                <li>{{c.name}}</li>
            </ul>
            <a href="" slot="footer">更多国家</a>
        </Category>
        <Category  :titleCountryParent="titleFood">
            <ul v-for="c in foods" :key="c.id" slot="center">
                <li>{{c.name}}</li>
            </ul>
            <a href="" style="margin-right:10px" slot="footer">川菜</a>
            <a href="" slot="footer">东北菜</a>
        </Category>
        <Category :titleCountryParent="titlePhone">
            <img src="https://ecmb.bdimg.com/tam-ogel/42128323_-1799595190_480_320.jpg" slot="center">
            <a href="" slot="footer">小米商城</a>
        </Category>
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DemoTest from './components/DemoTest.vue';
// import ChildCom from './components/ChildCom.vue';
// import Child from './components/Child.vue';
import Category from './components/Category.vue';
export default {
    name: 'App',
    components: {
        // HelloWorld,
        // DemoTest,
        // ChildCom,
        // Child,
        Category,
    },
    data() {
        return {
            titleCountry: "国家",
            titleFood: "美食",
            titlePhone: "手机",
            // message:"我是父组件要传递的数据",
            // dataNum:"2023-04-07",
            countries: [
                { name: '中国', id: 1 },
                { name: '美国', id: 2 },
                { name: '俄罗斯', id: 3 },
                { name: '瑞士', id: 4 },
            ],
            foods: [
                { name: '火锅', id: 1 },
                { name: '烧烤', id: 2 },
                { name: '烤肉', id: 3 },
                { name: '叉烧包', id: 4 },
            ],
            phones: [
                { name: '小米', id: 1 },
                { name: '华为', id: 2 },
                { name: 'iphone', id: 3 },
                { name: '三星', id: 4 },
            ],
        }
    },
    methods: {
        change(val) {
            console.log("我是子传父的例子:" + val)

        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    display: flex;
    justify-content: space-around;
}
</style>
