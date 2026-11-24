import React from "react";
import type { ListaTareasProps } from "../types";

// React.FC<Props> tipa un componente funcional y permite que TypeScript compruebe
// sus propiedades. Se usa si queremos declarar explícitamente ese tipo; es
// opcional, también puede tiparse el parámetro directamente.
export const ListaTareas: React.FC<ListaTareasProps> = ({ tareas }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-4">
        📋 Lista de Tareas
      </h2>

      {tareas.length === 0 ? (
        <div className="p-6 text-center bg-amber-50 border border-amber-200 rounded-lg text-amber-800">
          <p className="font-medium">No hay tareas pendientes en la lista.</p>
          <p className="text-sm text-amber-600 mt-1">
            Usa los botones superiores para cargar o añadir tareas.
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {tareas.map((tarea) => (
            <li
              key={tarea.id}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100"
            >
              <span
                className={
                  tarea.completada
                    ? "line-through text-slate-400"
                    : "text-slate-800 font-medium"
                }
              >
                {tarea.nombre}
              </span>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                  tarea.completada
                    ? "bg-green-100 text-green-700"
                    : "bg-yellow-100 text-yellow-700"
                }`}
              >
                {tarea.completada ? "Completada" : "Pendiente"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
