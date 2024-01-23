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
//import { ref, reactive } from "vue";

const productStore = useProductStore();
const cartStore = useCartStore();
/* const history = reactive([]);
const future = reactive([]);
const doingHistory = ref(false);*/

const { products } = storeToRefs(useProductStore());
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

/* cartStore.$subscribe((mutation, state) => {
    console.log({ mutation });
    console.log({ state });
});
 */

/* history.push(JSON.stringify(cartStore.$state));
cartStore.$subscribe((mutation,state)=>{
history.push(JSON.stringify(state)); */

/* const undo= ()=>{
 if (history.length===1) return
 doingHistory.value=true
 history.pop()
 cartStore.$state=JSON.parse(history.at(-1))
 doingHistory.value=false
}
cartStore.$subscribe((mutation,state)=>{
 if(!doingHistory.value){
   history.push(JSON.stringify(state));
 }
}) */

/* const undo = () => {
    //si la longitud és 1 només tinc l'estat inicial i, per tant, no puc fer undo
    if (history.length === 1) return;
    //en cas contrari trec l'últim estat de l'array i
    history.pop();
    //torno a l'estat anterior
    cartStore.$state = $JSON.parse(history.at(-1));
}; */

/* const history=reactive([])
const doingHistory=ref(false)
history.push(JSON.stringify(cartStore.$state));

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

/* cartStore.$subscribe((mutation, state) => {
  console.log({ mutation });
  console.log({ state });
}); */

/* const addToCart = (count, product) => {
  count = parseInt(count);
  cartStore.$patch((state) => {
    for (let index = 0; index < count; index++) {
      state.items.push(product);
    }
  });
}; */
</script>

<template>
    <div class="container">
        <TheHeader />
        <div class="mb-5 flex justify-end">
            <AppButton @click="cartStore.undo">Undo</AppButton>
            <AppButton class="ml-2" @click="cartStore.redo">Redo</AppButton>
        </div>
        <ul class="sm:flex flex-wrap lg:flex-nowrap gap-5">
            <ProductCard
                v-for="product in products"
                :key="product.name"
                :product="product"
                @addToCart="cartStore.addItems($event, product)"
            />
        </ul>
    </div>
</template>
