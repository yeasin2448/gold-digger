<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
</template>

<script>
// import { bus } from '../main'
export default {
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            copyright : 'Copyright 2021'
        }
    },
    created() {
        // bus.$on('titleOn', (data)=> {
        //     this.title = data
        // })
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