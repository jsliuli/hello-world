<template>
  <div class="hello">
      {{dateNum}}
<button @click="addCount">按钮{{count}}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data () {
        return {
            dateNum: "2023-04-04",
            count: 0,
        }
    },
    methods: {
        addCount() {
            this.count += 1;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
