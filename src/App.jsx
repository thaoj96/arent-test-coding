import MainRoutes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./App.css"

export default function App() {
  return (
    <BrowserRouter>
      <MainRoutes />
    </BrowserRouter>
  );
}
