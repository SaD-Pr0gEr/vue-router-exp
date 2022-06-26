<template>
    <button class="confirm" @click="confirmRedirect"><span>confirm redirect to teams</span></button>
    <ul class="users_list">
        <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
    components: {
        UserItem,
    },
    inject: ['users'],
    methods: {
        confirmRedirect () {
            this.$router.push("/teams")
        }
    }
};
</script>

<style>
.users_list {
    list-style: none;
    margin: 2rem auto;
    max-width: 20rem;
    padding: 0;
}

.confirm {
    background-color: #ff4f4f;
    color: white;
    padding: 15px;
    border-radius: 5px;
    border: #ff4f4f;
    margin-left: 50px;
    font-size: 15px;
}

.confirm:hover {
    background-color: #f1a80a;
    color: #252525;
}
</style>
