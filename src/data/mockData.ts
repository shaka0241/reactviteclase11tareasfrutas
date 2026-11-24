import type { Tarea } from "../types";

// Datos iniciales para demostrar cómo se renderiza una colección de strings.
export const frutasIniciales: string[] = [
  "Manzana",
  "Plátano",
  "Fresa",
  "Mango",
  "Arándanos",
];

// Datos de ejemplo que siguen la interfaz Tarea definida en el módulo de tipos.
export const tareasIniciales: Tarea[] = [
  { id: 1, nombre: "Configurar entorno Vite + TypeScript", completada: true },
  { id: 2, nombre: "Tipar props con interfaces", completada: true },
  { id: 3, nombre: "Implementar renderizado condicional", completada: false },
  { id: 4, nombre: "Estilizar con Tailwind Grid y Flexbox", completada: false },
];
