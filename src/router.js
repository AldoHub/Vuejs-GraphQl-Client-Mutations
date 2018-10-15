import Vue from "vue";
import Router from "vue-router";
import Posts from "./components/Posts";
import Welcome from "./components/Welcome";
import AddPost from "./components/AddPost";


Vue.use(Router);

//define the routes
export default new Router({
    routes: [
        {
            path: "/",
            name: "welcome",
            component: Welcome
        },
        {
            path: "/posts",
            name: "posts",
            component: Posts
        },
        {
            path: "/addpost",
            name: "add-posts",
            component: AddPost
        },
      
    ]
});