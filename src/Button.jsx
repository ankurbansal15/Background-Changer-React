
function Button({color,setColor}){

    color = color.charAt(0).toUpperCase() + color.slice(1)
return (
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-bold" 
      onClick={()=>setColor(color)}
      style={{backgroundColor:color}}>{color}</button>
)
}
export default Button