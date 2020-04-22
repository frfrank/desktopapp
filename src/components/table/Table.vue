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
        <td>50</td>
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
  border: 1px solid black;
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
</style>
