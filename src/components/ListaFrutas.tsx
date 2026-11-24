import React from "react";
import type { ListaFrutasProps } from "../types";

// React.FC<Props> tipa un componente funcional: TypeScript comprueba que las
// propiedades recibidas coincidan con Props. Se usa cuando queremos declarar
// explícitamente ese tipo en el componente; es opcional, también puede tiparse
// directamente el parámetro: ({ frutas }: ListaFrutasProps) => ...
export const ListaFrutas: React.FC<ListaFrutasProps> = ({ frutas }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800">🍎 Lista de Frutas</h2>
        <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
          Total: {frutas.length} {frutas.length === 1 ? "fruta" : "frutas"}
        </span>
      </div>

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
