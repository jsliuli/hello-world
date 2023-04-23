<template>
  <div>
    <ul>
        <li v-for="item in messageList" :key="item.id">{{item.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "message",
    data(){
        return{
            messageList:[
                {title:"消息1",id:"001"},
                {title:"消息2",id:"002"},
                {title:"消息3",id:"003"},
            ]
        }
    }
}
</script>

<style scoped>

</style>