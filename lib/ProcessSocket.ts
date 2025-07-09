import { create } from "zustand"

interface ProcessStateType {

}

const initState: ProcessStateType = {
    
    
}

interface ProcessState {
    state: ProcessStateType
    update: (newState: ProcessStateType) => void;
}

export const useProcessStateStore = create<ProcessState>((set) => ({
    state: initState,
    update: (newState) => set((state) => ({ state: newState })),
}));
