<template>
  <div>
    <div class="container">
      <div class="row">
        <div class=" col-md-4 col-sm-12 text_sm_center">
          <img
            src="@/assets/img/privacy.png"
            alt="account"
            class="account-img"
          />
          <ul class="list-group">
            <li class="list-group-item" v-for="(list,i) in data.list" :key="i">{{ list }}</li>
          </ul>
        </div>
        <div class="col-md-8 col-sm-12 custom-margin ">
          <p class="table-title">{{ data.title }}</p>
          <div class="table-responsive">
            <table class="table">
              <thead>
                <tr>
                  <th v-for="(thead,i) in data.thead" :key="i">{{ thead }}</th>
                </tr>
              </thead>
              <tbody v-if="data.title == 'Bestellingen'">
                <tr>
                  <td>3456</td>
                  <td>02 feb 2020</td>
                  <td style="color:#11ff12">Payed</td>
                  <td style="color:#11ff12">accepted</td>
                  <td>shipped</td>
                  <td>view</td>
                </tr>
                <tr>
                  <td>3456</td>
                  <td>02 feb 2020</td>
                  <td style="color:#ff0003">unpayed</td>
                  <td style="color:#c9cbcd">pending</td>
                  <td style="color:#c9cbcd">pending</td>
                  <td>view</td>
                </tr>
                <tr>
                  <td>3456</td>
                  <td>02 feb 2020</td>
                  <td style="color:#ff0003">unpayed</td>
                  <td style="color:#c9cbcd">pending</td>
                  <td style="color:#c9cbcd">pending</td>
                  <td>view</td>
                </tr>
              </tbody>
              <tbody v-if="data.title == 'Abonnement'">
                <tr>
                  <td>HL89</td>
                  <td>HL001</td>
                  <td>02 feb 2020</td>
                  <td>Iedere maand	</td>
                  <td >$39</td>
                  <td style="color:#007800">Active</td>
                </tr>
                <tr>
                  <td>HL90</td>
                  <td>HL002</td>
                 <td>02 feb 2020</td>
                  <td >Iedere 3 maand	</td>
                  <td >$43 </td>
                  <td style="color:#eb0002">Cancelled</td>
                </tr>
                <tr>
                  <td>HL90</td>
                  <td>HL002</td>
                 <td>02 feb 2020</td>
                  <td >Iedere 3 maand	</td>
                  <td >$43</td>
                  <td style="color:#ff8003">Pending</td>
                </tr>
              </tbody>
            </table>
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
};
</script>

<style scoped lang="scss">
img.account-img {
  width: 200px;
  height: 200px;
}
li.list-group-item {
  font-family: avenir Roman;
  font-size: 15px;
  border-bottom: 1px solid #b7b7b7 !important;
  width: 177px;
  padding: 12px 5px;
}
.custom-margin {
  margin-top: 10em;
}
p.table-title {
  font-size: 32px;
}
.table td,
.table th,
.table thead th {
  border: transparent !important;
  font-family: Avenir Medium;
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
  p.table-title {
    font-size: 24px;
    text-align: center;
  }
  .table thead th,
  .table td {
    font-size: 12px;
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
  .table thead th,
  .table td {
    font-size: 13px;
  }
}
</style>
