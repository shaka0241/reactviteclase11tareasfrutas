import type { Tarea } from "../types";

export const FRUTAS_INICIALES: string[] = [
  "Manzana",
  "Plátano",
  "Fresa",
  "Mango",
  "Kiwi",
];

export const TAREAS_INICIALES: Tarea[] = [
  {
    id: 1,
    nombre: "Configurar proyecto con Vite y TypeScript",
    completada: true,
  },
  { id: 2, nombre: "Crear componente Button reutilizable", completada: true },
  { id: 3, nombre: "Renderizar listas usando .map()", completada: false },
  { id: 4, nombre: "Implementar mensaje de estado vacío", completada: false },
];
