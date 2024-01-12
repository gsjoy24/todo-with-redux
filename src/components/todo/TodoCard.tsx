import React from 'react';
import { Button } from '../ui/button';

const TodoCard = () => {
	return (
		<div className="bg-white rounded-xl flex justify-between items-center py-2 px-4">
			<input type="checkbox" name="" id="" />
			<p className="font-semibold">Todo Title</p>
			<p>Time</p>
			<p>Description</p>
			<div className="space-x-3 text-2xl">
				<Button className='text-xl'>🗑️</Button>
				<Button className='text-xl'>🖊️</Button>
			</div>
		</div>
	);
};

export default TodoCard;
