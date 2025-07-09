'use client'

import { useEffect, useRef } from "react"
import { useRobotPoseStateStore } from "@/lib/RobotPosSocketStore";


const WS_URL = 'ws://localhost:8000/status_pose/possocket';

export default function RobotPoseProvider({children}: { children: React.ReactNode }){
    const setData = useRobotPoseStateStore((state) => state.update);
        const socketRef = useRef<WebSocket | null>(null);
    
        useEffect(() => {
            if (socketRef.current) return;
        
            const socket = new WebSocket(WS_URL);
            socketRef.current = socket;
        
            socket.onopen = () => {
              console.log('WebSocket connected');
            };
        
            socket.onmessage = (event) => {
              const message = JSON.parse(event.data);
              console.log(message)
              setData(message);
            };
        
            socket.onclose = () => {
              console.log('WebSocket closed');
            };
        
            socket.onerror = (err) => {
              console.error('WebSocket error:', err);
            };
        
            return () => {
              socket.close();
            };
          }, [setData]);
    
    return (
        <>{children}</>
    )
}