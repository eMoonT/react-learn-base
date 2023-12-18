import { create } from "zustand"
import { mountStoreDevtool } from 'simple-zustand-devtools'
import createCounterStore from "./modules/counterStore";
import createFruitStore from "./modules/fruitStore";

const useStore = create((...a) => ({
    ...createCounterStore(...a),
    ...createFruitStore(...a),
}));

mountStoreDevtool("Store", useStore);

export default useStore