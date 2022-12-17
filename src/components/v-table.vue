<template>
  <v-container fluid>
    <v-row class="d-block">
      <v-progress-linear color="green" indeterminate v-if="loading"></v-progress-linear>
      <v-data-table 
        :headers="headers" 
        :items="products"
        :items-per-page="5" 
        :options.sync="options"
        :server-items-length="totalProducts" 
        :footer-props="{
          // showFirstLastPage: true,
          // firstIcon: 'mdi-arrow-collapse-left',
          // lastIcon: 'mdi-arrow-collapse-right',
          // prevIcon: 'mdi-minus',
          // nextIcon: 'mdi-plus',
          'items-per-page-text': 'Products per page',
          'items-per-page-options': [5, 10, 15, 30]
        }"
        >
        <template v-slot:item.thumbnail="{ item }">
          <td class="align-center" :style="{ fontSize: '0' }">
            <img :src="item.thumbnail" alt="" :style="{ width: '100px', height: '100px' }">
          </td>
        </template>
        <template v-slot:item.actions="{ item }">
          <v-btn color="primary" @click="toPageProduct(item.id)">
            Open
            <v-icon small class="ml-2">
              mdi-arrow-right-bold
            </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { fetchAll } from '@/api/api';
import { IProduct, IOptions } from '@/types/types';
import { headers } from '@/setup/headers';

export default Vue.extend({
  name: 'table',
  data() {
    return {
      headers,
      products: [] as Array<IProduct>,
      totalProducts: 0,
      options: {},
      loading: false,
    }
  },
  methods: {
    async fetchProducts() {
      try {
        this.loading = true

        // 1
        let { page, itemsPerPage } = this.options as IOptions
        const data = await fetchAll(page, itemsPerPage)
        this.products = data.products
        this.totalProducts = data.total

        //2
        // const data = await fetchAll()
        // this.products = data.products
        // this.totalProducts = data.products.length
        // let { page, itemsPerPage } = this.options as IOptions
        // if (itemsPerPage > 0) {
        //   this.$router.push(`${this.$route.path}?page=${page}`)
        //   this.products = this.products.slice((page - 1) * itemsPerPage, page * itemsPerPage)
        // }

        this.loading = false
      } catch (error) {
        console.log(error);
      }
    },
    toPageProduct(id: string) {
      this.$router.push({ path: `/product/${id}`})
    }
  },
  watch: {
    options: {
      handler() {
        this.fetchProducts()
      },
      deep: true,
    },
  },
  mounted() {
    this.fetchProducts()
  }
})
</script>
