import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue';
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "@/components/nav/NotFound"

let baseRoute = process.env.NODE_ENV === "production" ? "/vue-router-exp/dist" : "/";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: baseRoute,
            redirect: `${baseRoute}teams`
        },
        {
            name: "teams",
            path: `${baseRoute}teams`,
            component: TeamsList,
            children: [
                {
                    name: "team-members",
                    path: 'members/:teamId',
                    component: TeamMembers,
                    props: true
                },
            ]
        },
        {
            name: "users",
            path: `${baseRoute}users`,
            component: UsersList
        },
        {
            path: "/:notFound(.*)",
            component: NotFound
        }
    ]
});

const app = createApp(App);
app.use(router)

app.mount('#app');
