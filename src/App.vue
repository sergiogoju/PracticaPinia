<script setup>
import TheHeader from "@/components/TheHeader.vue";
import ProductCard from "@/components/ProductCard.vue";
// import products from "@/data/products.json";
import { useProductStore } from "./stores/ProductStore";
// useProductStore();
import { storeToRefs } from "pinia";
// const productStore = useProductStore()
import { useCartStore } from "@/stores/CartStore.js";
// useProductStore();

const { products } = storeToRefs(useProductStore());
const productStore = useProductStore();
const cartStore = useCartStore();

/* const addToCart = (count, product) => {
    count = parseInt(count);
    for (let index = 0; index < count; index++) {
        CartStore.items.push(product);
    }
};*/
productStore.fill();
</script>

<template>
    <div class="container">
        <TheHeader />
        <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
            <ProductCard
                v-for="product in productStore.products"
                :key="product.name"
                :product="product"
                @addToCart="cartStore.addItems($event, product)"
            />
            <!-- Definim la const productStore i remplacem aquesta al v-for del ProductCart-->
        </ul>
    </div>
</template>
