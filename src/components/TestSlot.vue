<template>
<div class="testSlot">
<slot :holiday="holiday"></slot>
</div>
</template>

<script>
export default {
    name: "TestSlot",
    data(){
        return{
            holiday:[
                {name:"五一",id:1},
                {name:"端午",id:2},
            ]
        }
    }
}
</script>

<style scoped>
.testSlot{
    border:2px solid blue;
    width: 300px;
    height: 400px;
}
</style>