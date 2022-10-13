import React from 'react'
import App from './App'
import './index.css'
import {BrowserRouter as Router} from 'react-router-dom';
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);


