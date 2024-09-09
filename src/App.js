import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from '../src/components/pages/HomePage'
import MainLayout from './components/pages/MainLayout'
import JobsPage from './components/pages/JobsPage'
import NotFoundPage from '../src/components/pages/NotFoundPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element ={ <HomePage/>}/> 
      <Route path='/jobs' element={<JobsPage/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Route> 
  )
)

const App = () => {
  return <RouterProvider router={router}/>
}

export default App