<template>
    <div class="BaseButton">
        <button >{{contenido}}</button>
    </div>
</template>

<script>
    export default {
        props:{
            contenido:{
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>
    button{
        background: rgb(231, 129, 33);;
        height: 3rem;
        border:none;
        border-radius: 4px;         
        color:white;  
        font-size:1.3rem;
        width: 80%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>