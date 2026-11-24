import type { ListaTareasProps } from "../types";

export const ListaTareas = ({ tareas }: ListaTareasProps) => {
  return (
    <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold text-slate-800 mb-4">Lista de Tareas</h2>

      {/* Renderizado condicional con operador ternario */}
      {tareas.length === 0 ? (
        <div className="p-6 text-center bg-amber-50 border border-amber-200 rounded-lg text-amber-800">
          <p className="font-medium">
            No hay tareas pendientes en este momento.
          </p>
          <p className="text-sm text-amber-600 mt-1">
            Usa el botón superior para restaurar las tareas de prueba.
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
                    : "text-slate-700 font-medium"
                }
              >
                {tarea.nombre}
              </span>
              <span
                className={`text-xs px-2.5 py-1 rounded-full font-semibold ${
                  tarea.completada
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {tarea.completada ? "Completada" : "Pendiente"}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
