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

//rebrà una callback function que rebrà unes opcions
//name: nom de l'acció
//store instace en el nostre cas cartStore
//args : arguments passats a l'action que son count i product
//també afegim un after hook que permet executar qualsevol
//Cosa després que l'acció retorni i resolgui,
//onError hook per saber quan passa una excepció o falla i fer nosaltres alguna acció
/* cartStore.$onAction(({ name, store, args, after, onError }) => {
    if (name === "addItems") {
        after(() => {
            console.log(args[0]);
        });
    }
}); */

/* cartStore.$onAction(({ name, store, args, after, onError }) => {
    if (name === "addItems") {
        after(() => {
            console.log(args[0], args[1].name);
        });
        onError((error) => {
            console.log("Hello error:", error.message);
        });
    }
}); */

cartStore.$subscribe((mutation, state) => {
    console.log({ mutation });
    console.log({ state });
});
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
