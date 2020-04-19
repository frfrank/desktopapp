<template>
  <div class="MenuComponent">
    <ul class="menu">
      <li @click="push(name, 'login')"><a href=""> Inicio</a></li>
      <li><a href=""> Ingresos</a></li>
      <li><a href=""> Egresos</a></li>
      <li><a href=""> Clientes</a></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.MenuComponent {
  background: rgb(94, 92, 91);
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: nowrap;
  list-style-type: none;
  text-decoration: none;
  li{
      padding: 1rem;
        
      a{
            text-decoration: none;
            color:white;   
      }
  }
}
</style>
