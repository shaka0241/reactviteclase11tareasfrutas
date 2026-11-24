import { useState } from "react";
import { Button } from "./components/Button";
import { ListaFrutas } from "./components/ListaFrutas";
import { ListaTareas } from "./components/ListaTareas";
import { frutasIniciales, tareasIniciales } from "./data/mockData";
import type { Tarea } from "./types";

// Este componente raíz coordina el estado de la pantalla y conecta los
// componentes visuales con los datos y las acciones del usuario.
export function App() {
  // useState conserva estos valores entre renderizados y ofrece una función
  // para actualizarlos cuando el usuario interactúa con la interfaz.
  const [frutas, setFrutas] = useState<string[]>(frutasIniciales);
  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales);

  // Elige una fruta del catálogo y crea un array nuevo para actualizar el estado
  // de forma inmutable, como se recomienda al trabajar con React.
  const agregarFruta = () => {
    const extras = ["Kiwi", "Naranja", "Uva", "Piña", "Sandía"];
    const aleatoria = extras[Math.floor(Math.random() * extras.length)];
    setFrutas([...frutas, aleatoria]);
  };

  // Estas acciones actualizan la lista completa: una la vacía y la otra recupera
  // los datos iniciales definidos en el módulo de datos de ejemplo.
  const vaciarTareas = () => setTareas([]);
  const restaurarTareas = () => setTareas(tareasIniciales);

  return (
    // Las clases de Tailwind establecen el fondo, el espaciado y el ancho
    // adaptable de la página sin necesidad de escribir reglas CSS propias.
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Cabecera */}
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Práctica Fullstack: React + TS + Tailwind
          </h1>
          <p className="text-slate-600">
            Componentes dinámicos, tipado de props, listas y renderizado
            condicional
          </p>
        </header>

        {/* Los botones reciben texto y callbacks mediante props; al hacer clic,
            ejecutan las funciones que modifican el estado de App. */}
        <div className="flex flex-wrap items-center justify-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <Button
            texto="+ Añadir Fruta Aleatoria"
            onClick={agregarFruta}
            variante="primario"
          />
          <Button
            texto="Vaciar Tareas (Probar Condicional)"
            onClick={vaciarTareas}
            variante="peligro"
          />
          <Button
            texto="Restaurar Tareas"
            onClick={restaurarTareas}
            variante="neutro"
          />
        </div>

        {/* Grid muestra las dos listas en columnas en pantallas medianas y
            reorganiza el contenido en una sola columna en pantallas pequeñas. */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Los datos de estado se pasan a cada componente como props. */}
          <ListaFrutas frutas={frutas} />
          <ListaTareas tareas={tareas} />
        </main>
      </div>
    </div>
  );
}

// Permite importar el componente como exportación por defecto desde otros módulos.
export default App;
