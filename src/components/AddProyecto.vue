<template>
  <div class="add-proyecto">
    <h2>Agregar Proyecto</h2>

    <div class="form-group">
      <label>Nombre:</label>
      <input
        type="text"
        v-model="name"
        placeholder="Nombre del proyecto"
      />
    </div>

    <div class="form-group">
      <label>Descripción:</label>
      <input
        type="text"
        v-model="description"
        placeholder="Descripción"
      />
    </div>

    <div class="buttons">
      <button @click="emitProyecto">Agregar</button>
      <button class="danger" @click="emitDelete">Eliminar Primero</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// --- Props / Emits ---
const emit = defineEmits(["newProyecto", "deleteProyecto"]);

// --- Reemplazo de signals Angular ---
const name = ref("");
const description = ref("");

// --- Métodos equivalentes a Angular ---
function emitProyecto() {
  const newProyecto = {
    id: Math.floor(Math.random() * 1000),
    nombre: name.value,
    descripcion: description.value,
  };

  emit("newProyecto", newProyecto);

  // reset como Angular
  name.value = "";
  description.value = "";
}

function emitDelete() {
  emit("deleteProyecto");
}
</script>

<style scoped>
.add-proyecto {
  border: 1px solid #ddd;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 8px;
  background: #f8f8f8;
}

.form-group {
  margin-bottom: 1rem;
}

input {
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
}

button {
  padding: 8px 12px;
  margin-right: 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  background: #4caf50;
  color: white;
}

button.danger {
  background: #e53935;
}
</style>
