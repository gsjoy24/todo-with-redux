import { PayloadAction, createSlice } from '@reduxjs/toolkit';
type TTodo = {
	title: string;
	description: string;
	isCompleted: boolean;
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
			state.todos.push(action.payload);
		}
	}
});

export default todoSlice.reducer;
