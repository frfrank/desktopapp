<template>
    <div class="LoginView">
      <div class="formLogin">
        <h1 class="login">Welcome</h1>
        <img src="@/assets/images/user.svg" class="user">
       
        <BaseInput type="text" class="usuario"></BaseInput>       
      
         <BaseInput type="password" class="password"></BaseInput>

        <BaseButton contenido='Login' class="boton"></BaseButton>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.LoginView {
  height: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  justify-items: center;

}
.formLogin {
  width: 30%;
   background: #ccc;
  border-radius: 14px;
  height: auto;

  .login {
    padding-top: 1rem;
  }
}
.user {
  width: 10%;
}
.password {
  margin-top: 5%;
}
.usuario{
  margin-top:5%;
}
.boton {
  margin-top:5%;
}
</style>