<template>
    <router-view></router-view>
    <button class="confirm" @click="confirmRedirect"><span>confirm redirect to users</span></button>
    <ul>
        <teams-item
            v-for="team in filterTeams"
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
    },
    computed: {
        filterTeams() {
            return this.sortParam ? this.teams.filter(search => search.searchRole === this.sortParam) : this.teams
        }
    },
    created() {
        this.$route.query.sort != null ? this.sortParam = this.$route.query.sort : null
    },
    data() {
        return {
            sortParam: null
        }
    },
    watch: {
        $route(newRoute) {
            this.$router.replace(newRoute)
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