import { useState } from "react"
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GitExpertApp = () => {
  const [category, setCategory] = useState(['']);

  const onAddCategory = (newData) => {
    let newCategories = new Set([...category, newData])
    setCategory(Array.from(newCategories));
  }
  return (
  <>
    <div className="bg-slate-100 w-full h-auto p-2 flex justify-center items-center flex-col">
      {/* titulo */}
      <h1 className="font-medium text-xl">GifExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory} />
    </div>
    {category.map(item => (<li key={item}>{item}</li>))}
    <GifGrid/>
  </>
  
  )
}
