import type { FC } from "react";
import { useState } from "react";

const Counter: FC = () => {
	const [count, setCount] = useState(0);

	return (
		// eslint-disable-next-line tailwindcss/shorthand
		<div className="flex h-full w-full flex-col items-center justify-center gap-2">
			{/* eslint-disable-next-line tailwindcss/no-irregular-whitespace */}
			<p className="text-2xl font-medium ">{`Count is ${count}`}</p>
			<button
				// eslint-disable-next-line tailwindcss/classname-order
				className="bg-purple-700 text-white rounded-lg text-lg px-4 py-2 cursor-pointer"
				onClick={() => setCount(count => count + 1)}
			>
				Increment
			</button>
		</div>
	);
};

export default Counter;
