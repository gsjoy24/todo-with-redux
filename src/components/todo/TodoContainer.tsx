import { useAppSelector } from '@/redux/hook';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
		const { todos } = useAppSelector((state) => state.todos);
	return (
		<div>
			{/* buttons */}
			<div className="bg-slate-400 p-2 space-x-2">
				<AddTodoModal />

				<TodoFilter />
			</div>
			{/* todo list */}
			<div className="bg-gray-800 p-5 flex flex-col justify-center gap-3">
				{/* <div className="bg-gray-300 text-xl rounded-xl font-semibold p-2 flex justify-center items-center">
					<p className="text-gray-800">There is no task pending!</p>
				</div> */}
				<div className="bg-white rounded-xl flex justify-between items-center py-2 px-4">
					<input type="checkbox" name="" id="" />
					<p className="font-semibold">{todo.title}</p>
					<p>Time</p>
					<p>{todo.description}</p>
					<div className="space-x-3">
						<Button className="p-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
								<path
									fillRule="evenodd"
									d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
									clipRule="evenodd"
								/>
							</svg>
						</Button>
						<Button className="p-2">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
								<path d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
								<path d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
							</svg>
						</Button>
					</div>
				</div>
				{todos.map((todo) => {
					return <TodoCard key={todo.id} todo={todo} />;
				})}
			</div>
		</div>
	);
};

export default TodoContainer;
