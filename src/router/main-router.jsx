import { createBrowserRouter } from "react-router-dom";
import { Home, About, Contact, Pricing, Product,Error,Legal,Help,SettingsProfile,ProfileSave,CreateWebPage,Register,CretStart,CreatLogo,CardUntiteld } from "@pages";
import { AuthLayout,MainLayout } from "@/layout";
export const router = createBrowserRouter([
    {
        path: "/",
        // element: <MainLayout />,
        children: [
            { path: "/home", element: <Home /> },
            { path: "/", element: <MainLayout /> },     
            {path: "/register",element: <Register />},       
            { path: "/product", element: <Product /> }, 
            { path: "/pricing", element: <Pricing /> }, 
            { path: "/about", element: <About /> },
            { path: "/contact", element: <Contact /> },
            { path: "/ProfileSetting", element: <SettingsProfile /> },
            { path: "/profilesave", element: <ProfileSave /> },
            { path: "/createWebPage", element: <CreateWebPage /> },
            { path: "/creatLogo", element: <CreatLogo /> },
            { path: "/CardUntiteld", element: <CardUntiteld /> },
            { path: "/creatStart", element: <CretStart /> },
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
