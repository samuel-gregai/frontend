"use client";
import { useState, useEffect } from "react";

const TIMER_DURATION = 60_000; 
const STORAGE_KEY = "my-app-timer-start";

function usePersistTimer() {
  const [remainingTime, setRemainingTime] = useState<number>(0);

  useEffect(() => {
    const storedStart = localStorage.getItem(STORAGE_KEY);
    const startTime = storedStart ? parseInt(storedStart, 10) : Date.now();

  
    if (!storedStart) {
      localStorage.setItem(STORAGE_KEY, startTime.toString());
    }

    const interval = setInterval(() => {
      const now = Date.now();
      const timeLeft = Math.max(0, startTime + TIMER_DURATION - now);
      setRemainingTime(timeLeft);

      if (timeLeft <= 0) {
        clearInterval(interval);
        localStorage.removeItem(STORAGE_KEY);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return Math.ceil(remainingTime / 1000); 
}

export default usePersistTimer;
