import { useState } from "react";
import { Button } from "./components/Button";
import { ListaFrutas } from "./components/ListaFrutas";
import { ListaTareas } from "./components/ListaTareas";
import { FRUTAS_INICIALES, TAREAS_INICIALES } from "./data/mockData";
import type { Tarea } from "./types";

export function App() {
  const [frutas, setFrutas] = useState<string[]>(FRUTAS_INICIALES);
  const [tareas, setTareas] = useState<Tarea[]>(TAREAS_INICIALES);

  const agregarFruta = () => {
    setFrutas([...frutas, `Fruta #${frutas.length + 1}`]);
  };

  const vaciarTareas = () => setTareas([]);
  const restaurarTareas = () => setTareas(TAREAS_INICIALES);

  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold text-slate-900">
            Práctica: Componentes Dinámicos y Listas
          </h1>
          <p className="text-slate-600">
            React + TypeScript + Vite + Tailwind CSS
          </p>
        </header>

        {/* Barra de acciones responsive con Flexbox */}
        <div className="flex flex-wrap items-center justify-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <Button
            texto="Añadir Fruta"
            onClick={agregarFruta}
            variante="primario"
          />
          <Button
            texto="Vaciar Tareas"
            onClick={vaciarTareas}
            variante="peligro"
          />
          <Button
            texto="Restaurar Tareas"
            onClick={restaurarTareas}
            variante="secundario"
          />
        </div>

        {/* Layout responsive con Grid (1 columna en móvil, 2 en escritorio) */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ListaFrutas frutas={frutas} />
          <ListaTareas tareas={tareas} />
        </main>
      </div>
    </div>
  );
}

export default App;
