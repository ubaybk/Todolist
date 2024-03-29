import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';


interface TodoProps {
    todos: string
}

function Todo ({todos} : TodoProps){
return(
    <li className="p-2 bg-teal-300 my-2 rounded-md uppercase shadow-sm">
        <div className='flex items-center justify-between'>
            <p>
                {todos}
            </p>
            <div className='flex gap-3'>
                <button>
                    <CheckIcon />
                </button>
                <button>
                    <DeleteIcon />
                </button>
            </div>
        </div>
    </li>
)
}
export default Todo