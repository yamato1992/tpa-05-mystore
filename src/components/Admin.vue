<template>
  <div class="admin">
    <h1>Admin Page</h1>
    <p>See the <a href="#" v-on:click="handleStoreClick">Store</a></p>
    <h3 :class="{ isError }">{{ message }}</h3>
    <input v-model.trim="item.name" placeholder="Name" class="inputForm" />
    <input v-model.number="item.price" placeholder="Price" class="inputForm" />
    <input v-model.trim="item.imageUrl" placeholder="Image Url" class="inputForm" />
    <button  @click="addItem">Add Item</button>
  </div>
</template>

<script>
import apiService from '../api-service';

export default {
  name: 'Admin',
  data: function() {
    return {
      item: {
        name: null,
        price: null,
        imageUrl: null,
      },
      isError: false,
      message: null,
    };
  },
  methods: {
    handleStoreClick: function(evt) {
      evt.preventDefault();
      this.$router.push('/');
    },
    addItem: async function(evt) {
      evt.preventDefault();
      // console.log(this.item);
      const result = await apiService.createItem(this.item);
      if (result.err) {
        this.isError = true;
        this.message = result.err;
      } else {
        this.isError = false;
        this.message = 'Item Added';
      }
    }
  },
};
</script>

<style scoped>
input {
  display: block;
  margin: 5px auto;
  width: 200px;
  height: 50px;
}

button {
  margin-top: 5px;
  width: 150px;
  height: 50px;
}
</style>
