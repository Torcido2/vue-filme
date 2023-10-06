<template >
  <div class="movie-detail">
    <div class="details-inner">
      <div class="wrapper-img">
        <img :src="movie.Poster" alt="" width="700">
      </div>
      <div class="wrapper-details">
        <h1 class="movie-title">{{ movie.Title }} - <span>{{ movie.Genre }}</span></h1>
        <span class="year"> {{ movie.Year }}</span>
        <span class="rating">Rating-{{ movie.imdbRating}}</span>
        <p class="movie-text">{{ movie.Plot }}</p>
      </div>
    </div>
    
  </div>
</template>
<script>
import {ref, onBeforeMount} from 'vue';
import {useRoute} from 'vue-router';
import env from '@/env.js';

export default {
  setup () {
    const movie = ref({});
    const route = useRoute();

    onBeforeMount(() => {
      fetch(`https://www.omdbapi.com/?apikey=${env.apikey}&i=${route.params.id}&plot=full`)
        .then(res => res.json())
        .then(data => {
          movie.value = data;
          console.log(data);
        });
    });

    return {
      movie
    }
  }
}
</script>
<style lang="scss" scoped>
  .movie-detail{
    padding: 2% 15%;
    margin: 24px auto;
    font-size: 1.4rem;

    .details-inner{
      padding: 32px;
      display: flex;
      justify-content: start;
      max-height: 700px;
    }

    .wrapper-img{
      max-width: 400px;
      flex: 1 1 100%;
      margin-right: 24px;

      img{
        width: 100%;
        max-height: 600px;
      }
    }
    .year{
      color: rgb(199, 199, 199);
    }
    .rating{
      margin-left: 24px;
      color: orange;
    }
    .movie-text{
      color: #fff;
      margin-top: 24px;
    }
  }
</style>