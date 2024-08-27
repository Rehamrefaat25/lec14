import './App.css'
import { createContext,useState } from 'react'
export const themecontext=createContext(null)
import Header from './Components/Header/Header'
function App() {
const[theme,settheme]=useState("light")
function changetheme(value){settheme(value)}
  return (
<main >
    <themecontext.Provider value={{theme,changetheme}}>
<Header></Header>
    </themecontext.Provider>
    </main>
    
  )
}

export default App
