import { useEffect } from "react"
import useTheme from "./hooks/useTheme"

export default function App() {
  const { initAppTheme, toggleTheme } = useTheme();

  useEffect(() => {
    initAppTheme();
  },[]);


  return (
    <div className="w-screen h-screen bg-rose-500 dark:bg-indigo-500">
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button className="border-2 border-slate-800 p-2" onClick={()=>toggleTheme()}>Toggle</button>
    </div>
  )
}