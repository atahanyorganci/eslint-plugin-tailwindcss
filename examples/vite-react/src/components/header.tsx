import type { FC } from "react";

const Header: FC = () => (
	// eslint-disable-next-line tailwindcss/no-unnecessary-arbitrary-value
	<div className="relative mx-auto w-[50%]">
		{/* eslint-disable-next-line tailwindcss/no-contradicting-classnames */}
		<h1 className="text-2xl text-3xl font-medium">Header</h1>
		{/* eslint-disable-next-line tailwindcss/no-custom-classname */}
		<p className="custom-font text-sm text-gray-500">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
		</p>
		{/* eslint-disable-next-line tailwindcss/no-unnecessary-negative-arbitrary-value */}
		<span className="absolute top-[-4px] right-[-4px] size-2 bg-red-500" />
	</div>
);

export default Header;
