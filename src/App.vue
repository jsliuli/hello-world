<template>
    <div id="app">
<!--        &lt;!&ndash; <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld/>
        <DemoTest/>
        <ChildCom/>
        <Child :messageParent="message" :dataNumParent="dataNum" @changeBtn="change"/> &ndash;&gt;
        <Category :titleCountryParent="titleCountry">
            <template  slot-scope="demoslot">
&lt;!&ndash;                {{demoslot}}这里的demoslot是一个对象，里面包含了slotCountry这个属性&ndash;&gt;
            <ul v-for="c in demoslot.slotCountry" :key="c.id" >
&lt;!&ndash;                这里的slotCountry是在Category组件中定义的&ndash;&gt;
                <li>{{c.name}}</li>
            </ul>
            </template>
&lt;!&ndash;            <a href="" slot="footer">更多国家</a>&ndash;&gt;
        </Category>
        <category>
            <template slot-scope="demoCountry">
                <ol>
                    <li v-for="c in demoCountry.slotCountry" :key="c.id">{{c.name}}</li>
                </ol>
            </template>
        </category>
        <category>
            <template slot-scope="demoCountry">
                <h3 v-for="c in demoCountry.slotCountry" :key="c.id">{{c.name}} </h3>
            </template>
        </category>
&lt;!&ndash;        <Category  :titleCountryParent="titleFood">
            <ul v-for="c in foods" :key="c.id" slot="center">
                <li>{{c.name}}</li>
            </ul>
            <a href="" style="margin-right:10px" slot="footer">川菜</a>
            <a href="" slot="footer">东北菜</a>
        </Category>
        <Category :titleCountryParent="titlePhone">
            <img src="https://ecmb.bdimg.com/tam-ogel/42128323_-1799595190_480_320.jpg" slot="center">
            <a href="" slot="footer">小米商城</a>
        </Category>&ndash;&gt;
        <TestSlot>
            <template slot-scope="testslot">
                <ul>
                    <li v-for="h in testslot.holiday" :key="h.id">{{h.name}}</li>
                </ul>
            </template>
        </TestSlot>
        <TestSlot>
            <template slot-scope="testslot">
                <h4 v-for="h in testslot.holiday" :key="h.id">{{h.name}}</h4>
            </template>
        </TestSlot>-->
<!--        以下是vueRouter的例子-->
        <router-link to="/Home"><h5>home</h5></router-link>
        <router-link to="/About"><h5>about</h5></router-link>
        <router-link to="/User"><h5>user</h5></router-link>
<!--        router-view指定的是路由匹配到的组件呈现的位置-->
        <router-view />
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import DemoTest from './components/DemoTest.vue';
// import ChildCom from './components/ChildCom.vue';
// import Child from './components/Child.vue';
import Category from './components/Category.vue';
import TestSlot from "@/components/TestSlot.vue";
export default {
    name: 'App',
    components: {
        TestSlot,
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
