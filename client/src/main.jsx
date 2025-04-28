import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import App from './App.jsx';

import './index.css';
import store from './store/index.js';
import { ApiProvider } from './hooks/useApi.jsx';

createRoot(document.getElementById('root')).render(
    <ReduxProvider store={store}>
        <BrowserRouter>
            <ApiProvider>
                <App />
            </ApiProvider>
        </BrowserRouter>
    </ReduxProvider>
);