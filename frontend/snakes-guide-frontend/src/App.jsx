import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/Rootlayout'
import Homepage from './components/Homepage'
import SnakeInfo from './components/SnakeInfo'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children:[
        {
          index: true,
          element: <Homepage />,
        },
        {
          path: 'snakes-info',
          element: <SnakeInfo />,
        },
      ]
    }
  ])



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
