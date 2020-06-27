<template>
  <div id="current-treatment-plan-table-div">
    <b-table responsive :items="filteredPlans" :borderless="true" :fields="fields" @row-clicked="onRowClicked" >
      <!-- <template v-slot:cell(id)="row">
      </template> -->
    </b-table>
  </div>
</template>

<script>
export default {
  props:{
    prevPlans: Boolean
  },
  data(){
    return {
      fields: [
        { key: "id", label: "ID", tdClass: "avenirmedium font-16 white-space-no-wrap", thClass: "avenirheavy font-16 font-normal white-space-no-wrap"},
        { key: "date", label: "Date", tdClass: "avenirmedium font-16 white-space-no-wrap", thClass: "avenirheavy font-16 font-normal white-space-no-wrap"},
        { key: "frequency", label: "Frequency", tdClass: "avenirmedium font-16 white-space-no-wrap", thClass: "avenirheavy font-16 font-normal white-space-no-wrap"},
        { key: "issue", label: "Issue", tdClass: "avenirmedium font-16 white-space-no-wrap", thClass: "avenirheavy font-16 font-normal white-space-no-wrap"},
        { key: "status", label: "Status", tdClass: "avenirmedium font-16 white-space-no-wrap", thClass: "avenirheavy font-16 font-normal white-space-no-wrap"},
      ],
      plans: [
        { id: 'HL001', date: '01-02-2020', frequency: 'per 3 maanden', issue: 1, status: 'Inactive' },
        { id: 'HL001', date: '01-02-2020', frequency: 'per 3 maanden', issue: 2, status: 'Inactive' },
        { id: 'HL001', date: '01-02-2020', frequency: 'per 3 maanden', issue: 3, status: 'Active' },
        { id: 'HL001', date: '01-02-2020', frequency: 'per 3 maanden', issue: 4, status: 'Active' },
      ]
    }
  },
  computed:{
    filteredPlans(){
      if(this.prevPlans){
        return this.plans
      }
      return this.plans.filter(p => p.status == 'Active')
    },
  },
  methods:{
    onRowClicked(item, index, event){
      this.gotoTransactionPage()
    },
    gotoTransactionPage(){
      this.$router.push({path: '/account/treatment-plan'})
    },
  },
}
</script>