<template>

    <div>

        <div class="content">
            <h1>Welcome to My Landing Page</h1>
            <p>This is a simple landing page built with Vue.js.</p>
            <p>This page is currently being built.</p>
        </div>

        <div class="school-projects">
            <h1>School Projects</h1>
            <a href="https://web.tecnico.ulisboa.pt/joao.simoes/NAVGUIDE/#/" target="_blank">NAVGUIDE</a>
        </div>

    </div>

</template>


<style>
.content {
    text-align: center;
    margin-top: 50px;
}

.school-projects {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
<script>
export default {
    name: "HomeView",
}

</script>
