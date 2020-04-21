<template>
  <div class="MenuComponent">
    <ul class="menu">
      <li @click="push(name, 'login')"><a href=""> Inicio</a></li>
      <li><a href=""> Ingresos</a></li>
      <li><a href=""> Egresos</a></li>
      <li><a href=""> Clientes</a></li>
      <li><a href=""> Cátalogos</a>
      <ul>
						<li><a href="">Submenu1</a></li>
						<li><a href="">Submenu2</a></li>
						<li><a href="">Submenu3</a></li>
        </ul>
      </li>
     

    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.MenuComponent {
  background: #0B2239;
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
li ul {
				display:none;
				position:absolute;
				min-width:140px;
			}
</style>
