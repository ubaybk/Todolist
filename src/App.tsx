import { useState } from "react"
import Form from "./components/Form"
import Todo from "./components/Todo"



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
  console.log(inputTodo)
  // console.log(todo)
  return(
    <div className="bg-teal-300 h-screen w-screen p-4">
      <div className="bg-slate-100 p-4 max-w-[500px] w-full m-auto rounded-lg shadow-xl ">
        <h1 className="text-center mb-4 text-2xl font-bold text-teal-700">TODOLIST</h1>
        {/* <Form/> */}
        <input className='w-full text-xl rounded-lg p-[3px]' onChange={(e)=>setInputTodo(e.target.value)}value={inputTodo} />
        <button onClick={()=>addTodo()}>submit</button>
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
