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
import CareerSection from "./components/pages/career";
import Layout from "./components/pages/Layout";
import Company from "./components/pages/company";
import Contact from "./components/pages/contact";
import Login from "./components/auth/user/login";
import CreateAccount from "./components/auth/user/signup";
import ForgotPassword from "./components/auth/user/forgotPassword";
import ResetPassword from "./components/auth/user/resetPassword";
import Verify from "./components/auth/user/verify";
const router = createHashRouter([
    {
        path: '/',
        element: (
            <Entry />

        ),
    },
    {
        path: '/career',
        element: (
            <Layout>
                <CareerSection />
            </Layout>
        ),
    },
    {
        path: '/company',
        element: (
            <Layout>
                <Company />
            </Layout>
        ),
    },
    {
        path: '/contact',
        element: (
            <Layout>
                <Contact />
                <section className=" w-full mt-12">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.535261295702!2d-2.5510621839466997!3d51.44928762235756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718c0da0e5a9a3%3A0x6b44f7d58ae4050b!2sHanham%2C%20Bristol%20BS15%2C%20UK!5e0!3m2!1sen!2sus!4v1694210734851!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        allowFullScreen={true}
                        loading="lazy"
                        className="border-0 rounded-lg"
                        title="Google Map"
                    ></iframe>
                </section>
            </Layout>
        ),
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/signup',
        element: <CreateAccount />,
    },
    {
        path: '/forgot-password',
        element: <ForgotPassword />,
    },
    {
        path: '/reset-password/:id',
        element: <ResetPassword />,
    },
    {
        path: '/verify',
        element: <Verify />,
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
