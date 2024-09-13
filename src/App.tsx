import { useEffect } from "react"
import useTheme from "./hooks/useTheme"
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";

export default function App() {
  const { initAppTheme } = useTheme();

  useEffect(() => {
    initAppTheme();
  },[]);


  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/sign-in/" element={<SignInPage/>}/>
    </Routes>
  )
}