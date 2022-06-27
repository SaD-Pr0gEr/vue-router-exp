<template>
    <the-navigation></the-navigation>
    <main>
        <router-view></router-view>
    </main>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
    components: {
        TheNavigation,
    },
    data() {
        return {
            activePage: 'teams-list',
            teams: [
                {id: 1, name: 'Frontend Engineers', members: [1, 2]},
                {id: 2, name: 'Backend Engineers', members: [1, 2, 3]},
                {id: 3, name: 'Client Consulting', members: [4, 5]},
            ],
            users: [
                {id: 1, fullName: 'Max Schwarz', role: 'Engineer'},
                {id: 2, fullName: 'Praveen Kumar', role: 'Engineer'},
                {id: 3, fullName: 'Julie Jones', role: 'Engineer'},
                {id: 4, fullName: 'Alex Blackfield', role: 'Consultant'},
                {id: 5, fullName: 'Marie Smith', role: 'Consultant'},
            ],
        };
    },
    provide() {
        return {
            teams: this.teams,
            users: this.users,
        };
    }
};
</script>

<style>
* {
    box-sizing: border-box;
}

html {
    font-family: sans-serif;
}

body {
    margin: 0;
}
</style>