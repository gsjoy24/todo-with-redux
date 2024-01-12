import { Button } from '../ui/button';
import TodoCard from './TodoCard';

const TodoContainer = () => {
	return (
		<div>
			{/* buttons */}
			<div className="bg-slate-400 p-2 space-x-2">
				<Button className="bg-gradient-to-tr  from-gray-800 to-gray-600 text-white rounded-[4px]">Add Todo</Button>
				<Button className="bg-gradient-to-tr  from-gray-800 to-gray-600 text-white rounded-[4px]">Filter</Button>
			</div>
			{/* todo list */}
			<div className="bg-gray-800 p-5 flex flex-col justify-center gap-3">
				<div className="bg-gray-300 text-xl rounded-xl font-semibold p-2 flex justify-center items-center">
					<p className="text-gray-800">There is no task pending!</p>
				</div>
				<TodoCard />
				<TodoCard />
				<TodoCard />
			</div>
		</div>
	);
};

export default TodoContainer;
