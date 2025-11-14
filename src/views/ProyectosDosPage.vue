<template>
  <div class="proyectos-dos-page">
    <h1>Proyectos - Página Dos</h1>

    <p>Esta es la segunda versión del listado de proyectos.</p>

    <ListadoProyectos
      listName="Listado Proyectos (Página 2)"
      :proyectos="proyectos"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import ListadoProyectos from "../components/ListadoProyectos.vue";

const STORAGE_KEY = "proyectosApp";

// Cargar proyectos desde localStorage
const proyectos = ref(loadProyectos());

function loadProyectos() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data
    ? JSON.parse(data)
    : [
        {
          id: 1,
          nombre: "Proyecto A",
          descripcion: "Descripción",
        },
      ];
}

// Guardar automáticamente cambios
watch(
  proyectos,
  (value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  },
  { deep: true }
);
</script>

<style scoped>
.proyectos-dos-page {
  padding: 1.5rem;
}
</style>
