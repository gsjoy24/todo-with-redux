import { Button } from '../ui/button';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Label } from '../ui/label';

const AddTodoModal = () => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button className="bg-gradient-to-tr  from-gray-800 to-gray-600 text-white rounded-[4px]">Add Todo</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] bg-white rounded-[8px]">
				<DialogHeader>
					<DialogTitle>Add Todo</DialogTitle>
					<DialogDescription>Add a new todo to your list.</DialogDescription>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="task" className="text-right">
							Task
						</Label>
						<Input id="task" placeholder="New task" className="col-span-3" />
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						<Label htmlFor="description" className="text-right">
							Description
						</Label>
						<Input id="description" placeholder="Description" className="col-span-3" />
					</div>
				</div>
				<DialogFooter>
					<Button type="submit">Save changes</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default AddTodoModal;
