import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import "remixicon/fonts/remixicon.css";
import Sidebar from "./Components/Sidebar/Sidebar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Sidebar />
    <App />
  </BrowserRouter>
);
