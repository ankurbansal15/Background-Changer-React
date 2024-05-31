import { useState } from "react"
import Button from "./Button"
function App() {
  const [color, setColor] = useState("black")

  return (
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
      <Button color="red" setColor={()=>setColor("red")}/>
      <Button color="green" setColor={()=>setColor("green")}/>
      <Button color="blue" setColor={()=>setColor("blue")}/>
      <Button color="orange" setColor={()=>setColor("orange")}/>
      <Button color="pink" setColor={()=>setColor("pink")}/>
      <Button color="violet" setColor={()=>setColor("violet")}/>
      <Button color="grey" setColor={()=>setColor("grey")}/>
      <Button color="olive" setColor={()=>setColor("olive")}/>
      <Button color="hotpink" setColor={()=>setColor("hotpink")}/>
      <Button color="skyblue" setColor={()=>setColor("skyblue")}/>

    </div>
    </div>
   </div>
  )
}

export default App
