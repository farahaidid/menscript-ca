<template>
  <div>
    <div class="row w-75 mx-auto blog-list-section mb-lg-5 mb-md-4 mb-sm-4 mt-5" v-if="data.imageleft == 'left'" >

           
        <router-link to="/singleblog">
      <div class="col-md-4 pl-lg-0 pl-md-0 pr-0 pl-0 text-sm-center" v-if="data.name == 'singleBlog'">
        <img :src="data.image" alt="" class="blog-img"/>
      </div>
      <div class="col-md-8">
        <div class="mt-lg-5 mt-md-3 ">
          <h1 class="title" v-if="data.name == 'singleBlog'"> {{ data.title }}</h1>
          <p class="subtitle" v-if="data.name == 'singleBlog'">
            {{ data.text}}
          </p>
          <p class="blog-list-subtext" v-if="data.name == 'singleBlog'"> {{ data.subtext }}</p>
        </div>
      </div>
        </router-link>



    </div>

    <div class="row w-75 mx-auto blog-list-section mb-lg-5 mb-md-4 mb-sm-4" v-if="data.imageleft == 'right'">
      
           <router-link to="/singleblog">
      <div class="col-md-8">
        <div class="mt-lg-5 mt-md-3 ">
          <h1 class="title" v-if="data.name == 'singleBlog'"> {{ data.title }}</h1>
          <p class="subtitle" v-if="data.name == 'singleBlog'">
            {{ data.text}}
          </p>
          <p class="blog-list-subtext " v-if="data.name == 'singleBlog'"> {{ data.subtext }}</p>
        </div>
      </div>
      <div class="col-md-4 pr-lg-0 pr-md-0 text-sm-center" v-if="data.name == 'singleBlog'">
        <img :src="data.image" alt="" class="blog-img"/>
      </div>
           </router-link>
    </div>


  </div>
</template>

<script>
export default {
   props: {
    data: {
      type: Object,
      default() {
        return {
          
        };
      }
    },
    
  },
};
</script>

<style scoped>
a{
  display: contents;
}

</style>
