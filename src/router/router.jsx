import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import HomePage from "../pages/home/HomePage";
import AboutPage from "../pages/about/AboutPage";
import ServicePage from "../pages/service/ServicePage";
import FundraisingPage from "../pages/fundraising/FundraisingPage";
import PodcastPage from "../pages/podcast/PodcastPage";
import AuctionPage from "../pages/auction/AuctionPage";
import ContactPage from "../pages/contact/ContactPage";
import TermPage from "../pages/term/TermPage";


export const router = createBrowserRouter([
    {
        path:"/",
        element : <Layout></Layout>,
        children : [
            {
                path:"/",
                element : <HomePage></HomePage>
            },
            {
                path:"about",
                element : <AboutPage></AboutPage>,
            },
            {
                path : "service",
                element : <ServicePage></ServicePage>
            },
            {
                path : "fundraising-get-involved",
                element : <FundraisingPage></FundraisingPage>
            },
            {
                path : "auction",
                element : <AuctionPage></AuctionPage>
            },
            {
                path : "contact",
                element : <ContactPage></ContactPage>
            },
            {
                path : "podcast",
                element : <PodcastPage></PodcastPage>
            },
            {
                path : "/terms",
                element : <TermPage></TermPage>
            }
        ]
    }
])