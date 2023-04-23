<template>
<div>
    <ul>
        <li v-for="item in newsList" :key="item.id">{{item.title}}</li>
    </ul>
</div>
</template>

<script>
export default {
    name: "News",
    data(){
        return {
            newsList: [
                {title: "新闻1", id: "001"},
                {title: "新闻2", id: "002"},
                {title: "新闻3", id: "003"},
            ]
        }
    }
}
</script>

<style scoped>

</style>