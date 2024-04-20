
"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineSun } from "react-icons/hi";
import { IoMoonOutline } from "react-icons/io5";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
    <button onClick={() => setTheme(theme==='dark'?'light':'dark')}>{theme==='dark'?<HiOutlineSun className ="text-xl"/>:<IoMoonOutline className ="text-xl"/>}</button>
   
    </div>
  )
};