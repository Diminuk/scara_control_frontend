"use client"

import React, { useEffect, useRef } from "react"
import { useIOStateStore } from "@/lib/IOSocket"

const WS_URL = 'ws://localhost:8000/status_io/iosocket';

export default function IOProvider({children}: {children:  React.ReactNode }){
    const setData = useIOStateStore((state) => state.update);
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
    
    return (<>{children}</>)
}