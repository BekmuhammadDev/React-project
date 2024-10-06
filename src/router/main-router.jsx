import { createBrowserRouter } from "react-router-dom";
import { Home, About, Contact, Pricing, Product,Error,Legal,Help,SettingsProfile } from "@pages";
import { Register,AuthLayout } from "@/layout";
export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            
            { path: "/register", element: <Register /> },
            { path: "/", element: <Home /> },
            { path: "/product", element: <Product /> }, 
            { path: "/pricing", element: <Pricing /> }, 
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/ProfileSetting", element: <SettingsProfile /> },
            { path: "/legal", element: <Legal /> },
            { path: "/help", element: <Help /> }


        ]
    },
    {
        path: "/auth-layout",
        element: <AuthLayout />
    },
    {
        path: "*",
        element: <Error />
    }
]);


















// export const MainRouter = () => {

//     return (
//         <>
//             <Routes>

//                 <Route path="/" element={<Dashboard />}>
//                     <Route path="/" element={<Home />} />
//                     <Route path="/leads" element={<Leads />} />
//                     <Route path="/orders" element={<Orders />} />
//                     <Route path="/users" element={<Users />} />
//                 </Route>

//                 <Route path="/login" element={<AuthLayout />} />
//                 <Route path="*" element={<Error />} />
                
//             </Routes>
//         </>
//     );
// };
