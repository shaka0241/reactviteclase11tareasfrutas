// Importa las funciones de configuración y los plugins que usa el proyecto.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Vite transforma JSX/React y procesa las clases de Tailwind durante el desarrollo
// y la compilación de producción.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
