//此文件用于创建整个应用的路由器
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import User from "@/pages/User.vue";
import News from "@/pages/News.vue";
import Message from "@/pages/message.vue";


//创建一个路由器，路由器包含了一系列的路由规则
const router = new VueRouter({
    //所有路由
    routes: [
        //每个路由应该映射一个组件
        {
            path: '/home',
            component: Home,
            children: [
                {
                    path: 'news',
                    component:News,
                },
                {
                    path: 'message',
                    component:Message,
                }
            ]
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '/user',
            component: User,
        },
    ]
})

export default router