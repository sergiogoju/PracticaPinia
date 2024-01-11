import { defineStore } from "pinia";
// nom i option object
import products from "@/data/products.json";

export const useProductStore = defineStore("ProductStore", {
    //state
    state: () => {
        return {
            // importem l'objecte short hand
            // products: products,
            // buidem els productes assignant un array buit
            products: [],
        };
    },
    //actions
    actions: {
        async fill() {
            // accedim a l'estat amb la paraula reservada this i
            // assignem a l'estat els productes del JSON
            this.products = (await import("@/data/products.json")).default;
        },
    },
    // getters
});
