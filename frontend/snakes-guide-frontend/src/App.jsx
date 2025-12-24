import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/Rootlayout'
import Homepage from './components/Homepage'
import SnakeInfo from './components/SnakeInfo'
import MainInfo from './components/MAININFO/MainInfo'

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
    },
    {
      path:'snakes-info/:id',
      element: <MainInfo />
    }
  ])



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
