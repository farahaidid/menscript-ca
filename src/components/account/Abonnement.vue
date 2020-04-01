<template>
  <div>
    <div class="container ">
      <div class="row">
        <div class=" col-md-4 col-sm-12 text_sm_center">
          <img
            src="@/assets/img/privacy.png"
            alt="account"
            class="account-img"
          />
          <div class="list-group">
          
            <router-link 
             class="list-group-item style"  
            v-for="(list,i) in data.list" 
            :to="list.to"
            :key="i"
            >{{ list.title }}
            </router-link>
          </div>
        </div>
        <div class="col-md-8 col-sm-12 custom-margin ">
          <p class="title">{{ data.title }}</p>

           <div>
    <b-table responsive    
    :items="data.items"
     :tbody-tr-class="rowClass"
      :borderless="borderless"
      :fields="data.fields"
      >
      <template v-slot:cell(Status)="row">
            <span  :class="td2class" style="color:#007800" v-if="row.item.Status == 'Active' ">{{ row.item.Status }} </span>
            <span style="color:#eb0002" v-if="row.item.Status == 'Cancelled' ">{{ row.item.Status }} </span>
            <span style="color:#ff8003" v-if="row.item.Status == 'Pending' ">{{ row.item.Status }} </span>
          </template>
      </b-table>

       
  </div>
         
        </div>
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
          name: "hello",
          btnText: "no"
        };
      }
    }
  },
   data() {
      return {
        
        borderless:true,
      }
    },
     methods: {
      rowClass() {
        /* return 'td2class' */
      }
    }
    
};
</script>

<style scoped >
>>>.th1class{
    font-size: 18px!important;
    line-height: 72px!important;
    color: #171717!important;
    font-family: Avenir Medium!important;
}
>>>.td2class{
    font-size: 18px !important;
    line-height: 40px !important;
    color: #171717 !important;
    font-family: Avenir heavy!important;
    
}

.myclass{
  font-size: 18px;
line-height: 72px;
color: #171717;
font-family:Avenir Medium;
}
a:hover{
 text-decoration: none!important;
}
img.account-img {
  width: 200px;
  height: 200px;
}
.list-group-item {
  font-family: avenir Roman;
 font-size: 24px;
line-height: 72px;
color: #3b3c3c;
  border:transparent!important;
  width: 177px;
  background-color:transparent;
}
.list-group-item.style {
    border-bottom: 1px solid #b7b7b7 !important;
}
.custom-margin {
  margin-top: 10em;
}
p.title {
  font-size: 72px;
line-height: 48px;
color: #2f2f2f;
font-family:Avenir Black;
margin-bottom:35px;
}
.table thead th,.table thead th,.table thead th,.table td, .table th {
   
     border-bottom: none!important
}


/* Small devices */
@media screen and (max-width: 640px) {
  .text_sm_center {
    text-align: center;
  }
  .custom-margin {
    margin-top: 20px;
  }
  img.account-img {
    width: 143px;
    height: 143px;
  }
  .list-group {
    justify-content: center;
    align-items: center;
  }
  p.title {
    font-size: 24px;
    text-align: center;
  }
  
}
/* medium phone  */
@media screen and (min-width: 641px) and (max-width: 768px) {
  .text_sm_center {
    text-align: center;
  }
  img.account-img {
    width: 200px;
    height: 200px;
  }
  .list-group {
    justify-content: center;
    align-items: center;
  }
  .custom-margin {
    margin-top: 25px;
  }
   p.title {
    font-size: 40px;
    text-align: center;
  }
  
}
@media screen and (min-width: 641px) and (max-width: 1200px) {
  .list-group-item {
   
    font-size: 18px;
    
}
 p.title {
    font-size: 50px;
    text-align: center;
  }
}
</style>
