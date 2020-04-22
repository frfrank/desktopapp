<template>
  <div>
    <table style="width:100%">
      <tr>
        <th>#</th>
        <th>Categoria</th>
        <th>Descripcion</th>
        <th>Estado</th>
        <th>Acciones</th>
      </tr>
      <tr v-for="(item, index) in category" :key="item.id">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.description }}</td>
        <td>{{ item.state }}</td>
        <td>
          <div class="action">
            <div class="delete">
              <BaseButton contenido="Eliminar" background="#C82333"></BaseButton>
            </div>
            <div class="update">
              <BaseButton contenido="Actualizar" background="#138496"></BaseButton>
            </div>
            <div class="show">
              <BaseButton contenido="Ver" background="#5A6268"></BaseButton>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
table,
th,
td {
  border: rgb(31, 29, 25) 1px solid;
  border-collapse: collapse;
}
th {
  background: #ccc;
  font-size: 1.3rem;
}
th,
td {
  padding: 15px;
}
.action {
  display: flex;
  flex-direction: row;
   flex-wrap: nowrap;
  justify-content: flex-end;
  margin-top: 3px;
  
  .delete {
    margin-left: 6px;
  }
  .update {
    margin-left: 6px;
  }
  .show {
    margin-left: 6px;
  }
}
</style>
