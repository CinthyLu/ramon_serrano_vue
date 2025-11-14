<template>
  <div class="listado-proyectos">
    <h2>{{ listName }}</h2>

    <ul v-if="proyectos.length > 0" class="lista">
      <li v-for="proy in proyectos" :key="proy.id" class="item">
        <h3>{{ proy.nombre }}</h3>
        <p>{{ proy.descripcion }}</p>
      </li>
    </ul>

    <p v-else class="vacio">No hay proyectos</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

// ---------- Props ----------
defineProps({
  listName: {
    type: String,
    required: true,
  },
  proyectos: {
    type: Array,
    required: true,
  },
});
</script>

<style scoped>
.listado-proyectos {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 10px;
  background: #f6f6f6;
  border: 1px solid #ddd;
}

.lista {
  list-style: none;
  padding: 0;
}

.item {
  background: white;
  border: 1px solid #ccc;
  padding: 0.8rem;
  border-radius: 8px;
  margin-bottom: 10px;
}

.item h3 {
  margin: 0 0 5px;
}

.vacio {
  font-style: italic;
  color: gray;
}
</style>
