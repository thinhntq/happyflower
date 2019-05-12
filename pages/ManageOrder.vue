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
        <v-flex xs12 sm12 md2 class>
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
        <v-flex xs12 sm12 md2 class="ptx-15">
          <v-text-field name="input-7" label="Tìm kiếm" append-icon="search"></v-text-field>
        </v-flex>
        <v-flex xs12 sm12 md2 class="ptx-15">
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <div>
                <v-btn color="success">
                  Đơn hàng
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
                <td class="text-xs-left">
                  <v-flex xl12>
                    <v-flex xl3>
                      <v-btn flat icon color="grey">
                        <v-widget title="Fullscreen Dialog">
                          <div slot="widget-content">
                            <v-dialog
                              v-model="fullscreen.dialog"
                              fullscreen
                              transition="dialog-bottom-transition"
                              :overlay="false"
                            >
                              <v-btn color="warning" dark slot="activator">Sửa</v-btn>
                              <v-card>
                                <v-toolbar dark color="primary">
                                  <v-btn icon @click.native="fullscreen.dialog = false" dark>
                                    <v-icon>close</v-icon>
                                  </v-btn>
                                  <v-toolbar-title>Settings</v-toolbar-title>
                                  <v-spacer></v-spacer>
                                  <v-toolbar-items>
                                    <v-btn dark flat @click.native="dialog = false">Save</v-btn>
                                  </v-toolbar-items>
                                </v-toolbar>
                                <v-list three-line subheader>
                                  <v-subheader>Sửa đơn hàng</v-subheader>
                                </v-list>
                              </v-card>
                            </v-dialog>
                          </div>
                        </v-widget>
                      </v-btn>
                    </v-flex>
                    <v-flex xl3>
                      <v-btn flat icon color="grey">
                        <v-widget title="Basic Usage">
                          <div slot="widget-content">
                            <v-dialog v-model="basic.dialog" persistent max-width="500px">
                              <v-btn color="red" dark slot="activator">Xoá</v-btn>
                              <v-card>
                                <v-card-title>
                                  <span class="headline">Bạn có chắc chắn muốn xoá đơn hàng #uasdwr123-2 không ?</span>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-text>
                                  <v-container grid-list-md>
                                    <v-layout wrap>
                                      <v-flex>
                                        <span> Lưu ý: Sau khi đồng ý xoá sản phẩm thì không thể khôi phục lại.
                                        </span>
                                      </v-flex>
                                    </v-layout>
                                  </v-container>
                                </v-card-text>
                                <v-card-actions>
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    color="blue darken-1"
                                    flat
                                    @click.native="basic.dialog = false"
                                  >Không</v-btn>
                                  <v-btn
                                    color="blue darken-1"
                                    flat
                                    @click.native="basic.dialog = false"
                                  >Xoá</v-btn>
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </div>
                        </v-widget>
                      </v-btn>
                    </v-flex>
                  </v-flex>
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
      basic: {
          dialog: false
        },
      fullscreen: {
          dialog: false,
          notifications: false,
          sound: true,
          widgets: false
        },
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
