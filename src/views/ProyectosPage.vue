<template>
  <div class="proyectos-page">
    <h1>Proyectos</h1>

    <ListadoProyectos
      listName="Listados Proyectos desde Servicio"
      :proyectos="proyectos"
    />

    <AddProyecto
      @newProyecto="addProyecto"
      @deleteProyecto="dellProyecto"
    />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import AddProyecto from "../components/AddProyecto.vue";
import ListadoProyectos from "../components/ListadoProyectos.vue";

// --- LocalStorage KEY ---
const STORAGE_KEY = "proyectosApp";

// --- Cargar inicial desde localStorage ---
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

// --- Guardar automáticamente como Angular effect() ---
watch(
  proyectos,
  (value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  },
  { deep: true }
);

// --- Funciones que reemplazan al service ---
function addProyecto(nuevo) {
  proyectos.value.push(nuevo);
}

function dellProyecto() {
  proyectos.value.shift();
}
</script>

<style scoped>
.proyectos-page {
  padding: 1.5rem;
}
</style>
