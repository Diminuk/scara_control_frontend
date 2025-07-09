"use client"

import React, { useEffect, useRef } from "react"
import { useProcessStateStore } from "@/lib/ProcessSocket"

const WS_URL = "ws://localhost:8000/status"

export default function ProcessProvider({children}: {children:  React.ReactNode }){
    
    
    return ({children})
}