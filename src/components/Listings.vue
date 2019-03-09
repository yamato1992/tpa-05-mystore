<template>
  <div class="homepage">
    <h1>My Store</h1>
    <div class="item-list">
      <div class="item" v-for="item in items" :key="item.id">
        <img class="item-image" :src="item.imageUrl" :alt="'item image'">
        <p>{{ item.name }}</p>
        <p>{{ `¥ ${item.price}` }}</p>
      </div>
    </div>
    <p>Go to the <a href="#" v-on:click="handleAdminClick">Admin Panel</a></p>
  </div>
</template>

<script>
import apiService from '../api-service';

export default {
  name: 'Listings',
  data: function() {
    return {
      items: [],
    };
  },
  methods: {
    handleAdminClick: function(evt) {
      evt.preventDefault();
      this.$router.push('/admin');
    },
  },
  created: async function() {
    this.items = await apiService.getItems();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item-list {
  display: flex;
  flex-wrap: wrap;
}

.item {
  width: 20%;
  height: 300px;
  margin: 10px 2.5%;
  padding: 10px;
  border: solid gray 1px;
}

.item-image {
  width: 90%;
  height: 50%;
}
</style>
