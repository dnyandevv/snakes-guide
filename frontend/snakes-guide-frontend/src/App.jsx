import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import RootLayout from './components/Rootlayout'
import Homepage from './components/Homepage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children:[
        {
          path: '', element: <Homepage />
        }
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
