import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/header.tsx";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Header />
	</StrictMode>,
);
