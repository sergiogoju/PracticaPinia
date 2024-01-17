import { defineStore } from "pinia";
import { parse } from "postcss";
import { groupBy, orderBy } from "lodash";

export const useCartStore = defineStore("CartStore", {
    // per saber quins productes anem afegint al carrito
    state: () => {
        return {
            items: [],
        };
    },
    actions: {
        addItems(count, item) {
            count = parseInt(count);
            for (let index = 0; index < count; index++) {
                this.items.push({ ...item });
            }
        },
        clearItem(name) {
            this.items = this.items.filter((item) => item.name != name);
        },
        setItemCount(item, count) {
            this.clearItem(item.name);
            this.addItems(count, item);
        },
    },
    getters: {
        /* count() {
            return this.items.length;
        },
        isEmpty() {
            return this.count === 0;
        },*/
        count: (state) => state.items.length,
        isEmpty: (state) => state.count === 0,
        grouped: (state) => {
            const orderedItems = orderBy(
                state.items,
                (item) => item.name,
                "dsc"
            );
            return groupBy(orderedItems, (item) => item.name);
        },
        groupCount: (state) => (name) => state.grouped[name].length,
        totalPrice: (state) =>
            state.items.reduce((acc, b) => acc + b?.price, 0),
        /* El total agafaa el preu de cada item i els afageix a state.items
        utilitzant reduce per "acc"umular els preus al item b, si el item b te preu
        s'acumula però si l'item b no te price no s'acumula i per tant el que es calcula
        es el preu total de tots el items del carrito començant per 0. */
    },
});
