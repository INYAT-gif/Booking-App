import ReactDom from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import AxiosDemo from "./ex8-axios-router/AxiosDemo";
import Header from "./ex8-axios-router/Header";
import RouterDemo from "./ex8-axios-router/RouterDemo";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <div className="container">
    <RouterDemo />
  </div>
);
