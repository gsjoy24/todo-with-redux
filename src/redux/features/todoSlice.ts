import { PayloadAction, createSlice } from '@reduxjs/toolkit';
type TTodo = {
	_id?: string;
	title: string;
	description: string;
	isCompleted?: boolean;
	priority: string;
};
type TInitialState = {
	todos: TTodo[];
};

const initialState: TInitialState = {
	todos: []
};
const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<TTodo>) => {
			state.todos.push({ ...action.payload, isCompleted: false });
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter((todo) => todo._id !== action.payload);
		},
		toggleComplete: (state, action: PayloadAction<string>) => {
			const task = state.todos.find((todo) => todo._id === action.payload);
			task!.isCompleted = !task?.isCompleted;
			const indexToMove = state.todos.findIndex((todo) => todo._id === action.payload);
			if (indexToMove !== -1) {
				const movedTask = state.todos.splice(indexToMove, 1)[0];
				state.todos.push(movedTask);
			}
		}
	}
});

export const { addTodo, removeTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
