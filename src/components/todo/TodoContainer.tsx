import { useAppSelector } from '@/redux/hook';
import AddTodoModal from './AddTodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';
import { Button } from '../ui/button';

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
				{todos.length === 0 ? (
					<div className="bg-gray-300 text-xl rounded-xl font-semibold p-2 flex justify-center items-center">
						<p className="text-gray-800">There is no task pending!</p>
					</div>
				) : (
					<>
						<div className="bg-white rounded-xl flex justify-between items-center py-2 px-4">
							<input type="checkbox" name="" id="" />
							<p className="font-semibold">Title</p>
							<p>Time</p>
							<p>Description</p>
							<div className="space-x-3">
								<div></div>
								<div>Action</div>
							</div>
						</div>
						{todos.map((todo) => {
							return <TodoCard key={todo.id} todo={todo} />;
						})}
					</>
				)}
			</div>
		</div>
	);
};

export default TodoContainer;
