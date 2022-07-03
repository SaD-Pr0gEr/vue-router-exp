<template>
    <router-view></router-view>
    <button class="confirm" @click="confirmRedirect"><span>confirm redirect to users</span></button>
    <ul>
        <teams-item
            v-for="team in filterTeams()"
            :key="team.id"
            :id="team.id"
            :name="team.name"
            :member-count="team.members.length"
            :searchParam="team.searchRole"
        ></teams-item>
    </ul>
</template>

<script>
import TeamsItem from './TeamsItem.vue';

export default {
    components: {
        TeamsItem,
    },
    inject: ['teams'],
    methods: {
        confirmRedirect() {
            this.$router.push("/users")
        },
        filterTeams() {
            return this.$route.query.sort ? this.teams.filter(search => search.searchRole === this.$route.query.sort) : this.teams
        }
    },
    created() {
        this.filterTeams()
    },
    watch: {
        $route(newRoute) {
            this.$router.push(newRoute)
        }
    }
};
</script>

<style scoped>
ul {
    list-style: none;
    margin: 2rem auto;
    max-width: 40rem;
    padding: 0;
}
</style>