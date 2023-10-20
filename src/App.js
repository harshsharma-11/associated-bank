
import './App.css';
import Navbar from "./bank-components/navbar"
import Hero from "./pages/hero"
import Transaction from "./pages/transaction"
import Customers from "./pages/customer"
import Transfer from "./pages/transfer"

import Footer from "./bank-components/footer"
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Service from "./bank-components/service"
import ErrorPage from "./pages/errorpage"
function App() {
const router=createBrowserRouter([
  {
    path:"/",
    element:<Navbar/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"",
        element:<Hero/>

      },
      {
        path:"transaction-history",
        element:<Transaction/>

      },
      {
        path:"transfer",
        element:<Transfer/>

      },
      {
        path:"customers",
        element:<Customers/>

      }
    ],

  },
])


  return(
  <div className="App">
    <RouterProvider router={router}/>
    
    <Footer/>
    
    </div>
  );
}

export default App;
