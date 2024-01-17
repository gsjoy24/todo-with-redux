import { useAppSelector } from '@/redux/hook';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';
import { useGetTodosQuery } from '@/redux/api/api';
import TTodo from '@/interfaces/TTodo';
import { useState } from 'react';

const TodoContainer = () => {
	// const { todos } = useAppSelector((state) => state.todos);
	const [priority, setPriority] = useState('');
	const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

	if (isLoading) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			{/* buttons */}
			<div className='bg-slate-400 p-2 space-x-2'>
				<AddTodoModal />
				<TodoFilter priority={priority} setPriority={setPriority} />
			</div>
			{/* todo list */}
			<div className='bg-gray-800 p-5 flex flex-col justify-center gap-3'>
				{todos && todos.length === 0 ? (
					<div className='bg-gray-300 text-xl rounded-xl font-semibold p-2 flex justify-center items-center'>
						<p className='text-gray-800'>There is no task pending!</p>
					</div>
				) : (
					<>
						{todos.map((todo: TTodo) => {
							return <TodoCard key={todo._id} todo={todo} />;
						})}
					</>
				)}
			</div>
		</div>
	);
};

export default TodoContainer;
