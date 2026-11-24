// useState es un Hook de React para guardar el "estado": datos que pueden cambiar
// mientras la aplicación se usa y cuyo valor debe reflejarse en la interfaz.
// Recibe un valor inicial y devuelve [valorActual, funcionParaActualizar].
// Al llamar a la función para actualizarlo, React conserva el nuevo valor y
// vuelve a renderizar el componente. Se llama en el nivel principal del componente.
import { useState } from "react";

// Importamos los componentes reutilizables que forman la interfaz de la página.
import { Button } from "./components/Button";
import { ListaFrutas } from "./components/ListaFrutas";
import { ListaTareas } from "./components/ListaTareas";

// Los datos iniciales sirven para cargar la aplicación y restaurar las tareas.
import { frutasIniciales, tareasIniciales } from "./data/mockData";

// Tarea define la forma de cada elemento almacenado en el estado de tareas.
import type { Tarea } from "./types";

// Este es el componente principal de la aplicación.
// React.FC es opcional: aquí TypeScript infiere el tipo de retorno de la función.
export function App() {
  // Cada estado conserva una lista y su setter permite actualizarla.
  const [frutas, setFrutas] = useState<string[]>(frutasIniciales);
  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales);

  // Elige una fruta al azar y crea una nueva lista para actualizar el estado.
  const agregarFruta = () => {
    const extras = ["Kiwi", "Naranja", "Uva", "Piña", "Sandía"];
    const aleatoria = extras[Math.floor(Math.random() * extras.length)];
    setFrutas([...frutas, aleatoria]);
  };

  // Estas acciones actualizan la lista de tareas desde los datos iniciales.
  const vaciarTareas = () => setTareas([]);
  const restaurarTareas = () => setTareas(tareasIniciales);

  // El JSX describe la estructura visual y conecta los estados con los componentes.
  return (
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

        {/* Cada botón recibe el texto, su manejador y la variante visual por props. */}
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

        {/* Pasamos el estado a las listas mediante props; Grid las distribuye en columnas. */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ListaFrutas frutas={frutas} />
          <ListaTareas tareas={tareas} />
        </main>
      </div>
    </div>
  );
}

// La exportación por defecto permite importar App sin usar llaves.
export default App;
