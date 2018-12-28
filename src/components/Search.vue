<template>
  <div>
    <div class="input-group mb-3">
      <input
        type="text"
        v-model="searchTerm"
        class="form-control"
        placeholder="Search..."
        aria-label="Search..."
        aria-describedby="basic-addon2"
      >
      <div class="input-group-append">
        <button @click="filterGalleries" class="btn btn-outline-secondary input-button">
          <i class="fas fa-search"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: ""
    };
  },
  methods: {
    filterGalleries() {
      this.$emit("searchTerm", this.searchTerm);
    }
  }
};
</script>

<style scoped>
.input-group {
  width: 30% !important;
  margin: 0 auto;
}
input:focus {
  outline: 0;
  box-shadow: none;
}
.input-button {
  color: #48494b;
  font-weight: 900;
}
</style>