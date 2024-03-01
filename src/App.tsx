import { useState } from "react"

import Todo from "./components/Todo"
import NoteAddIcon from '@mui/icons-material/NoteAdd';



function App() {
  const [todo,setTodo] = useState<any>([])
  const [inputTodo,setInputTodo] = useState("")
  const addTodo = () =>{
    if (inputTodo){
      setTodo([...todo,inputTodo])
      setInputTodo("")
    }else{
      alert("input text")
    }

    
    
  }

  // console.log(todo)
  return(
    <div className="bg-teal-300 h-screen w-screen p-4">
      <div className="bg-slate-100 p-4 max-w-[500px] w-full m-auto rounded-lg shadow-xl ">
        <h1 className="text-center mb-4 text-2xl font-bold text-teal-700">TODOLIST</h1>
        {/* <Form/> */}

        <div className="relative">
        <form className='bg-teal-300 p-4 rounded-lg items-center justify-between flex'>
            <input className='w-full text-xl rounded-lg p-[3px]' onChange={(e)=>setInputTodo(e.target.value)}value={inputTodo} />  
        </form>
        
        </div>
        <button onClick={()=>addTodo()} className='rounded-lg text-gray-800'><NoteAddIcon /></button>

        
        {/* <button onClick={()=>addTodo()}>submit</button> */}
        <ul>
          {todo.map((todos:any, index:any) =>(
            <Todo key={index} todos = {todos}/>
          ))}
        </ul>
        <p className="text-center">Kamu memiliki {todo.length} list</p>
      </div>
    </div>
  )
}

export default App
