<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Danh sách đơn hàng</h4></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="order"
          hide-actions
          class="elevation-0"
        >
          <template slot="items" slot-scope="props">
            <td>
              {{ props.item.id }}
            </td>
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

<script>
import { order } from '@/api/orderFlower';
export default {
  data () {
    return {
      headers: [
        { text: 'Mã đơn hàng', value: 'orderId' },
        { text: 'Địa chỉ', value: 'address' },
        { text: 'Chú thích', value: 'note' },
        { text: 'Bán kèm', value: 'attribute' },
        { text: 'Thời gian giao', value: 'created'},
        { text: 'Thao tác', value: 'action'}
      ],
    };
  },
  computed: {
    order () {
      return order;
    }
  }
};
</script>
