<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <v-avatar
    :title="title"
    :size="avatarSize"
    class="grey lighten-4"
    >
    <img src="https://placeimg.com/200/200/any" alt="avatar">
    </v-avatar>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      title: 'hello there',
      avatarSize: '150px'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
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
  color: #35495E;
}
</style>
