import {createRouter, createWebHistory} from "vue-router";
// import HomeCmp from "@/views/Home"

const routes = [
    {
        name: "HomePage",
        path:  "/",
        // component: HomeCmp
        component: () => import("@/views/Home")  
    },
    
    {
        name: "AboutPage",
        path:  "/about",
        // component: HomeCmp
        component: () => import("@/views/About")
    },

    {
        name: "ThirdPage",
        path: "/thirdPage",
        component: () => import("@/views/thirdPage")
    },
    {
        name: "FourthPage",
        path: "/fourthPage",
        component: () => import("@/views/fourthPage")
    },
    {
        name: "FifthPage",
        path: "/fifthPage",
        component: () => import("@/views/fifthPage")
    },
    {
        name: "SixthPage",
        path: "/sixthPage",
        component: () => import("@/views/sixthPage")
    },
    {
        name: "SeventhPage",
        path: "/seventhPage",
        component: () => import("@/views/seventhPage")
    },
    {
        name: "EighthPage",
        path: "/eighthPage",
        component: () => import("@/views/eighthPage")
    },
    {
        name: "NinethPage",
        path: "/ninethPage",
        component: () => import("@/views/ninethPage")
    },
    {
        name: "TenthPage",
        path: "/tenthPage",
        component: () => import("@/views/tenthPage")
    },
    {
        name: "KrediForm",
        path: "/Kredi_Form",
        component: () => import("@/views/Kredi_Form")
    },
    {
        name: "DownloadSection",
        path: "/DownloadSection",
        component: () => import("@/views/DownloadSection")
    },

];
const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;