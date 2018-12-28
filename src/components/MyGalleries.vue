<template>
  <div>
    <search></search>
    <div class="col-lg-6 portfolio-item" v-for="gallery in galleries" :key="gallery.id">
      <div class="card h-100">
        <img class="card-img-top" :src="gallery.images[0].image_url" alt>
        <div class="card-body">
          <router-link :to="{ name: 'single-gallery', params: { id: gallery.id }}">
            <h4 class="card-title">
              <a href="#">{{ gallery.title }}</a>
            </h4>
          </router-link>
          <p>Author:</p>
          <h4>{{ gallery.user.first_name }} {{ gallery.user.last_name }}</h4>
          <small>Created at: {{ gallery.created_at }}</small>
          <p class="card-text"></p>
        </div>
      </div>
    </div>
    <button class="btn btn-outline-dark" @click="loadMore">Load More</button>
  </div>
</template>

<script>
import galleriesService from "./../services/galleries-service";
import Search from "./../components/Search";
import { mapGetters } from "vuex";

export default {
  name: "MyGalleries",
  components: {
    Search
  },
  data() {
    return {
      galleries: [],
      page: 1,
      term: ""
    };
  },
  computed: {
    ...mapGetters({
      user: "getUser"
    })
  },
  methods: {
    loadMore() {
      this.page++;
      galleriesService
        .getUsersGalleries(this.$route.params.id, this.page, this.term)
        .then(galleries => {
          this.galleries.push(...galleries);
        });
    }
  },
  created() {
    galleriesService
      .getUsersGalleries(this.user.id, this.page, this.term)
      .then(response => {
        this.galleries = response;
      });
  }
};
</script>

<style scoped>
.portfolio-item {
  display: inline-block;
  width: 50%;
  margin-bottom: 40px;
}
.h-100 {
  box-shadow: 10px 10px 5px #aaaaaa;
}
</style>
