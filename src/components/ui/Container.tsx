import { ReactNode } from 'react';

type TContainer = {
	children: ReactNode;
};
const Container = ({ children }: TContainer) => {
	return <div className="h-full max-w-7xl bg-red-600">{children}</div>;
};

export default Container;
