import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import  {router} from "./common/routes/Routes";
import {BrowserRouter, RouterProvider} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
// <BrowserRouter>
//     <App/>
// </BrowserRouter>
);


