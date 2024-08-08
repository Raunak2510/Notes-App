import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import Protected from "./private_route.js";
import MainPage from "../pages/mainpage/mainpage.js";
import SignIn from "../sections/partials/login.js";
import SignUp from "../sections/partials/signup.js";
import { isAuthenticated } from "./helper.js";





const router = createBrowserRouter(
   
    createRoutesFromElements(
        <Route path="/">
            <Route element={<Protected />}>
                <Route index element={<MainPage userName={"user"} />} />
            </Route>
            <Route path="login" element={<SignIn />} 
            loader={isAuthenticated}
            />
            <Route path="register" element={<SignUp />}
            loader={isAuthenticated} />
            {/* <Route path="logout" element={<SignIn/>}
            loader={isAuthenticated}
            /> */}
        </Route>
    )
);

const Index = () => {
    return <RouterProvider router={router} />;
}

export default Index;
