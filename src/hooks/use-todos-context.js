import { useContext } from "react";
import TodoContext from "../context/todos";

function useTodoContext() {
    return useContext(TodoContext);
}

export default useTodoContext