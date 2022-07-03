import { createRouter, createWebHistory } from 'vue-router'
import TeamsList from "@/pages/TeamsList";
import UsersList from "@/pages/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "@/pages/NotFound";
import TeamsFooter from "@/components/teams/TeamsFooter";
import UsersFooter from "@/components/users/UsersFooter";

let baseRoute = process.env.NODE_ENV === "production" ? "/vue-router-exp/dist/" : "/";

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
            components: {default: TeamsList, footer: TeamsFooter, },
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
            components: {default: UsersList, footer: UsersFooter}
        },
        {
            name: "notFound",
            path: "/:notFound(.*)*",
            component: NotFound
        }
    ],
    scrollBehavior(to, from, safePosition) {
        if(safePosition) {
            return safePosition
        }
        return {left: 0, top: 0}
    }
});

export default router;
