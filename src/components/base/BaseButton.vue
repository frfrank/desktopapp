<template>
  <div class="BaseButton">
    <button :style="button">{{ contenido }}</button>
  </div>
</template>

<script>
export default {
  props: {
    contenido: {
      type: String,
    },
    background: {
      type: String,
    },
  },
  data() {
    return {
      button: {
        background: this.background,
        height:'3rem',
        border: "none",
        borderRadius: "4px",
        color: "white",
        fontSize: "1.3rem",
        width: "100%",
        
      },
    };
  },
  methods: {
    propertyBoton() {},
  },
};
</script>

<style lang="scss" scoped></style>
