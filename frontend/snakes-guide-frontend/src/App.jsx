import './App.css'
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router' // 1. Added ScrollRestoration
import RootLayout from './components/Rootlayout'
import Homepage from './components/Homepage'
import SnakeInfo from './components/SnakeInfo'
import MainInfo from './components/MAININFO/MainInfo'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <ScrollRestoration /> {/* 2. This handles the scroll reset automatically */}
          <RootLayout />
        </>
      ),
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
      element: (
        <>
          <ScrollRestoration /> {/* 3. Also added here for your standalone route */}
          <MainInfo />
        </>
      )
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App