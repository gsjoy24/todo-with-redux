import { ReactNode } from 'react';

type TContainer = {
	children: ReactNode;
};

const Container = ({ children }: TContainer) => {
	return <div className="h-full max-w-7xl">{children}</div>;
};

export default Container;
