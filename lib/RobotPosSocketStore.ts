import { create } from "zustand"

interface RobotPosStateType {
    j1: number
    j2: number
    j3: number
    j4: number
    x: number
    y: number
    z: number
    r: number
}

const initState: RobotPosStateType = {
    j1: 0,
    j2: 0,
    j3: 0,
    j4: 0,
    x: 0,
    y: 0,
    z: 0,
    r: 0,
}

interface RobotPosState {
    state: RobotPosStateType
    update: (newState: RobotPosStateType) => void;
}

export const useRobotPoseStateStore = create<RobotPosState>((set) => ({
    state: initState,
    update: (newState) => set((state) => ({ state: newState })),
}));
