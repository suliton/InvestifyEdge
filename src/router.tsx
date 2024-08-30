import { createHashRouter } from "react-router-dom";
import DashboardMain from "./components/dashboard";
import Overview from "./components/dashboard/layout/overview";
import Affliate from "./components/dashboard/layout/affliate";
import Deposit from "./components/dashboard/layout/deposit";
import Withdraw from "./components/dashboard/layout/withdraw";
import Deposits from "./components/dashboard/layout/deposit/deposits";
import RealEstate from "./components/dashboard/layout/deposit/real-estate";
import Crypto from "./components/dashboard/layout/deposit/crypto";

const router = createHashRouter([
    {
        path: '/',
        element: <DashboardMain/>,
        children: [
            {
                path: '/dashboard',
                element: <Overview/>
            },
            {
                path: '/affilliate',
                element: <Affliate/>
            },
            {
                path: '/withdraw',
                element: <Withdraw/>
            },
            {
                path: '/deposit',
                element: <Deposit/>,
                children: [
                    {
                        index: true,
                        path:'',
                        element: <Deposits/>
                    },
                    {
                        path:'/deposit/real-estate',
                        element: <RealEstate/>
                    },
                    {
                        path:'/deposit/crypto',
                        element: <Crypto/>
                    }
                ]
            },
        ]
    }
])

export default router;