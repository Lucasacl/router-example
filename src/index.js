import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import"semantic-ui-css/semantic.min.css";
import {RouterProvider} from "react-router-dom";
import { router } from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);

