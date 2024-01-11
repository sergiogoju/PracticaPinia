import { defineStore } from "pinia";
import { parse } from "postcss";
import { groupBy } from "lodash";

export const useCartStore = defineStore("CartStore", {
    // per saber quins productes productes anem afegint al carrito
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
        grouped: (state) => groupBy(state.items, (item) => item.name),
    },
});
