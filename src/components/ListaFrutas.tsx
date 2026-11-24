import React from "react";
import type { ListaFrutasProps } from "../types";

// Componente de presentación: recibe la colección por props y no modifica el estado.
export const ListaFrutas: React.FC<ListaFrutasProps> = ({ frutas }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800">🍎 Lista de Frutas</h2>
        {/* length calcula el total y el operador ternario ajusta el singular/plural. */}
        <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
          Total: {frutas.length} {frutas.length === 1 ? "fruta" : "frutas"}
        </span>
      </div>

      {/* map transforma cada dato en un elemento de lista; key ayuda a React a
          identificar cada elemento al comparar una actualización con la anterior. */}
      <ul className="space-y-2">
        {frutas.map((fruta, index) => (
          <li
            key={`${fruta}-${index}`}
            className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg text-slate-700 border border-slate-100"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            {fruta}
          </li>
        ))}
      </ul>
    </div>
  );
};
