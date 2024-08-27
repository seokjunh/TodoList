import { useContext } from "react";
import TodoListItem from "./TodoListItem";
import { TodoContext, TodoContextFn } from "./context/TodoProvider";

const TodoList = () => {
  const { todos } = useContext(TodoContext)!;
  const { toggleTodo, deleteTodo } = useContext(TodoContextFn)!;
  return (
    <>
      <ul className="flex flex-col gap-4 mt-4 max-h-[284px] overflow-scroll">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
