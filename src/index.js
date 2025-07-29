import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "./context/todos";

const en = document.getElementById("root");
const root = ReactDOM.createRoot(en);

root.render( 
    <Provider>
        <App />
    </Provider>
);
