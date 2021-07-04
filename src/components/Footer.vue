<template>
    <footer>
        <p>{{ copyright }}</p>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            copyright : 'Copyright 2021 Gold Digger'
        }
    }
}
</script>

<style scoped>
footer {
    text-align: center;
    padding: 20px 15px;
    background: #2c3e50;
}
footer p {
    margin: 0;
    color: #fff;
    letter-spacing: 1.5px;
}
</style>