<template>
  <div>
      <div class="comtainer-fluid">
<AppHeader/>
   <AppBanner/>
   <hr>
   <SingleBlog/>
   <AppFooter/>
      </div>
   

  </div>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppBanner from "../components/AppBanner";
import AppFooter from "../components/AppFooter";
import SingleBlog from '../components/blog/SingleBlog'
export default {
  components: {
    AppHeader,
    AppBanner,
    SingleBlog,
    AppFooter
  }
};
</script>
