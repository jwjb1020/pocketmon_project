import {create} from "zustand";
const useStoreClass = create((set)=>({
    classList: [],
    pushClass: (newClass) => set((state) => ({ classList: [...state.classList, newClass] })),
    resetClass: ()=> set({classList:[]}),
}))

export default useStoreClass;