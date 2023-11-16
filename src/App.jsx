import { RouterProvider, createBrowserRouter, Route } from 'react-router-dom';
import React from 'react';
import * as l from './layout';
import * as p from './pages';
import * as c from './components';
import * as h from './hooks';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <p.WelcomePage />,
      errorElement: <p.ErrorPage />,
    },
    {
      path: 'signup',
      element: <p.SignUpPage />,
      errorElement: <p.ErrorPage />,
    },
    {
      path: 'login',
      element: <p.LoginPage />,
      errorElement: <p.ErrorPage />,
    },
    {
      path: 'c/*',
      element: (
        <c.PrivateRoute> 
            <Route path="/" element={<l.MainPage />}>
              <Route 
                index 
                element={<p.Dashboard />}
              />
              <Route
                path="profile"
                element={<p.Profile />} 
              />
            </Route>   
        </c.PrivateRoute>
      )
    }
  ]);

  return (
    <h.AuthProvider>
      <RouterProvider router={router} />
    </h.AuthProvider>
  );
}

export default App;
