import {
  createBrowserRouter,
  // createRoutesFromElements, 
  // Route, 
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductDetailsPage from './pages/ProductDetails';

// const routesDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<HomePage />} />
//     <Route path="/products" element={<ProductsPage />} />
//   </Route>
// )

// const router = createBrowserRouter([ {
//   path: '/',
//   element: <HomePage />
// },
// {
//   path: '/products',
//   element: <ProductsPage />
// }])

const router = createBrowserRouter([{
  path: '/',
  element: <RootLayout />,
  errorElement: <ErrorPage />,
  children: [
    { index: true, element: <HomePage /> },
    // { path: '', element: <HomePage /> },
    { path: 'products', element: <ProductsPage /> },
    { path: 'products/:productId', element: <ProductDetailsPage /> }//productId is dynamic, it is not hardcoded value but instead it is a placeholder that we chose how to name and that holds tha dynamic value that we provide!
  ]
}])

// const router = createBrowserRouter(routesDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
