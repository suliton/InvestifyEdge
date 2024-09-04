import { createHashRouter } from "react-router-dom";
// import HeroPage from "./components/pages/hero";
import DashboardMain from "./components/dashboard";
import Overview from "./components/dashboard/layout/overview";
import Deposits from "./components/dashboard/layout/deposit/deposits";
import Withdraw from "./components/dashboard/layout/withdraw";
import RealEstate from "./components/dashboard/layout/deposit/real-estate";
import Crypto from "./components/dashboard/layout/deposit/crypto";
import Affliate from "./components/dashboard/layout/affliate";
import Entry from "./components/pages";
import Login from "./components/auth/admin/Login";
import Signup from "./components/auth/admin/Signup";

const router = createHashRouter([
    {
        path: '/',
        element: <Entry />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: 'dashboard',
        element: <DashboardMain />,
        children: [
            {
                path: '',
                element: <Overview />
            },
            {
                path: '/dashboard/deposit',
                element: <Deposits />,
            },
            {
                path: '/dashboard/real-estate',
                element: <RealEstate />
            },
            {
                path: '/dashboard/crypto',
                element: <Crypto />
            },
            {
                path: '/dashboard/withdraw',
                element: <Withdraw />
            },
            {
                path: '/dashboard/affiliate',
                element: <Affliate />
            },
        ]
    }
]);

export default router;
