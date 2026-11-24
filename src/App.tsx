import { useState } from "react";
import { Button } from "./components/Button";
import { ListaFrutas } from "./components/ListaFrutas";
import { ListaTareas } from "./components/ListaTareas";
import { frutasIniciales, tareasIniciales } from "./data/mockData";
import type { Tarea } from "./types";

export function App() {
  const [frutas, setFrutas] = useState<string[]>(frutasIniciales);
  const [tareas, setTareas] = useState<Tarea[]>(tareasIniciales);

  const agregarFruta = () => {
    const extras = ["Kiwi", "Naranja", "Uva", "Piña", "Sandía"];
    const aleatoria = extras[Math.floor(Math.random() * extras.length)];
    setFrutas([...frutas, aleatoria]);
  };

  const vaciarTareas = () => setTareas([]);
  const restaurarTareas = () => setTareas(tareasIniciales);

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

        {/* Barra de acciones con Flexbox */}
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

        {/* Contenedor Principal Responsive con Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ListaFrutas frutas={frutas} />
          <ListaTareas tareas={tareas} />
        </main>
      </div>
    </div>
  );
}

export default App;
