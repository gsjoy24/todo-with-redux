import { FormEvent, useState } from 'react';
import { Button } from '../ui/button';
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

import { addTodo } from '@/redux/features/todoSlice';
import { useAddTodoMutation } from '@/redux/api/api';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { timeStamp } from 'console';

const AddTodoModal = () => {
	const [task, setTask] = useState('');
	const [priority, setPriority] = useState('');
	const [description, setDescription] = useState('');
	// ! for local state with redux
	// const dispatch = useAppDispatch();


	// * for server
	const [addTodo, { data, isLoading, isError, isSuccess }] = useAddTodoMutation();
	console.log({data, isLoading, isError, isSuccess});

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		// ! for local state with redux
		// const id = Math.random().toString(36).slice(2, 7);
		// dispatch(addTodo({ id, title: task, description }));
		// dispatch(addTodo({ title: task, priority, description }));

		// * for server
		addTodo({ title: task, priority, description, isCompleted: false, timeStamp: new Date() });
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-gradient-to-tr  from-gray-800 to-gray-600 text-white rounded-[4px]">Add Todo</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Add Todo</DialogTitle>
					<DialogDescription>Add a new todo to your list.</DialogDescription>
				</DialogHeader>
				<hr />
				<form onSubmit={onSubmit}>
					<div onSubmit={onSubmit} className="grid gap-4 py-4">
						{/* title */}
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="task" className="text-right">
								Task
							</Label>
							<Input onBlur={(e) => setTask(e.target.value)} id="task" placeholder="New task" className="col-span-3" />
						</div>
						{/* priority */}
						<div className="grid grid-cols-4 items-center gap-4">
							<Label className="text-right">
								Priority
							</Label>
							<Select onValueChange={(value) => setPriority(value)}>
								<SelectTrigger className="w-[280px]">
									<SelectValue placeholder="Priority" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="high">High</SelectItem>
									<SelectItem value="medium">Medium</SelectItem>
									<SelectItem value="low">Low</SelectItem>
								</SelectContent>
							</Select>
						</div>
						{/* description */}
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="description" className="text-right">
								Description
							</Label>
							<Input
								onBlur={(e) => setDescription(e.target.value)}
								id="description"
								placeholder="Description"
								className="col-span-3"
							/>
						</div>
					</div>
					<div>
						<DialogClose asChild>
							<Button type="submit" className="ml-auto block">
								Save changes
							</Button>
						</DialogClose>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	);
};

export default AddTodoModal;
