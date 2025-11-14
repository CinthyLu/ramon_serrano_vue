<template>
  <div class="p-6 space-y-4">
    <h1 class="text-3xl font-bold">Home</h1>
    <h2 class="text-xl text-gray-600">Fundamentos</h2>

    <p class="text-gray-700">homePage works!</p>

    <!-- Navegación -->
    <RouterLink
      to="/perfil"
      class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
    >
      Ir al Perfil
    </RouterLink>

    <!-- Contadores -->
    <h1 class="text-2xl font-semibold">Contador: {{ counter }}</h1>
    <h1 class="text-2xl font-semibold">
      Contador Signal: {{ counterSignal }}
    </h1>

    <div class="space-x-2">
      <button @click="changeValue(1)" class="btn">Incrementar</button>
      <button @click="changeValue(-1)" class="btn bg-red-500">
        Restar
      </button>
      <button @click="resetValue(0)" class="btn bg-gray-700">
        RESET
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";

// contador normal
const counter = ref(0);

// equivalente al signal() de Angular
const counterSignal = ref(0);

// actualizar signal cada segundo
setInterval(() => {
  counterSignal.value++;
}, 1000);

const changeValue = (value: number) => {
  counter.value += value;
  counterSignal.value += value;
};

const resetValue = (value: number) => {
  counter.value = value;
  counterSignal.value = value;
};
</script>

<style scoped>
.btn {
  @apply px-4 py-2 rounded-lg text-white bg-blue-500 hover:bg-blue-600;
}
</style>
