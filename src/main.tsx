import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { PersonaProvider } from './providers/PersonaProvider.tsx'
import "@fontsource/open-sans";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './components/Pages/Home.tsx';
import { Persona } from './components/Pages/Persona.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/persona/:id',
    element: <Persona />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersonaProvider>
      <RouterProvider router={router} />
    </PersonaProvider>
  </React.StrictMode>,
)
