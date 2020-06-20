<template>
  <div id="account-overview">
    <div class="row mb-5">
      <div class="col-12 col-md-6">
        <h4 class="avenirheavy mb-5 head-title">Welkom</h4>
        <p class="avenirbook subhead mb-0">On this page you will find all information related to your account.</p>
        <p class="avenirbook subhead mb-0">Check your transactions, oorder status or edit your personal</p>
        <p class="avenirbook subhead mb-0">information. Questions? Reach out to us via by email</p>
        <p class="avenirbook subhead mb-0">support@menscript.com or via WhatsApp: +</p>
      </div>
      <div class="col-12 col-md-6">
        <h4 class="avenirheavy mb-5 head-title">Contact information</h4>
        <p class="avenirmedium subhead mb-0">Remi Llewellyn-Huntley</p>
        <p class="avenirmedium subhead mb-0">R.Llewellyn-Huntley@mailfence.com</p>
        
        <p class="mt-3">
          <u class="avenirmedium subhead mb-0 d-block">Edit information</u>
          <u class="avenirmedium subhead mb-0 d-block">Change password</u>
        </p>
      </div>
    </div>
    <section id="current-plan-table" class="mt-5 mb-5">
      <div class="row justify-content-between mx-0 prev-plan-con">
        <h4 class="avenirheavy head-title">Current treatment plan</h4>
        <div class="">
          <span class="avenirheavy head-title text-muted">Show previous plan</span>
          <custom-checkbox class="d-inline-block ml-5" :black="true" @change="v=>showPreviousPlan=v" :checked="showPreviousPlan" :label="''" />
        </div>
      </div>
      <current-treatment-plan :prevPlans="showPreviousPlan" />
    </section>

    <section id="most-recent-transaction" class="mt-5 mb-5">
      <div class="row justify-content-between mx-0 prev-plan-con">
        <h4 class="avenirheavy head-title">Most recent transaction</h4>
      </div>
      <most-recent-transaction />
    </section>

    <section id="adres" class="mt-5 mb-5">
      <div class="row justify-content-between mx-0 prev-plan-con mb-4">
        <h4 class="avenirheavy head-title">Adres</h4>
      </div>
      <p class="avenirmedium subhead mb-0">Remi Llewellyn-Huntley</p>
      <p class="avenirmedium subhead mb-0">Warmoestraat 43</p>
      <p class="avenirmedium subhead mb-0">1106KG, AMSTERDAM</p>
      <p class="avenirmedium subhead mb-0">NEDERLAND</p>
      <p class="mt-3 avenirmedium subhead">
        <u>Edit information</u>
      </p>
    </section>

  </div>
</template>

<script>
import CurrentTreatmentPlan from "@/components/account/CurrentTreatmentPlan"
import CustomCheckbox from "@/components/Custom/CustomCheckbox"
import MostRecentTransaction from "@/components/account/MostRecentTransaction"
export default {
  components:{
    CurrentTreatmentPlan,
    CustomCheckbox,
    MostRecentTransaction
  },
  data(){
    return {
      showPreviousPlan: false
    }
  },
}
</script>

<style lang="scss" scoped>
#account-overview{
  max-width: 1200px;
  padding-bottom: 100px;
  .head-title{
    font-size: 16px;
    line-height: 48px;
  }
  .subhead{
    font-size: 14px;
  }
  .prev-plan-con{
    border-bottom: 1px solid #acacac;
  }
}
</style>