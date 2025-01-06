import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout';
import Projects from './Components/Projects'
import Aboutme from './Components/Aboutme'
import Contact from './Components/Contact'
function App() {
  
const router = createBrowserRouter([
  {
    path: '/pmadhurn.github.io', // Base path
    element: <Layout />,
    children: [
      {
        path: 'Aboutme',
        element: <Aboutme />
      },
      {
        path: 'Contact',
        element: <Contact />
      },
      {
        path: 'Projects',
        element: <Projects />
      }
    ]
  }
]);
  
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
