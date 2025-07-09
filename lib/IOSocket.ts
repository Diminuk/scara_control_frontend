import { create } from "zustand"

interface IOStateType {
    o_conveyor_left: boolean
    o_conveyor_right: boolean
    o_vacuum_enable_1: boolean
    o_vacuum_enable_2: boolean
    o_vacuum: boolean
    i_vacuum_suction: boolean
    o_door_up: boolean
    o_door_down: boolean
    i_emergency: boolean
    i_start: boolean
    i_stop: boolean
    i_upbutton: boolean
    i_downbutton: boolean
    i_lightgate_open: boolean
    i_lightgate_close: boolean
    i_jam_red: boolean
    i_jam_orange: boolean
    i_jam_green: boolean
    o_light_blue: boolean
    o_light_orange: boolean
    o_light_white: boolean
    o_light_sound: boolean
    i_jam_eop: boolean
}

const initState: IOStateType = {
    o_conveyor_left: false,
    o_conveyor_right: false,
    o_vacuum_enable_1: false,
    o_vacuum_enable_2: false,
    o_vacuum: false,
    i_vacuum_suction: false,
    o_door_up: false,
    o_door_down: false,
    i_emergency: false,
    i_start: false,
    i_stop: false,
    i_upbutton: false,
    i_downbutton: false,
    i_lightgate_open: false,
    i_lightgate_close: false,
    i_jam_red: false,
    i_jam_orange: false,
    i_jam_green: false,
    o_light_blue: false,
    o_light_orange: false,
    o_light_white: false,
    o_light_sound: false,
    i_jam_eop: false,
}

interface IOState {
    state: IOStateType
    update: (newState: IOStateType) => void;
}

export const useIOStateStore = create<IOState>((set) => ({
    state: initState,
    update: (newState) => set((state) => ({ state: newState })),
}));
