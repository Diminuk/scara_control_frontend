import { create } from "zustand"

interface RobotStateType {
    
}

const initState: RobotStateType = {
    
}

interface RobotState {
    state: RobotStateType
    update: (newState: RobotStateType) => void;
}

export const useRobotStateStore = create<RobotState>((set) => ({
    state: initState,
    update: (newState) => set((state) => ({ state: newState })),
}));
