import React from "react";
import type { ListaTareasProps } from "../types";

// Recibe tareas tipadas y elige qué contenido mostrar según si hay elementos.
export const ListaTareas: React.FC<ListaTareasProps> = ({ tareas }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-4">
        📋 Lista de Tareas
      </h2>

      {/* Renderizado condicional: la expresión ternaria muestra un aviso cuando
          la lista está vacía y, si tiene datos, construye la lista de tareas. */}
      {tareas.length === 0 ? (
        <div className="p-6 text-center bg-amber-50 border border-amber-200 rounded-lg text-amber-800">
          <p className="font-medium">No hay tareas pendientes en la lista.</p>
          <p className="text-sm text-amber-600 mt-1">
            Usa los botones superiores para cargar o añadir tareas.
          </p>
        </div>
      ) : (
        <ul className="space-y-2">
          {/* Cada tarea se convierte en un <li>; su id estable sirve como key. */}
          {tareas.map((tarea) => (
            <li
              key={tarea.id}
              className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100"
            >
              {/* Las clases cambian según completada para tachar o resaltar el nombre. */}
              <span
                className={
                  tarea.completada
                    ? "line-through text-slate-400"
                    : "text-slate-800 font-medium"
                }
              >
                {tarea.nombre}
              </span>
              {/* El estado también determina el color y el texto de la etiqueta. */}
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
