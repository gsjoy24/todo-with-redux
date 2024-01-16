import { useAppSelector } from '@/redux/hook';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';
import { Button } from '../ui/button';
import { useGetTodosQuery } from '@/redux/api/api';

const TodoContainer = () => {
	// const { todos } = useAppSelector((state) => state.todos);
	const { data: todos, isLoading, isError } = useGetTodosQuery(null);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			{/* buttons */}
			<div className="bg-slate-400 p-2 space-x-2">
				<AddTodoModal />
				<TodoFilter />
			</div>
			{/* todo list */}
			<div className="bg-gray-800 p-5 flex flex-col justify-center gap-3">
				{todos && todos.length === 0 ? (
					<div className="bg-gray-300 text-xl rounded-xl font-semibold p-2 flex justify-center items-center">
						<p className="text-gray-800">There is no task pending!</p>
					</div>
				) : (
					<>
						{todos.map((todo) => {
							return <TodoCard key={todo._id} todo={todo} />;
						})}
					</>
				)}
			</div>
		</div>
	);
};

export default TodoContainer;
