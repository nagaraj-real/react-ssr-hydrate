"use client"
import React, { useEffect } from "react";

export const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
   useEffect(() => {
      console.log('in theme');
   }, [])

   return <>
      <ThemeContext.Provider value="red">
         {children}
      </ThemeContext.Provider >
   </>
}
