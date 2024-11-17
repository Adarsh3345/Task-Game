import './App.css';
import Home from './Components/Home';
import New from './Components/New';
import Login from './Components/Login';
import Register from './Components/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />  
    },
    {
      path: "/new",
      element: <New />  
    },
    {
      path: "/login",
      element: <Login />  
    },
    {
      path: "/register",
      element: <Register />  
    }
  ]);

  return( <RouterProvider router={router} />);
}

export default App;
