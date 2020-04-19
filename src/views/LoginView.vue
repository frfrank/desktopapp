<template>
    <div class="LoginView">
        <h1 class="login">Login</h1>
        <h3>Usuario</h3>
        <BaseInput type="text"></BaseInput>
        
        <h3>Contraseña</h3>
         <BaseInput type="password"></BaseInput>

        <BaseButton contenido='Ingresar'></BaseButton>
        
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.LoginView {
  border: 2px solid rgb(231, 129, 33);
  width: 30%;
  margin: auto;
  margin-top: 5rem;
  border-radius: 14px;
  .login {
    color: rgb(231, 129, 33);
    padding-top: 1rem;
  }
  h3 {
    color: rgb(231, 129, 33);
    text-align: left;
    padding-left: 10%;
  }
}
</style>