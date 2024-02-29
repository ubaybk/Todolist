import { useState } from "react"
import Form from "./components/Form"
import Todo from "./components/Todo"



function App() {
  const [todo] = useState(['Code', 'Code2'])

  return(
    <div className="bg-teal-300 h-screen w-screen p-4">
      <div className="bg-slate-100 p-4 max-w-[500px] w-full m-auto rounded-lg shadow-xl ">
        <h1 className="text-center mb-4 text-2xl font-bold text-teal-700">TODOLIST</h1>
        <Form/>
        <ul>
          {todo.map((todos, index) =>(
            <Todo key={index} todos = {todos}/>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
