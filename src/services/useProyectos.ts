import { ref, watchEffect } from "vue";

export interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
}

const STORAGE_KEY = "proyectosApp";

const loadProyectos = (): Proyecto[] => {
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
};

const proyectos = ref<Proyecto[]>(loadProyectos());

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(proyectos.value));
});

export function useProyectos() {
  const addProyecto = (newProyecto: Proyecto) => {
    proyectos.value = [...proyectos.value, newProyecto];
  };

  const deleteProyecto = () => {
    proyectos.value = proyectos.value.slice(1);
  };

  return {
    proyectos,
    addProyecto,
    deleteProyecto,
  };
}
