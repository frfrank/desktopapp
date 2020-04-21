<template>
    <div>
        <input type='text' >
    </div>
</template>

<script>
    export default {
        props:{
            type:{
                type:String
            }
        }
    }
</script>

<style lang="scss" scoped>
    input{
        height: 2.5rem;      
        border-radius: 5px;
        border: solid 1px rgb(231, 129, 33);
        padding: 3px;
        padding-left: 1rem;
        font-size: 1.5rem;
        margin-bottom: 0.30rem;
        width: 80%;
    }

</style>