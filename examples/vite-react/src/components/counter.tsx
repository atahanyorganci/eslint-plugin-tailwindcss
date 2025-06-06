import type { FC } from "react";
import { useState } from "react";

const Counter: FC = () => {
	const [count, setCount] = useState(0);

	return (
		// `flex` should be before height and width
		<div className="h-screen w-screen flex items-center justify-center flex-col gap-2">
			<p className="text-2xl font-medium">{`Count is ${count}`}</p>
			<button
				// `cursor-pointer` should be first
				className="bg-purple-700 text-white rounded-lg text-lg px-4 py-2 cursor-pointer"
				onClick={() => setCount(count => count + 1)}
			>
				Increment
			</button>
		</div>
	);
};

export default Counter;
