import { createRouter, createWebHistory } from 'vue-router'

// Importa las páginas
import HomePage from '../views/HomePage.vue'
import PerfilPage from '../views/PerfilPage.vue'
import ProyectosPage from '../views/ProyectosPage.vue'
import ProyectosDosPage from '../views/ProyectosDosPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: "Home", component: HomePage },
    { path: '/perfil', name: "Perfil", component: PerfilPage },
    {
      path: "/proyectos",
      name: "Proyectos",
      component: ProyectosPage,
    },
    {
      path: "/proyectos-dos",
      name: "ProyectosDos",
      component: ProyectosDosPage,
    },
  ],
})

export default router
