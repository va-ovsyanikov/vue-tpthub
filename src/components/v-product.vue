<template>
    <v-container fluid>
        <v-row class="d-block">
            <v-progress-linear indeterminate color="green" height="5"
                v-if="Object.keys(product).length == 0"></v-progress-linear>
            <v-card class="mx-auto" v-else>
                <v-btn class="mt-4 ml-4" depressed color="primary" @click="$router.back()">
                    <v-icon small class="mr-2">
                        mdi-arrow-left-bold
                    </v-icon>
                    Back
                </v-btn>
                <v-card-title>{{ product.title }}</v-card-title>
                <v-card-subtitle class="pb-0">
                    {{ product.brand }}
                </v-card-subtitle>

                <v-card-text class="text--primary">
                    <div>{{ product.description }}</div>

                    <div>Price: $ {{ product.price }}</div>
                    <div>Rating: {{ product.rating }}</div>
                </v-card-text>

                <v-card-actions class="mb-10">
                    <v-btn color="orange">
                        Add to cart
                    </v-btn>

                    <v-btn color="orange">
                        Buy immediately
                    </v-btn>
                </v-card-actions>
                <div class="d-flex flex-wrap">
                    <v-img class="white--text align-end" :style="{ width: '300px', height: '300px' }"
                        v-for="(item, index) in product.images" :key="index" :src="item">
                    </v-img>
                </div>

            </v-card>
        </v-row>
    </v-container>

</template>


<script lang="ts">
import { IProduct } from '@/types/types';
import Vue from 'vue'
import { fetchOne } from '@/api/api';
export default Vue.extend({
    name: 'product',
    data() {
        return {
            product: {} as IProduct
        }
    },
    methods: {
        async fetchProduct() {
            try {
                this.product = await fetchOne(this.$route.params.id)
            } catch (error) {
                console.log(error);
            }
        }
    },
    mounted() {
        this.fetchProduct()
    }
})
</script>

<style scoped>

</style>