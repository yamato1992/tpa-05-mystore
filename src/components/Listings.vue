<template>
  <div class="homepage">
    <h1>My Store</h1>
    <div class="item-list">
      <p>ここに全てのアイテムを表示しよう</p>
    </div>
    <p>Go to the <a href="#" v-on:click="handleAdminClick">Admin Panel</a></p>
  </div>
</template>

<script>
export default {
  name: 'Listings',
  methods: {
    handleAdminClick: function(evt) {
      evt.preventDefault();
      this.$router.push('/admin');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
