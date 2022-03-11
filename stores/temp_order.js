import create from "zustand";

const useStore = create((set) => ({
  tempOrder: [],
  addToTempOrder: (items) => set((state) => ({ tempOrder: [...state.tempOrder, items] })),
  setInitialTempOrder: (order) => set(() => ({ tempOrder: order })),
}))

export default useStore
