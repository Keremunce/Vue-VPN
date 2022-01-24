import {createRouter, createWebHistory} from "vue-router";
import store from "@/store";



const  routes = [
  {
    name: "HomePage",
    path:  "/",
    // component: HomeCmp
    component: () => import("@/views/Home") ,
    props: true
  },
  {
      name: "AboutPage",
      path:  "/about",
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
    path: "/BuyingPage",
    name: "BuyingPage",
    component: () =>
    import("./views/BuyingPage.vue"),
    meta: { requiresAuth: true }
  },
  {
      name: "DownloadSection",
      path: "/DownloadSection",
      component: () => import("@/views/DownloadSection"),
      meta: { requiresAuth: true }
  },
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.user) {
      next({
        name: "TenthPage",
        query: { redirect: to.next }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
