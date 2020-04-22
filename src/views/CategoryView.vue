<template>
    <div class="CategoryView">
        <h1>Lista de   categorias</h1>
        <Table :category='fetchCategory'>
        </Table>
       
    </div>
</template>

<script>
    import Table from '../components/table/Table.vue'
    import {mapGetters, mapActions } from "vuex";

    export default {
        name: "CategoryView",
        components:{
            Table
        },
        methods:{
            ...mapActions(["fetchListCategory"])
        },
        computed:mapGetters(['fetchCategory']),
        
        created(){
            this.fetchListCategory();           
        }
    }
</script>

<style lang="scss" scoped>

</style>