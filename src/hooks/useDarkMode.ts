import { useEffect, useState } from "react";

export default function useDarkMode(){

   const [theme, setTheme] = useState('light')
   const colorTheme = theme === 'dark' ? 'light' : 'dark'

   useEffect(() => {
     const root = window.document.documentElement;
     localStorage.getItem('theme')

     root.classList.remove(colorTheme)
     root.classList.add(theme)

   }, [theme])

   return [colorTheme, setTheme] as const
}