<template>
    <section>
        <h2>{{ teamName }}</h2>
        <ul>
            <UserItem v-for="member in members"
                      :key="member.id"
                      :name="member.fullName"
                      :role="member.role"
            />
        </ul>
        <router-link :to="redirectMember1">View Members Team 1</router-link>
    </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
    components: {
        UserItem
    },
    data() {
        return {
            teamName: null,
            members: []
        }
    },
    inject: ["users", "teams"],
    created() {
        this.loadTeamMembers(this.teamId)
    },
    watch: {
        teamId(newId) {
            this.loadTeamMembers(newId)
        }
    },
    props: ["teamId"],
    methods: {
        loadTeamMembers(teamId) {
            const team = this.teams.find(team => team.id === Number(teamId));
            if (team) {
                const membersList = [];
                for (const member of team.members) {
                    const user = this.users.find(user => user.id === member)
                    membersList.push(user)
                }
                this.members = membersList
                this.teamName = team.name
            }
        }
    },
    computed: {
        redirectMember1() {
            return {name: "team-members", params: {teamId: 1}}
        }
    }
};
</script>

<style scoped>
section {
    margin: 2rem auto;
    max-width: 40rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    border-radius: 12px;
}

h2 {
    margin: 0.5rem 0;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>
