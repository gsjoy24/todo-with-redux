import TodoContainer from '@/components/todo/TodoContainer';
import Container from '@/components/ui/Container';

const Todo = () => {
	return (
		<Container>
			<h1 className='text-3xl font-bold text-center'>My Todos</h1>
			<TodoContainer />
		</Container>
	);
};

export default Todo;
