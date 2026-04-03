import { useEffect, useState } from 'react';
import logo from '../assets/react.svg';
export default function Header() {
  const [theme , settheme] = useState("gOne")

  useEffect(()=>{
    document.documentElement.classList.add(theme)
  },[theme])
  
  return (
    <>
      <header>
        <div className="logo">
          <img src={logo} alt="App Logo" />
          <span>Task App</span>
        </div>
        <div className="themeSelector">
            <span className={theme === "light" ? "light activetheme" : "light"} 
            onClick={() => settheme("light")}></span>
            <span className={theme === "medium" ? "medium activetheme" : "medium"} 
            onClick={() => settheme("medium")}></span>
            <span className={theme === "dark" ? "dark activetheme" : "dark"} 
             onClick={() => settheme("dark")} ></span>
            <span className={theme === "gOne" ? "gOne activetheme" : "gOne"} 
             onClick={() => settheme("gOne")}></span>
            <span className={theme === "gTwo" ? "gTwo activetheme" : "gTwo"} 
             onClick={() => settheme("gTwo")}></span>
            <span className={theme === "gThree" ? "gThree activetheme" : "gThree"} 
             onClick={() => settheme("gThree")}></span>
        </div>
      </header>
    </>
  );
}