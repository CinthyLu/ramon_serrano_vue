<template>
  <div class="card">
    <h3>Agregar Proyecto</h3>

    <form @submit.prevent="agregarProyecto">
      <div class="input-group">
        <label>Nombre del Proyecto</label>
        <input v-model="nombre" type="text" required />
      </div>

      <div class="input-group">
        <label>Descripción del Proyecto</label>
        <input v-model="descripcion" type="text" required />
      </div>

      <button type="submit">Agregar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormularioAgregar",

  data() {
    return {
      nombre: "",
      descripcion: "",
    };
  },

  emits: ["proyecto-agregado"],

  methods: {
    agregarProyecto() {
      if (!this.nombre || !this.descripcion) return;

      // Emitimos el nuevo proyecto al padre
      this.$emit("proyecto-agregado", {
        nombre: this.nombre,
        descripcion: this.descripcion,
      });

      // Limpiar campos
      this.nombre = "";
      this.descripcion = "";
    },
  },
};
</script>

<style scoped>
.card {
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  margin-bottom: 20px;
  max-width: 400px;
}
.input-group {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
}
button {
  padding: 8px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
