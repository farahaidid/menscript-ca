<template>
  <div>
    <div class="row w-75 mx-auto blog-list-section mb-lg-5 mb-md-4 mb-sm-4 mt-5" v-if="data.imageleft == 'left'" >
      <div class="col-md-4 pl-lg-0 pl-md-0 text-sm-center" v-if="data.name == 'singleBlog'">
        <img :src="data.image" alt="" class="blog-img"/>
      </div>
      <div class="col-md-8">
        <div class="mt-lg-5 mt-md-3 ">
          <router-link to="/singleblog"> 
          <h1 class="blog-list-title" v-if="data.name == 'singleBlog'"> {{ data.title }}</h1>
</router-link>
          <p class="blog-list-text" v-if="data.name == 'singleBlog'">
            {{ data.text}}
          </p>
          <p class="blog-list-subtext" v-if="data.name == 'singleBlog'"> {{ data.subtext }}</p>
        </div>
      </div>
    </div>

    <div class="row w-75 mx-auto blog-list-section mb-lg-5 mb-md-4 mb-sm-4" v-if="data.imageleft == 'right'">
      
      <div class="col-md-8">
        <div class="mt-lg-5 mt-md-3 ">
           <router-link to="/singleblog">
          <h1 class="blog-list-title" v-if="data.name == 'singleBlog'"> {{ data.title }}</h1>
           </router-link>
          <p class="blog-list-text" v-if="data.name == 'singleBlog'">
            {{ data.text}}
          </p>
          <p class="blog-list-subtext" v-if="data.name == 'singleBlog'"> {{ data.subtext }}</p>
        </div>
      </div>
      <div class="col-md-4 pr-lg-0 pr-md-0 text-sm-center" v-if="data.name == 'singleBlog'">
        <img :src="data.image" alt="" class="blog-img"/>
      </div>
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
  created(){
      console.log("data",this.data);
    }
};
</script>

<style></style>
