// import "../styles/App.css";
import Body from './Body'
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import FrontPage from './FrontPage';
import Products from './Products';
import ProtectedRoutes from './ProtectedRoutes';
import ClothInfo from './ClothInfo';
import Login from './Login';
import Signup from './Signup';
import WishList from './WishList';
import Cart from './Cart';
import SearchPage from './SearchPage';
import Order from './Order';
import OrderNow from './OrderNow';
import Filter from './Filter';
import OrderDetails from './OrderDetails'
import UserAccount from './UserAccount';
import UpdatePassword from './UpdatePassword';

import DeleteAccount from './DeleteAccount';
import Dummy from '../dummy/Dummy';

function App() {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element: <Body/>,
      children : [
        {
          path:"/",
          element:<FrontPage/>
        },
        {
          path:"/menware",
          element: <Products/>
        },
        {
          path : "/womenware",
          element : <Products/>
        },
        {
          path : "/ClothInfo/:resId",
          element : <ClothInfo/>
        },
        {
          path:"/login",
          element : <Login/>
        },
        {
          path:"/signuppage",
          element:<Signup/>
        },
        {
          path : "/wishlist",
          element : <ProtectedRoutes component={<WishList/>}/>
        },
        {
          path : "/cart",
          element: <ProtectedRoutes component={<Cart/>}/> 
        },
        {
          path: "/search/:searchText",
          element:<SearchPage/>
        },
        {
          path : "/order",
          element : <ProtectedRoutes component={<Order/>}/> 
        },
        {
          path : `/buynow/:resId`,
          element : <ProtectedRoutes component={<OrderNow/>}/>
        },
        {
          path : "/filter",
          element:<Filter/>
        },
        {
          path : `/orderDetails/:resId`,
          element : <ProtectedRoutes component={<OrderDetails/>}/>
        },
        {
          path : "/useraccount/",
          element : <ProtectedRoutes component={<UserAccount/>}/>
        },
        {
          path : "/updatepassword/",
          element : <UpdatePassword/>
        },
        {
          path : "/deleteaccount/",
          element : <DeleteAccount/>
        }
      ]
    }
  ])
  return <div >
    <RouterProvider router = {appRouter}/>
    </div>;
}

export default App;
