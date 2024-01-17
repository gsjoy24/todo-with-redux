import { useAppDispatch } from '@/redux/hook';
import { Button } from '../ui/button';
// import { removeTodo, toggleComplete } from '@/redux/features/todoSlice';
import TTodo from '@/interfaces/TTodo';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '@/redux/api/api';

const TodoCard = ({ todo }: { todo: TTodo }) => {
	const dispatch = useAppDispatch();
	const [deleteTodo] = useDeleteTodoMutation();

	const [UpdateTodo] = useUpdateTodoMutation();
	const toggleComplete = (id: string) => {
		const data = { isCompleted: !todo.isCompleted };
		UpdateTodo({ id, data });
	};

	return (
		<div className='bg-white rounded-xl flex justify-between items-center py-2 px-4'>
			<input
				className='mr-3'
				type='checkbox'
				name=''
				id=''
				onChange={() => toggleComplete(todo._id)}
				checked={todo.isCompleted}
			/>
			<p className='font-semibold flex-1'>{todo.title}</p>
			<div className='flex-1 flex items-center gap-2'>
				<div
					className={`size-3 rounded-full ${
						todo.priority === 'High' ? 'bg-red-500' : todo.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
					}`}
				></div>
				<p>{todo.priority}</p>
			</div>
			<p className='flex-1'>
				{todo.isCompleted ? <p className='text-green-500'>completed</p> : <p className='text-red-500'>pending</p>}
			</p>
			<p className='flex-[2]'>{todo.description}</p>
			<div className='space-x-3'>
				{/* remove */}
				<Button className='p-2' onClick={() => deleteTodo(todo._id)}>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='w-4 h-4'>
						<path
							fillRule='evenodd'
							d='M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z'
							clipRule='evenodd'
						/>
					</svg>
				</Button>
				{/* edit */}
				<Button className='p-2'>
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='w-4 h-4'>
						<path d='M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z' />
						<path d='M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z' />
					</svg>
				</Button>
			</div>
		</div>
	);
};

export default TodoCard;
