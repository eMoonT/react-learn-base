import axios from "axios"

const createFruitStore = (set) => {
  return {
    fruitList: [],
    fetchFruitList: async () => {
      const res = await axios.get("http://localhost:3000/data");
      console.log(res.data);
      set((state) => ({ fruitList: (state.fruitList = res.data) }));
    },
  };
};

export default createFruitStore
