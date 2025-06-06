import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Counter from "./components/counter.tsx";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Counter />
	</StrictMode>,
);
