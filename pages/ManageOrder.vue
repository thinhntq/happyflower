<template>
  <v-container grid-list-xl fluid class="order">
    <template>
      <v-layout row wrap class="v-card v-sheet theme--light">
            <v-flex xs12 md2 sm12>
              <v-select
                label="Lọc theo"
                :items="countries"
                chips
                tags
                v-model="multi4"
                multi-line
                item-text="country"
                item-value="abbr"
                return-object
              >
                <template slot="selection" slot-scope="data">
                  <v-chip
                    close
                    @input="data.parent.selectItem(data.item.abbr)"
                    class="chip--select-multi"
                    :selected="data.selected"
                    :key="JSON.stringify(data.item.abbr)"
                  >
                    <v-avatar class="accent">{{ data.item.abbr.slice(0, 1).toUpperCase() }}</v-avatar>
                    {{ data.item.country }}
                  </v-chip>
                </template>
              </v-select>
            </v-flex>
            <v-flex xs12 sm6 md2>
              <v-select
                label="Chọn Tỉnh"
                :items="countries"
                chips
                tags
                v-model="multi4"
                multi-line
                item-text="country"
                item-value="abbr"
                return-object
              >
                <template slot="selection" slot-scope="data">
                  <v-chip
                    close
                    @input="data.parent.selectItem(data.item.abbr)"
                    class="chip--select-multi"
                    :selected="data.selected"
                    :key="JSON.stringify(data.item.abbr)"
                  >
                    <v-avatar class="accent">{{ data.item.abbr.slice(0, 1).toUpperCase() }}</v-avatar>
                    {{ data.item.country }}
                  </v-chip>
                </template>
              </v-select>
            </v-flex>
            <v-flex xs12 sm6 md2>
              <v-select
                label="Chọn quận/huyện"
                :items="countries"
                chips
                tags
                v-model="multi4"
                multi-line
                item-text="country"
                item-value="abbr"
                return-object
              >
                <template slot="selection" slot-scope="data">
                  <v-chip
                    close
                    @input="data.parent.selectItem(data.item.abbr)"
                    class="chip--select-multi"
                    :selected="data.selected"
                    :key="JSON.stringify(data.item.abbr)"
                  >
                    <v-avatar class="accent">{{ data.item.abbr.slice(0, 1).toUpperCase() }}</v-avatar>
                    {{ data.item.country }}
                  </v-chip>
                </template>
              </v-select>
            </v-flex>
            <v-flex xs12 sm12 md2 class="">
                    <v-dialog
                      ref="dialog"
                      persistent
                      v-model="modal"
                      lazy
                      full-width
                      width="290px"
                      :return-value.sync="date"
                      class="attribute-mg"
                    >
                      <v-text-field
                        slot="activator"
                        label="Tìm kiếm theo ngày"
                        v-model="date"
                        prepend-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
            </v-flex>
            <v-flex xs12 sm12 md2 class=" ptx-15">
                <v-text-field
                  name="input-7"
                  label="Tìm kiếm"
                  append-icon="search"
                ></v-text-field>
            </v-flex>
            <v-flex xs12 sm12 md2 class="ptx-15">
                <v-widget title="Basic Usage">
                  <div slot="widget-content">
                    <div>
                      <v-btn color="success">Đơn hàng
                        <v-icon right>add</v-icon>
                      </v-btn>
                    </div>
                  </div>
                </v-widget>
            </v-flex>
                  
          </v-layout>
      <v-card>
        <v-toolbar card dense color="transparent">
          <v-toolbar-title>
            <h4>Danh sách đơn hàng</h4>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            
            <!-- <v-icon>more_vert</v-icon> -->
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text class="pa-0">
          <template>
            <v-data-table :headers="headers" :items="order" hide-actions class="elevation-0">
              <template slot="items" slot-scope="props">
                <td>{{ props.item.id }}</td>
                <td>{{ props.item.address }}</td>
                <td class="text-xs-left">{{ props.item.note }}</td>
                <td class="text-xs-left">{{ props.item.attribute }}</td>
                <td class="text-xs-left">{{ props.item.createdAt }}</td>
                <td class="text-xs-right">
                  <v-btn flat icon color="grey">
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn flat icon color="grey">
                    <v-icon>delete</v-icon>
                  </v-btn>
                </td>
              </template>
            </v-data-table>
          </template>
          <v-divider></v-divider>
        </v-card-text>
      </v-card>
    </template>
  </v-container>
</template>
<script>
import { order } from '@/api/orderFlower';
import Countries from '@/api/country';
import VWidget from '@/components/VWidget';
export default {
  layout: 'dashboard',
  data () {
    return {
      headers: [
        { text: 'Mã đơn hàng', value: 'orderId' },
        { text: 'Địa chỉ', value: 'address' },
        { text: 'Chú thích', value: 'note' },
        { text: 'Bán kèm', value: 'attribute' },
        { text: 'Thời gian giao', value: 'created'},
        { text: 'Thao tác', value: 'action'},
      ],
      countries: Countries,
      picker: null,
        picker2: null,
        //
        arrayEvents: null,
        date1: null,
        date2: null,
        //
        date: null,
        menu: false,
        modal: false
    };
  },
  computed: {
    order () {
      return order;
    }
  },
  methods: {
      querySelections(v) {
        console.log(v);
        this.loading = true;
        // Simulated ajax query
        setTimeout(() => {
          this.items = this.countries.filter(e => {
            return (e.country || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1;
          });
          this.loading = false;
        }, 500);
      }
    }
};
</script>
<style lang="scss" scoped>
.order {
  .layout {
    margin: auto 0px !important;
  }
  .wrapper-filter {
    background-color: white;
  }
  .ptx-15 {
    padding: 1.6rem !important;
  }
  .order-attribute-filter {
    padding-top: 2rem;
  }
  .m1rem {
    margin-left: 1.5rem;
  }
  .attribute-mg {
    padding-top: 0.8rem;
  }
}
</style>
