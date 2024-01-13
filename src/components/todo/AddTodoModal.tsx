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

const AddTodoModal = () => {
	const [task, setTask] = useState('');
	const [description, setDescription] = useState('');

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log({ task, description });
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
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="task" className="text-right">
								Task
							</Label>
							<Input onBlur={(e) => setTask(e.target.value)} id="task" placeholder="New task" className="col-span-3" />
						</div>
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
