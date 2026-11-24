import type { ListaFrutasProps } from "../types";

export const ListaFrutas = ({ frutas }: ListaFrutasProps) => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-slate-800">Lista de Frutas</h2>
        {/* Interpolación en JSX para mostrar el total */}
        <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-3 py-1 rounded-full">
          Total: {frutas.length}
        </span>
      </div>

      <ul className="space-y-2">
        {frutas.map((fruta, index) => (
          <li
            key={index}
            className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-lg text-slate-700 border border-slate-100"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            {fruta}
          </li>
        ))}
      </ul>
    </section>
  );
};
