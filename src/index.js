import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"
import App from './App';
import App2 from './App2'
import { ContextProvider } from './context/contextProvider';
ReactDOM.render(<ContextProvider><App2/></ContextProvider>, document.getElementById('root'))

