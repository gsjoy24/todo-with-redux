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
import { useAppDispatch } from '@/redux/hook';
import { addTodo } from '@/redux/features/todoSlice';

const AddTodoModal = () => {
	const [task, setTask] = useState('');
	const [priority, setPriority] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useAppDispatch();

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		// const id = Math.random().toString(36).slice(2, 7);
		// dispatch(addTodo({ id, title: task, description }));
		dispatch(addTodo({ title: task, priority, description }));
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
							<Label htmlFor="priority" className="text-right">
								Priority
							</Label>
							<Input
								onBlur={(e) => setPriority(e.target.value)}
								id="priority"
								placeholder="Priority"
								className="col-span-3"
							/>
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
