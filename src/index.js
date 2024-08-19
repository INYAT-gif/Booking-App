import ReactDom from "react-dom/client";
import AppRouter from './axios-router/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(

  <div className="container">
    <AppRouter />
  </div>
);