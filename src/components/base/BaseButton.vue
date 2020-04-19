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
        background: seagreen;
        height: 3rem;
        border:none;
        border-radius: 4px;
        width: 30%;  
        color:white;  
        font-size:1.3rem;
    }
</style>