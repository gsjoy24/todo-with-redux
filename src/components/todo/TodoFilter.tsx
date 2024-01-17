import React from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';

const TodoFilter = ({ priority, setPriority }: { priority: string; setPriority: (value: string) => void }) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button className='bg-gradient-to-tr  from-gray-800 to-gray-600 text-white rounded-[4px]'>Filter</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-56 bg-white'>
				<DropdownMenuLabel>Filter by priority</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup value={priority} onValueChange={setPriority}>
					<DropdownMenuRadioItem value=''>All</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value='High'>High</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value='Medium'>Medium</DropdownMenuRadioItem>
					<DropdownMenuRadioItem value='Low'>Low</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default TodoFilter;
