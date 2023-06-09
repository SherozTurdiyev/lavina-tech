import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider, } from 'react-query';
import PageLoader from './components/shared/PageLoader/PageLoader';


const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<PageLoader />}>
        <BrowserRouter>
         <App />
        </BrowserRouter>
      </Suspense>

    </QueryClientProvider>
  </React.StrictMode>
);
