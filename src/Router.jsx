import {createBrowserRouter} from "react-router-dom";
import Product from "./pages/Product";
import App from "./pages/App";
import Memo from "./pages/Memo";
import Deu from "./pages/Deu";
import Home from "./pages/Home";



export const router = createBrowserRouter([
    {
        path: "/",
        element:<App></App>,
        errorElement:<img src="https://thumbs.dreamstime.com/z/error-not-found-page-white-background-vector-design-98812910.jpg" className=" h-screen w-screen" />
,
         children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/Memo",
                element:<Memo></Memo>
            },
            {
                path:"/Deu",
                element:<Deu></Deu>
            },
            {
                path:"/product",
                element:<Product></Product>
            }
         ]
    },
]);


